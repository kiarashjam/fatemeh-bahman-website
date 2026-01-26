'use client'

import { motion } from 'framer-motion'
import { Award, GraduationCap, Book } from 'lucide-react'
import { useLanguage } from '@/lib/contexts/LanguageContext'

export function Certifications() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: 'Experience & Qualifications',
      items: [
        {
          icon: Award,
          title: '30+ Years Teaching',
          description: 'Extensive experience in Persian language and literature instruction',
        },
        {
          icon: GraduationCap,
          title: 'Education Background',
          description: 'Formal education in Persian literature and language pedagogy',
        },
        {
          icon: Book,
          title: 'Continuous Learning',
          description: 'Staying updated with modern teaching methods and language resources',
        },
      ],
    },
    fa: {
      title: 'تجربه و صلاحیت‌ها',
      items: [
        {
          icon: Award,
          title: 'بیش از ۳۰ سال تدریس',
          description: 'تجربه گسترده در آموزش زبان و ادبیات فارسی',
        },
        {
          icon: GraduationCap,
          title: 'پس‌زمینه تحصیلی',
          description: 'تحصیلات رسمی در ادبیات فارسی و روش‌شناسی زبان',
        },
        {
          icon: Book,
          title: 'یادگیری مداوم',
          description: 'به‌روز ماندن با روش‌های تدریس مدرن و منابع زبانی',
        },
      ],
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-navy-900 dark:text-beige-50">
            {langContent.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {langContent.items.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gold-100 dark:bg-gold-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-10 h-10 text-gold-600 dark:text-gold-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-navy-900 dark:text-beige-50">
                  {item.title}
                </h3>
                <p className="text-navy-600 dark:text-beige-300">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
