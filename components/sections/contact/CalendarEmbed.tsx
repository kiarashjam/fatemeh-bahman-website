'use client'

import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'
import { useLanguage } from '@/lib/contexts/LanguageContext'

export function CalendarEmbed() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: 'Book a Lesson',
      subtitle: 'Schedule your trial lesson or regular session',
      placeholder: 'Calendar booking widget will be embedded here',
      note: 'Replace this section with your Calendly, Acuity, or other booking system embed code.',
    },
    fa: {
      title: 'رزرو یک درس',
      subtitle: 'جلسه آزمایشی یا جلسه منظم خود را برنامه‌ریزی کنید',
      placeholder: 'ویجت رزرو تقویم در اینجا تعبیه می‌شود',
      note: 'این بخش را با کد تعبیه Calendly، Acuity یا سیستم رزرو دیگری جایگزین کنید.',
    },
  }

  const langContent = content[language]

  return (
    <section className="section-padding bg-white dark:bg-navy-800">
      <div className="container-custom max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold mb-2 text-navy-900 dark:text-beige-50">
            {langContent.title}
          </h2>
          <p className="text-navy-600 dark:text-beige-300">
            {langContent.subtitle}
          </p>
        </motion.div>

        <div className="bg-beige-50 dark:bg-navy-700 p-12 rounded-xl border-2 border-dashed border-navy-300 dark:border-navy-600 text-center">
          <Calendar className="w-16 h-16 text-navy-400 dark:text-navy-500 mx-auto mb-4" />
          <p className="text-navy-600 dark:text-beige-300 mb-2 font-medium">
            {langContent.placeholder}
          </p>
          <p className="text-sm text-navy-500 dark:text-navy-400 italic">
            {langContent.note}
          </p>
          {/* 
            Replace this section with your booking embed code, for example:
            <div className="calendly-inline-widget" data-url="YOUR_CALENDLY_URL" style={{minWidth: '320px', height: '630px'}}></div>
            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
          */}
        </div>
      </div>
    </section>
  )
}
