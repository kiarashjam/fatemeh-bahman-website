'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, HelpCircle } from 'lucide-react'
import { useLanguage } from '@/lib/contexts/LanguageContext'

export function FAQPreview() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: 'Frequently Asked Questions',
      subtitle: 'Get answers to common questions about learning Persian',
      cta: 'View All FAQs',
      questions: [
        'Do I need to know Arabic script?',
        'How long until I can read?',
        'Do you teach children?',
      ],
    },
    fa: {
      title: 'سوالات متداول',
      subtitle: 'پاسخ به سوالات رایج درباره یادگیری فارسی',
      cta: 'مشاهده تمام سوالات',
      questions: [
        'آیا باید خط عربی را بدانم؟',
        'چقدر طول می‌کشد تا بتوانم بخوانم؟',
        'آیا به کودکان آموزش می‌دهید؟',
      ],
    },
  }

  const langContent = content[language]

  return (
    <section className="section-padding bg-gradient-to-br from-beige-50 to-white dark:from-navy-900 dark:to-navy-800">
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

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4 mb-8">
            {langContent.questions.map((question, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex items-start gap-4 glass-card p-6 rounded-xl card-hover"
              >
                <HelpCircle className="w-6 h-6 text-gold-500 flex-shrink-0 mt-1" />
                <p className="text-navy-700 dark:text-beige-200 font-medium">
                  {question}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center"
          >
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 px-8 py-4 bg-navy-900 dark:bg-navy-700 hover:bg-navy-800 dark:hover:bg-navy-600 text-white rounded-full font-semibold transition-all duration-300 hover:shadow-premium hover:scale-[1.02]"
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
