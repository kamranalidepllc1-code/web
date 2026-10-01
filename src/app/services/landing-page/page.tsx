import { ServicePage, serviceMetadata } from '@/components/sections/service/ServicePage'
import content from '@/data/service-pages/landing-page'

export const metadata = serviceMetadata(content)

export default function LandingPageServicePage() {
  return <ServicePage content={content} />
}
