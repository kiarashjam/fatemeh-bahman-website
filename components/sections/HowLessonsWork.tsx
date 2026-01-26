'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/contexts/LanguageContext'
import { content } from '@/lib/content'

export function HowLessonsWork() {
  const { language } = useLanguage()
  const langContent = content[language]

  return (
    <section className="section-padding bg-gradient-to-br from-navy-900 to-navy-800 dark:from-navy-950 dark:to-navy-900 text-beige-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {langContent.howLessonsWork.title}
          </h2>
          <p className="text-lg text-beige-200 max-w-2xl mx-auto">
            {langContent.howLessonsWork.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {langContent.howLessonsWork.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative"
            >
              <div className="bg-navy-800 dark:bg-navy-700 p-8 rounded-xl border border-navy-700 dark:border-navy-600">
                <div className="text-5xl font-bold text-gold-400 mb-4 opacity-50">
                  {step.number}
                </div>
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-beige-200 leading-relaxed">{step.description}</p>
              </div>
              {index < langContent.howLessonsWork.steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gold-400"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
