import { ServicePage, serviceMetadata } from '@/components/sections/service/ServicePage'
import content from '@/data/service-pages/social-media-marketing'

export const metadata = serviceMetadata(content)

export default function SocialMediaMarketingPage() {
  return <ServicePage content={content} />
}
