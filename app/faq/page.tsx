import { FAQHero } from '@/components/sections/faq/FAQHero'
import { FAQAccordion } from '@/components/sections/faq/FAQAccordion'

export const metadata = {
  title: 'FAQ - Fatemeh Bahman',
  description: 'Frequently asked questions about learning Persian with Fatemeh Bahman.',
}

export default function FAQPage() {
  return (
    <>
      <FAQHero />
      <FAQAccordion />
    </>
  )
}
