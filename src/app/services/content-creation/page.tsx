import { ServicePage, serviceMetadata } from '@/components/sections/service/ServicePage'
import content from '@/data/service-pages/content-creation'

export const metadata = serviceMetadata(content)

export default function ContentCreationPage() {
  return <ServicePage content={content} />
}
