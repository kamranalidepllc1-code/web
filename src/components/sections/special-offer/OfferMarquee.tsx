import { SPECIAL_OFFER } from '@/data/specialOffer'

const TICKER = ['Special offer', 'Limited time', SPECIAL_OFFER.title]

export function OfferMarquee() {
  return (
    <div style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '1.25rem 0', overflow: 'hidden' }} aria-hidden="true">
      <div style={{ display: 'flex', width: 'max-content', animation: 'marquee 38s linear infinite' }}>
        {[0, 1].map(dup => (
          <div key={dup} style={{ display: 'flex' }}>
            {Array.from({ length: 4 }).flatMap((_, r) => TICKER.map((word, w) => (
              <span key={`${r}-${w}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '2.5rem', paddingRight: '2.5rem', fontFamily: "'Fraunces', serif", fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(1.25rem, 2.6vw, 2rem)', color: w === 1 ? '#CE307D' : 'rgba(240,237,232,0.5)', whiteSpace: 'nowrap' }}>
                {word} <span style={{ color: '#CE307D', fontStyle: 'normal', fontSize: '0.7em' }}>✦</span>
              </span>
            )))}
          </div>
        ))}
      </div>
    </div>
  )
}
