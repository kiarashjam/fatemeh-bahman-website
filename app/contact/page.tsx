import { ContactHero } from '@/components/sections/contact/ContactHero'
import { ContactForm } from '@/components/sections/contact/ContactForm'
import { QuickContact } from '@/components/sections/contact/QuickContact'
import { CalendarEmbed } from '@/components/sections/contact/CalendarEmbed'

export const metadata = {
  title: 'Contact & Booking - Fatemeh Bahman',
  description: 'Book a trial lesson or get in touch with Fatemeh Bahman to start your Persian language journey.',
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <QuickContact />
      <CalendarEmbed />
    </>
  )
}
