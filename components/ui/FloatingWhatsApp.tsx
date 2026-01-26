'use client'

import { MessageCircle } from 'lucide-react'
import { useLanguage } from '@/lib/contexts/LanguageContext'

export function FloatingWhatsApp() {
  const { language } = useLanguage()

  return (
    <a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 md:hidden bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
      aria-label={language === 'en' ? 'Contact via WhatsApp' : 'تماس از طریق واتساپ'}
    >
      <MessageCircle className="w-6 h-6" />
      <span className="sr-only">{language === 'en' ? 'WhatsApp' : 'واتساپ'}</span>
    </a>
  )
}
