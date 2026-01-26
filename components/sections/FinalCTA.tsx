'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MessageCircle } from 'lucide-react'
import { useLanguage } from '@/lib/contexts/LanguageContext'

export function FinalCTA() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: 'Ready to Start Your Persian Journey?',
      subtitle: 'Book a trial lesson today and discover the joy of learning Persian',
      ctaPrimary: 'Book a Trial Lesson',
      ctaSecondary: 'Contact via WhatsApp',
    },
    fa: {
      title: 'آماده شروع سفر فارسی خود هستید؟',
      subtitle: 'امروز یک جلسه آزمایشی رزرو کنید و لذت یادگیری فارسی را کشف کنید',
      ctaPrimary: 'رزرو جلسه آزمایشی',
      ctaSecondary: 'تماس از طریق واتساپ',
    },
  }

  const langContent = content[language]

  return (
    <section className="section-padding bg-gradient-to-br from-gold-400 via-gold-500 to-emerald-500 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            {langContent.title}
          </h2>
          <p className="text-xl mb-8 text-white/90">
            {langContent.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-gold-600 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              {langContent.ctaPrimary}
            </Link>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-navy-900 hover:bg-navy-800 text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              {langContent.ctaSecondary}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
