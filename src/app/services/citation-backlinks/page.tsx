import { ServicePage, serviceMetadata } from '@/components/sections/service/ServicePage'
import content from '@/data/service-pages/citation-backlinks'

export const metadata = serviceMetadata(content)

export default function CitationBacklinksPage() {
  return <ServicePage content={content} />
}
