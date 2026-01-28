/**
 * Homepage – composition of section components in reading order.
 * Each section is self-contained; order here defines the page flow.
 */
import { Hero } from '@/components/sections/Hero'
import { Highlights } from '@/components/sections/Highlights'
import { WhoIsThisFor } from '@/components/sections/WhoIsThisFor'
import { Testimonials } from '@/components/sections/Testimonials'
import { HowLessonsWork } from '@/components/sections/HowLessonsWork'
import { PricingPreview } from '@/components/sections/PricingPreview'
import { FAQPreview } from '@/components/sections/FAQPreview'
import { FinalCTA } from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <WhoIsThisFor />
      <Testimonials />
      <HowLessonsWork />
      <PricingPreview />
      <FAQPreview />
      <FinalCTA />
    </>
  )
}
