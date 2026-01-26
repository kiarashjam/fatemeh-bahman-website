'use client'

import { useLanguage } from '@/lib/contexts/LanguageContext'

export function SkipToContent() {
  const { language } = useLanguage()

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-gold-500 focus:text-white focus:rounded-lg focus:font-semibold focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2"
    >
      {language === 'en' ? 'Skip to main content' : 'رفتن به محتوای اصلی'}
    </a>
  )
}
