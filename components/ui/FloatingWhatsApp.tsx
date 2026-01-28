'use client'

import { MessageCircle } from 'lucide-react'
import { useLanguage } from '@/lib/contexts/LanguageContext'
import { cn } from '@/lib/utils'
import { SITE_CONFIG } from '@/lib/constants'

export function FloatingWhatsApp() {
  const { language } = useLanguage()

  return (
    <a
      href={SITE_CONFIG.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'fixed z-40 md:hidden bottom-[max(1.5rem,env(safe-area-inset-bottom))] bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 min-w-[48px] min-h-[48px] flex items-center justify-center touch-manipulation',
        language === 'fa' ? 'right-6' : 'left-6'
      )}
      aria-label={language === 'en' ? 'Contact via WhatsApp' : 'تماس از طریق واتساپ'}
    >
      <MessageCircle className="w-6 h-6" />
      <span className="sr-only">{language === 'en' ? 'WhatsApp' : 'واتساپ'}</span>
    </a>
  )
}
