'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/contexts/LanguageContext'

export function PricingHero() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: 'Pricing',
      subtitle: 'Flexible options to suit your learning journey',
    },
    fa: {
      title: 'قیمت‌ها',
      subtitle: 'گزینه‌های انعطاف‌پذیر برای تطبیق با سفر یادگیری شما',
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
