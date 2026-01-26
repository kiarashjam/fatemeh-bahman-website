'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/contexts/LanguageContext'
import { content } from '@/lib/content'

export function WhoIsThisFor() {
  const { language } = useLanguage()
  const langContent = content[language]

  return (
    <section className="section-padding bg-gradient-to-br from-beige-50 to-white dark:from-navy-900 dark:to-navy-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-navy-900 dark:text-beige-50">
            {langContent.whoIsThisFor.title}
          </h2>
          <p className="text-lg text-navy-600 dark:text-beige-300 max-w-2xl mx-auto">
            {langContent.whoIsThisFor.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {langContent.whoIsThisFor.categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white dark:bg-navy-700 p-8 rounded-xl card-hover border border-navy-100 dark:border-navy-600"
            >
              <h3 className="text-2xl font-semibold mb-3 text-navy-900 dark:text-beige-50">
                {category.title}
              </h3>
              <p className="text-navy-600 dark:text-beige-300 leading-relaxed">
                {category.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
