import { DomUtils, parseDocument } from 'htmlparser2'

/**
 * The WordPress posts are built with Elementor, and each post's `content`
 * contains the whole WordPress page template: header + mega menus, the
 * article, a "Recent Posts" sidebar, a CTA block and the footer.
 *
 * This pulls out only the article so it can be rendered inside the Next.js
 * layout: the H1 (returned as `headline`), text, images and FAQ accordions.
 * Posts written in the plain block editor pass through untouched.
 */

type Doc = ReturnType<typeof parseDocument>
type Node = Doc['children'][number]
type Element = Extract<Node, { attribs: Record<string, string> }>

export type ArticleFaq = { question: string; answer: string }
export type ExtractedArticle = { headline: string | null; html: string; faqs: ArticleFaq[] }

/** Widget types that make up the article body. */
const CONTENT_WIDGETS = new Set(['heading', 'text-editor', 'image', 'elementskit-accordion', 'accordion', 'toggle', 'video'])
/** Site-template widgets that only appear after the article (sidebar / CTA / footer). */
const END_WIDGETS = new Set(['eael-post-grid', 'posts', 'eael-creative-button', 'social-icons', 'icon-list', 'icon-box', 'button'])
const END_HEADING = /^(recent|latest|related) posts$/i

const isElement = (n: Node): n is Element => 'attribs' in n
const cls = (el: Node) => (isElement(el) ? el.attribs.class ?? '' : '')
const widgetType = (el: Element) => cls(el).match(/\belementor-widget-(?!wrap\b|container\b)([a-z0-9-]+)/)?.[1] ?? ''
const text = (el: Node | Node[]) => DomUtils.textContent(el).replace(/\s+/g, ' ').trim()

function isVisibleEverywhere(el: Node): boolean {
  for (let n: Node | null = el; n; n = n.parent as Node | null) {
    if (/\belementor-hidden-(desktop|tablet|mobile)\b/.test(cls(n))) return false
  }
  return true
}

function widgetBody(widget: Element): Node[] {
  const container = DomUtils.findOne(el => /\belementor-widget-container\b/.test(el.attribs.class ?? ''), widget.children, false)
  return (container ?? widget).children as Node[]
}

function renderWidget(widget: Element, type: string, faqs: ArticleFaq[]): string {
  const body = widgetBody(widget)

  if (type === 'heading') {
    const h = DomUtils.findOne(el => /^h[1-6]$/.test(el.name), body)
    if (!h) return ''
    const level = Math.min(4, Math.max(2, Number(h.name[1]))) // the page H1 is rendered by Next.js
    return `<h${level}>${DomUtils.getInnerHTML(h)}</h${level}>`
  }

  if (type === 'image') {
    const img = DomUtils.findOne(el => el.name === 'img', body)
    if (!img) return ''
    const caption = DomUtils.findOne(el => el.name === 'figcaption', body)
    return `<figure>${DomUtils.getOuterHTML(img)}${caption ? `<figcaption>${DomUtils.getInnerHTML(caption)}</figcaption>` : ''}</figure>`
  }

  if (type === 'elementskit-accordion' || type === 'accordion' || type === 'toggle') {
    const items: ArticleFaq[] = []
    if (type === 'elementskit-accordion') {
      for (const card of DomUtils.findAll(el => /\belementskit-card\b/.test(el.attribs.class ?? ''), body)) {
        const q = DomUtils.findOne(el => /\bekit-accordion-title\b/.test(el.attribs.class ?? ''), card.children)
        const a = DomUtils.findOne(el => /\belementskit-card-body\b/.test(el.attribs.class ?? ''), card.children)
        if (q && a) items.push({ question: text(q), answer: DomUtils.getInnerHTML(a).trim() })
      }
    } else {
      // Elementor's built-in accordion/toggle widgets.
      const titles = DomUtils.findAll(el => /\belementor-tab-title\b/.test(el.attribs.class ?? ''), body)
      const contents = DomUtils.findAll(el => /\belementor-tab-content\b/.test(el.attribs.class ?? ''), body)
      titles.forEach((t, i) => contents[i] && items.push({ question: text(t), answer: DomUtils.getInnerHTML(contents[i]).trim() }))
    }
    faqs.push(...items)
    return items.length
      ? `<div class="blog-faq">${items.map(f => `<details><summary>${escapeHtml(f.question)}</summary><div>${f.answer}</div></details>`).join('')}</div>`
      : ''
  }

  if (type === 'video') {
    const iframe = DomUtils.findOne(el => el.name === 'iframe', body)
    return iframe ? `<div data-youtube-video>${DomUtils.getOuterHTML(iframe)}</div>` : ''
  }

  // text-editor
  return DomUtils.getOuterHTML(body).trim()
}

function isInside(node: Node, ancestor: Node): boolean {
  for (let n = node.parent as Node | null; n; n = n.parent as Node | null) if (n === ancestor) return true
  return false
}

function escapeHtml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

export function extractArticle(html: string): ExtractedArticle {
  if (!html.includes('data-elementor-type')) return { headline: null, html, faqs: [] }

  const doc = parseDocument(html)
  const widgets = DomUtils.findAll(el => /\belementor-widget\b/.test(el.attribs.class ?? '') && !!widgetType(el), doc.children)
    .filter(el => widgetType(el) !== 'container' && isVisibleEverywhere(el))

  const start = widgets.findIndex(w => CONTENT_WIDGETS.has(widgetType(w)))
  if (start === -1) return { headline: null, html: '', faqs: [] }

  let end = widgets.length
  for (let i = start; i < widgets.length; i++) {
    const type = widgetType(widgets[i])
    if (END_WIDGETS.has(type) || (type === 'heading' && END_HEADING.test(text(widgets[i])))) { end = i; break }
  }

  const section = widgets.slice(start, end)
  let headline: string | null = null
  if (section.length && widgetType(section[0]) === 'heading' && DomUtils.findOne(el => el.name === 'h1', section[0].children)) {
    headline = text(section.shift()!)
  }

  const faqs: ArticleFaq[] = []
  const parts = section
    .filter(w => CONTENT_WIDGETS.has(widgetType(w)))
    // Skip widgets nested inside another collected widget.
    .filter((w, _, all) => !all.some(o => o !== w && isInside(w, o)))
    .map(w => renderWidget(w, widgetType(w), faqs))
    .filter(Boolean)

  return { headline, html: parts.join('\n'), faqs }
}

/** Decode entities and strip tags from WordPress `rendered` strings. */
export function plainText(html: string): string {
  return text(parseDocument(html).children as Node[])
}
