import { ServicePage, serviceMetadata } from '@/components/sections/service/ServicePage'
import content from '@/data/service-pages/graphic-design'

export const metadata = serviceMetadata(content)

export default function GraphicDesignPage() {
  return <ServicePage content={content} />
}
