'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/contexts/LanguageContext'

export function AboutHero() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: 'About Fatemeh Bahman',
      subtitle: 'A dedicated teacher with 30+ years of experience',
    },
    fa: {
      title: 'درباره فاطمه بهمن',
      subtitle: 'یک معلم متعهد با بیش از ۳۰ سال تجربه',
    },
  }

  const langContent = content[language]

  return (
    <section className="section-padding pt-32 bg-gradient-to-br from-beige-50 via-white to-beige-100 dark:from-navy-900 dark:via-navy-800 dark:to-navy-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-navy-900 dark:text-beige-50">
            {langContent.title}
          </h1>
          <p className="text-xl text-navy-600 dark:text-beige-300">
            {langContent.subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
