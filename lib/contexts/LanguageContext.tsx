'use client'

/**
 * Language context – en/fa with persistence in localStorage and document dir/lang.
 * Use useLanguage() in components; setLanguage() updates state, storage, and <html dir/lang>.
 */
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'en' | 'fa'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

/** Central translation map for shared keys (nav, hero CTAs). Section copy often lives in lib/content.ts */
const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.lessons': 'Lessons',
    'nav.pricing': 'Pricing',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'hero.headline': 'Learn Persian with clarity, confidence, and culture.',
    'hero.subheadline': 'Professional Persian language instruction with 30+ years of teaching experience',
    'hero.cta.primary': 'Book a Trial Lesson',
    'hero.cta.secondary': 'WhatsApp Message',
  },
  fa: {
    'nav.home': 'خانه',
    'nav.about': 'درباره',
    'nav.lessons': 'درس‌ها',
    'nav.pricing': 'قیمت‌ها',
    'nav.faq': 'سوالات متداول',
    'nav.contact': 'تماس',
    'hero.headline': 'فارسی را با آرامش، اطمینان و فرهنگ یاد بگیرید.',
    'hero.subheadline': 'آموزش حرفه‌ای زبان فارسی با بیش از ۳۰ سال تجربه تدریس',
    'hero.cta.primary': 'رزرو جلسه آزمایشی',
    'hero.cta.secondary': 'پیام واتساپ',
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('fa')

  /** Hydrate language from localStorage on mount (SSR-safe). */
  useEffect(() => {
    try {
      const saved = localStorage.getItem('language') as Language
      if (saved && (saved === 'en' || saved === 'fa')) {
        setLanguageState(saved)
      }
    } catch (error) {
      // localStorage might not be available (SSR, private browsing, etc.)
      console.warn('Failed to access localStorage:', error)
    }
  }, [])

  /** Set language, persist to localStorage, and update document dir/lang for RTL. */
  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    try {
      localStorage.setItem('language', lang)
    } catch (error) {
      console.warn('Failed to save language to localStorage:', error)
    }
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('dir', lang === 'fa' ? 'rtl' : 'ltr')
      document.documentElement.setAttribute('lang', lang)
    }
  }

  /** Keep <html dir> and lang in sync when language changes (RTL for Persian). */
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('dir', language === 'fa' ? 'rtl' : 'ltr')
      document.documentElement.setAttribute('lang', language)
    }
  }, [language])

  /** Look up translation by key; falls back to key if missing. */
  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

/** Use language state and setLanguage; must be used inside LanguageProvider. */
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
