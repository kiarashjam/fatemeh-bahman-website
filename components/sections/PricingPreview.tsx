'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/lib/contexts/LanguageContext'

export function PricingPreview() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: 'Flexible Pricing Options',
      subtitle: 'Choose the plan that works best for you',
      cta: 'View All Pricing',
    },
    fa: {
      title: 'گزینه‌های قیمت‌گذاری انعطاف‌پذیر',
      subtitle: 'برنامه‌ای را انتخاب کنید که برای شما بهتر کار می‌کند',
      cta: 'مشاهده تمام قیمت‌ها',
    },
  }

  const langContent = content[language]

  return (
    <section className="section-padding bg-white dark:bg-navy-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-4 section-title-accent">
            {langContent.title}
          </h2>
          <p className="text-lg text-navy-600 dark:text-beige-300">
            {langContent.subtitle}
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="glass-card bg-gradient-to-br from-gold-50/80 to-emerald-50/80 dark:from-navy-700/80 dark:to-navy-600/80 p-8 rounded-2xl mb-8 card-hover"
          >
            <p className="text-navy-700 dark:text-beige-200 mb-6 text-lg">
              {language === 'en'
                ? 'Starting from trial lessons to comprehensive packages, find the perfect fit for your learning journey.'
                : 'از جلسات آزمایشی تا بسته‌های جامع، مناسب‌ترین گزینه را برای سفر یادگیری خود پیدا کنید.'}
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white rounded-full font-semibold transition-all duration-300 hover:shadow-glow-gold hover:scale-[1.02]"
            >
              {langContent.cta}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
