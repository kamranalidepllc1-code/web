import { ServicePage, serviceMetadata } from '@/components/sections/service/ServicePage'
import content from '@/data/service-pages/website-design'

export const metadata = serviceMetadata(content)

export default function WebsiteDesignPage() {
  return <ServicePage content={content} />
}
