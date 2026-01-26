'use client'

import { motion } from 'framer-motion'
import { Clock, BookOpen, Target } from 'lucide-react'
import { useLanguage } from '@/lib/contexts/LanguageContext'

export function SamplePlans() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: 'Sample Lesson Plans',
      subtitle: 'Examples of structured learning paths',
      plans: [
        {
          icon: BookOpen,
          title: 'Beginner Reading Plan',
          duration: '8 weeks',
          description: 'A structured path to reading Persian script confidently',
          topics: ['Alphabet mastery', 'Basic vocabulary', 'Simple texts', 'Reading practice'],
        },
        {
          icon: Target,
          title: 'Conversation Focus',
          duration: '12 weeks',
          description: 'Intensive conversation practice for practical communication',
          topics: ['Daily conversations', 'Pronunciation', 'Listening skills', 'Speaking confidence'],
        },
        {
          icon: Clock,
          title: 'Grammar Intensive',
          duration: '10 weeks',
          description: 'Deep dive into Persian grammar and sentence structure',
          topics: ['Verb conjugations', 'Tense mastery', 'Complex sentences', 'Writing practice'],
        },
      ],
    },
    fa: {
      title: 'نمونه برنامه‌های درسی',
      subtitle: 'نمونه‌هایی از مسیرهای یادگیری ساختاریافته',
      plans: [
        {
          icon: BookOpen,
          title: 'برنامه خواندن مبتدی',
          duration: '۸ هفته',
          description: 'مسیری ساختاریافته برای خواندن خط فارسی با اطمینان',
          topics: ['تسلط بر الفبا', 'واژگان پایه', 'متون ساده', 'تمرین خواندن'],
        },
        {
          icon: Target,
          title: 'تمرکز بر گفتگو',
          duration: '۱۲ هفته',
          description: 'تمرین گفتگوی فشرده برای ارتباط عملی',
          topics: ['گفتگوهای روزمره', 'تلفظ', 'مهارت‌های شنیداری', 'اعتماد به نفس گفتاری'],
        },
        {
          icon: Clock,
          title: 'دستور زبان فشرده',
          duration: '۱۰ هفته',
          description: 'غور عمیق در دستور زبان و ساختار جمله فارسی',
          topics: ['صرف افعال', 'تسلط بر زمان‌ها', 'جملات پیچیده', 'تمرین نوشتن'],
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
          {langContent.plans.map((plan, index) => {
            const Icon = plan.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white dark:bg-navy-700 p-8 rounded-xl card-hover border border-navy-100 dark:border-navy-600"
              >
                <div className="w-12 h-12 bg-gold-100 dark:bg-gold-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-gold-600 dark:text-gold-400" />
                </div>
                <div className="text-sm text-gold-600 dark:text-gold-400 font-semibold mb-2">
                  {plan.duration}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-navy-900 dark:text-beige-50">
                  {plan.title}
                </h3>
                <p className="text-navy-600 dark:text-beige-300 mb-6 text-sm leading-relaxed">
                  {plan.description}
                </p>
                <ul className="space-y-2">
                  {plan.topics.map((topic, topicIndex) => (
                    <li
                      key={topicIndex}
                      className="text-sm text-navy-700 dark:text-beige-200 flex items-start gap-2"
                    >
                      <span className="text-gold-500 mt-1">•</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
