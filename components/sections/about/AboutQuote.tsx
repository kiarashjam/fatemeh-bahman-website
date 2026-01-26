'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { useLanguage } from '@/lib/contexts/LanguageContext'

export function AboutQuote() {
  const { language } = useLanguage()

  const content = {
    en: {
      quote:
        'Language is the bridge between cultures. Teaching Persian is not just my profession—it\'s my passion to help others discover the beauty and depth of this rich language.',
      author: 'Fatemeh Bahman',
    },
    fa: {
      quote:
        'زبان پل بین فرهنگ‌هاست. تدریس فارسی فقط حرفه من نیست—این اشتیاق من است که به دیگران کمک کنم زیبایی و عمق این زبان غنی را کشف کنند.',
      author: 'فاطمه بهمن',
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
          className="max-w-3xl mx-auto text-center"
        >
          <Quote className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <blockquote className="text-2xl sm:text-3xl font-medium mb-6 leading-relaxed">
            &ldquo;{langContent.quote}&rdquo;
          </blockquote>
          <p className="text-xl font-semibold">— {langContent.author}</p>
        </motion.div>
      </div>
    </section>
  )
}
