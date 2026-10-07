import { ServicePage, serviceMetadata } from '@/components/sections/service/ServicePage'
import content from '@/data/service-pages/ai-solutions'

export const metadata = serviceMetadata(content)

export default function AiSolutionsPage() {
  return <ServicePage content={content} />
}
