import { PricingHero } from '@/components/sections/pricing/PricingHero'
import { PricingCards } from '@/components/sections/pricing/PricingCards'
import { WhatIncluded } from '@/components/sections/pricing/WhatIncluded'

export const metadata = {
  title: 'Pricing - Fatemeh Bahman',
  description: 'Flexible pricing options for Persian language lessons. Choose from trial lessons, standard sessions, or bundle packages.',
}

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingCards />
      <WhatIncluded />
    </>
  )
}
