'use client'

/**
 * SkipToContent – accessibility link for keyboard users. Hidden by default (sr-only),
 * visible on focus; jumps to #main-content (layout.tsx main). RTL-aware position.
 */
import { useLanguage } from '@/lib/contexts/LanguageContext'
import { cn } from '@/lib/utils'

export function SkipToContent() {
  const { language } = useLanguage()

  return (
    <a
      href="#main-content"
      className={cn(
        'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-gold-500 focus:text-white focus:rounded-lg focus:font-semibold focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 focus:min-h-[44px] focus:flex focus:items-center',
        language === 'fa' ? 'focus:right-4' : 'focus:left-4'
      )}
    >
      {language === 'en' ? 'Skip to main content' : 'رفتن به محتوای اصلی'}
    </a>
  )
}
