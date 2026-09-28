'use client'

import { PartnerCard } from './PartnerCard'
import type { PARTNERS } from '@/data/site'

export function PartnersGrid({ partners }: { partners: typeof PARTNERS }) {
  return (
    <div style={{ display: 'grid', gap: '1px', background: 'rgba(255,255,255,0.06)', overflow: 'hidden' }} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
      {partners.map((p, i) => <PartnerCard key={p.name} partner={p} index={i} />)}
    </div>
  )
}
