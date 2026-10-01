import { ServicePage, serviceMetadata } from '@/components/sections/service/ServicePage'
import content from '@/data/service-pages/search-engine-optimization'

export const metadata = serviceMetadata(content)

export default function SearchEngineOptimizationPage() {
  return <ServicePage content={content} />
}
