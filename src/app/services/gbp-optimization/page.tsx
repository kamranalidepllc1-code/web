import { ServicePage, serviceMetadata } from '@/components/sections/service/ServicePage'
import content from '@/data/service-pages/gbp-optimization'

export const metadata = serviceMetadata(content)

export default function GbpOptimizationPage() {
  return <ServicePage content={content} />
}
