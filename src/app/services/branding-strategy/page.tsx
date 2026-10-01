import { ServicePage, serviceMetadata } from '@/components/sections/service/ServicePage'
import content from '@/data/service-pages/branding-strategy'

export const metadata = serviceMetadata(content)

export default function BrandingStrategyPage() {
  return <ServicePage content={content} />
}
