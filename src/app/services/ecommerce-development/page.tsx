import { ServicePage, serviceMetadata } from '@/components/sections/service/ServicePage'
import content from '@/data/service-pages/ecommerce-development'

export const metadata = serviceMetadata(content)

export default function EcommerceDevelopmentPage() {
  return <ServicePage content={content} />
}
