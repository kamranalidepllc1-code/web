import { ServicePage, serviceMetadata } from '@/components/sections/service/ServicePage'
import content from '@/data/service-pages/google-ads'

export const metadata = serviceMetadata(content)

export default function GoogleAdsPage() {
  return <ServicePage content={content} />
}
