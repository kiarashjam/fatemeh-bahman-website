'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/contexts/LanguageContext'

export function Timeline() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: 'Teaching Journey',
      items: [
        {
          year: '1990s - 2020s',
          title: '30+ Years in Education',
          description:
            'Dedicated career teaching Persian language and literature in schools, helping thousands of students develop their language skills.',
        },
        {
          year: '2020',
          title: 'Retirement & New Chapter',
          description:
            'Retired from formal teaching but continued passion for education led to private tutoring and online instruction.',
        },
        {
          year: 'Present',
          title: 'Private Instruction',
          description:
            'Focusing on personalized, one-on-one and small group lessons, bringing decades of experience to each student.',
        },
      ],
    },
    fa: {
      title: 'سفر تدریس',
      items: [
        {
          year: 'دهه ۱۳۷۰ - ۱۴۰۰',
          title: 'بیش از ۳۰ سال در آموزش',
          description:
            'حرفه متعهدانه در تدریس زبان و ادبیات فارسی در مدارس، کمک به هزاران دانش‌آموز برای توسعه مهارت‌های زبانی.',
        },
        {
          year: '۱۴۰۰',
          title: 'بازنشستگی و فصل جدید',
          description:
            'بازنشستگی از تدریس رسمی اما ادامه علاقه به آموزش منجر به تدریس خصوصی و آموزش آنلاین شد.',
        },
        {
          year: 'حال',
          title: 'آموزش خصوصی',
          description:
            'تمرکز بر درس‌های شخصی‌سازی شده، یک به یک و گروه‌های کوچک، آوردن دهه‌ها تجربه به هر دانش‌آموز.',
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-navy-900 dark:text-beige-50">
            {langContent.title}
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {langContent.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: language === 'fa' ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative pl-8 pb-12 last:pb-0 border-l-2 border-gold-400"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-gold-400 rounded-full border-4 border-white dark:border-navy-800"></div>
              <div className="bg-beige-50 dark:bg-navy-700 p-6 rounded-lg">
                <div className="text-gold-600 dark:text-gold-400 font-semibold mb-2">
                  {item.year}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-navy-900 dark:text-beige-50">
                  {item.title}
                </h3>
                <p className="text-navy-600 dark:text-beige-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
