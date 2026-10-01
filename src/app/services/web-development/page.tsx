import { ServicePage, serviceMetadata } from '@/components/sections/service/ServicePage'
import content from '@/data/service-pages/web-development'

export const metadata = serviceMetadata(content)

export default function WebDevelopmentPage() {
  return <ServicePage content={content} />
}
