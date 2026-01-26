'use client'

import { motion } from 'framer-motion'
import { Monitor, Users } from 'lucide-react'
import { useLanguage } from '@/lib/contexts/LanguageContext'

export function LessonFormat() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: 'Lesson Format',
      subtitle: 'Flexible options to fit your schedule and preferences',
      formats: [
        {
          icon: Monitor,
          title: 'Online Lessons',
          description: 'Convenient video call sessions from anywhere. Interactive whiteboard and screen sharing for effective learning.',
          features: ['Video calls', 'Interactive materials', 'Screen sharing', 'Recorded sessions available'],
        },
        {
          icon: Users,
          title: 'In-Person Lessons',
          description: 'Traditional face-to-face lessons available in select locations. Perfect for those who prefer in-person interaction.',
          features: ['Face-to-face interaction', 'Physical materials', 'Local meetups', 'Flexible scheduling'],
        },
      ],
    },
    fa: {
      title: 'فرمت درس',
      subtitle: 'گزینه‌های انعطاف‌پذیر برای تطبیق با برنامه و ترجیحات شما',
      formats: [
        {
          icon: Monitor,
          title: 'درس‌های آنلاین',
          description: 'جلسات تماس ویدیویی راحت از هر کجا. تخته سفید تعاملی و اشتراک‌گذاری صفحه برای یادگیری مؤثر.',
          features: ['تماس‌های ویدیویی', 'مواد تعاملی', 'اشتراک‌گذاری صفحه', 'جلسات ضبط شده در دسترس'],
        },
        {
          icon: Users,
          title: 'درس‌های حضوری',
          description: 'درس‌های سنتی رو در رو در مکان‌های منتخب در دسترس است. عالی برای کسانی که تعامل حضوری را ترجیح می‌دهند.',
          features: ['تعامل رو در رو', 'مواد فیزیکی', 'ملاقات‌های محلی', 'برنامه‌ریزی انعطاف‌پذیر'],
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
          <p className="text-lg text-navy-600 dark:text-beige-300">
            {langContent.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {langContent.formats.map((format, index) => {
            const Icon = format.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-beige-50 dark:bg-navy-700 p-8 rounded-xl card-hover"
              >
                <div className="w-16 h-16 bg-gold-100 dark:bg-gold-900/30 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-gold-600 dark:text-gold-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-navy-900 dark:text-beige-50">
                  {format.title}
                </h3>
                <p className="text-navy-600 dark:text-beige-300 mb-6 leading-relaxed">
                  {format.description}
                </p>
                <ul className="space-y-2">
                  {format.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-sm text-navy-700 dark:text-beige-200 flex items-start gap-2"
                    >
                      <span className="text-gold-500 mt-1">•</span>
                      <span>{feature}</span>
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
