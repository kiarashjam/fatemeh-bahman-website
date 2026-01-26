import { AboutHero } from '@/components/sections/about/AboutHero'
import { Timeline } from '@/components/sections/about/Timeline'
import { Philosophy } from '@/components/sections/about/Philosophy'
import { Certifications } from '@/components/sections/about/Certifications'
import { AboutQuote } from '@/components/sections/about/AboutQuote'

export const metadata = {
  title: 'About - Fatemeh Bahman',
  description: 'Learn about Fatemeh Bahman, a retired teacher with 30 years of experience teaching Persian language.',
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Timeline />
      <Philosophy />
      <Certifications />
      <AboutQuote />
    </>
  )
}
