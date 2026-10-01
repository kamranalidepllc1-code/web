import { ServicePage, serviceMetadata } from '@/components/sections/service/ServicePage'
import content from '@/data/service-pages/game-development'

export const metadata = serviceMetadata(content)

export default function GameDevelopmentPage() {
  return <ServicePage content={content} />
}
