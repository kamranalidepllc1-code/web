import { ServicePage, serviceMetadata } from '@/components/sections/service/ServicePage'
import content from '@/data/service-pages/software-development'

export const metadata = serviceMetadata(content)

export default function SoftwareDevelopmentPage() {
  return <ServicePage content={content} />
}
