'use client'

import { motion } from 'framer-motion'
import { Award, Book, GraduationCap, Heart } from 'lucide-react'
import { useLanguage } from '@/lib/contexts/LanguageContext'
import { content } from '@/lib/content'

const iconMap = {
  award: Award,
  book: Book,
  'graduation-cap': GraduationCap,
  heart: Heart,
}

export function Highlights() {
  const { language } = useLanguage()
  const langContent = content[language]

  return (
    <section className="section-padding bg-beige-50/50 dark:bg-navy-900/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {langContent.highlights.map((highlight, index) => {
            const Icon = iconMap[highlight.icon as keyof typeof iconMap] || Award
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass-card p-6 rounded-2xl card-hover"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-100 to-gold-200 dark:from-gold-900/40 dark:to-gold-800/30 flex items-center justify-center mb-4 shadow-inner">
                  <Icon className="w-7 h-7 text-gold-600 dark:text-gold-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-navy-900 dark:text-beige-50">
                  {highlight.title}
                </h3>
                <p className="text-navy-600 dark:text-beige-300 text-sm">
                  {highlight.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
