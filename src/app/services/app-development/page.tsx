import { ServicePage, serviceMetadata } from '@/components/sections/service/ServicePage'
import content from '@/data/service-pages/app-development'

export const metadata = serviceMetadata(content)

export default function AppDevelopmentPage() {
  return <ServicePage content={content} />
}
