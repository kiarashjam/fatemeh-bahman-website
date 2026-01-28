'use client'

import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/lib/contexts/LanguageContext'
import { cn } from '@/lib/utils'

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const { language } = useLanguage()

  useEffect(() => {
    if (typeof window === 'undefined') return

    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className={cn(
            'fixed z-40 bottom-[max(1.5rem,env(safe-area-inset-bottom))] bg-gold-500 hover:bg-gold-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-colors focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 min-w-[48px] min-h-[48px] flex items-center justify-center touch-manipulation',
            language === 'fa' ? 'left-6' : 'right-6'
          )}
          aria-label={language === 'en' ? 'Back to top' : 'بازگشت به بالا'}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
