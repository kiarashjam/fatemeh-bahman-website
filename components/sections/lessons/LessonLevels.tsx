'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/contexts/LanguageContext'

export function LessonLevels() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: 'Levels',
      subtitle: 'Lessons tailored to your current proficiency',
      levels: [
        {
          name: 'Beginner',
          description: 'Perfect for those starting from scratch. Learn the alphabet, basic vocabulary, and simple sentences.',
          skills: ['Alphabet recognition', 'Basic vocabulary', 'Simple greetings', 'Numbers and dates'],
        },
        {
          name: 'Intermediate',
          description: 'Build on your foundation with more complex grammar, expanded vocabulary, and conversational skills.',
          skills: ['Complex sentences', 'Past and future tenses', 'Conversational fluency', 'Reading comprehension'],
        },
        {
          name: 'Advanced',
          description: 'Refine your skills with advanced grammar, literature, and nuanced cultural understanding.',
          skills: ['Literary texts', 'Advanced grammar', 'Idiomatic expressions', 'Cultural nuances'],
        },
      ],
    },
    fa: {
      title: 'سطوح',
      subtitle: 'درس‌های متناسب با سطح فعلی شما',
      levels: [
        {
          name: 'مبتدی',
          description: 'عالی برای کسانی که از صفر شروع می‌کنند. الفبا، واژگان پایه و جملات ساده را یاد بگیرید.',
          skills: ['شناسایی الفبا', 'واژگان پایه', 'احوالپرسی ساده', 'اعداد و تاریخ‌ها'],
        },
        {
          name: 'متوسط',
          description: 'با دستور زبان پیچیده‌تر، واژگان گسترده‌تر و مهارت‌های گفتاری بر پایه خود بسازید.',
          skills: ['جملات پیچیده', 'زمان‌های گذشته و آینده', 'روانی گفتاری', 'درک مطلب'],
        },
        {
          name: 'پیشرفته',
          description: 'مهارت‌های خود را با دستور زبان پیشرفته، ادبیات و درک فرهنگی ظریف بهبود دهید.',
          skills: ['متون ادبی', 'دستور زبان پیشرفته', 'عبارات اصطلاحی', 'ظرافت‌های فرهنگی'],
        },
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-navy-900 dark:text-beige-50">
            {langContent.title}
          </h2>
          <p className="text-lg text-navy-600 dark:text-beige-300">
            {langContent.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {langContent.levels.map((level, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white dark:bg-navy-700 p-8 rounded-xl card-hover border border-navy-100 dark:border-navy-600"
            >
              <h3 className="text-2xl font-semibold mb-3 text-navy-900 dark:text-beige-50">
                {level.name}
              </h3>
              <p className="text-navy-600 dark:text-beige-300 mb-6 leading-relaxed">
                {level.description}
              </p>
              <ul className="space-y-2">
                {level.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-sm text-navy-700 dark:text-beige-200 flex items-start gap-2"
                  >
                    <span className="text-gold-500 mt-1">✓</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
