'use client'

import { motion } from 'framer-motion'
import { Heart, BookOpen, Users } from 'lucide-react'
import { useLanguage } from '@/lib/contexts/LanguageContext'

export function Philosophy() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: 'Teaching Philosophy',
      subtitle: 'A patient, structured approach to language learning',
      description:
        'I believe that learning a language is not just about memorizing words and grammar rules. It\'s about connecting with a culture, understanding its nuances, and building confidence to communicate authentically. My approach combines structured learning with cultural context, ensuring students not only speak Persian but also appreciate its rich heritage.',
      principles: [
        {
          icon: Heart,
          title: 'Patience & Support',
          description: 'Every student learns at their own pace. I provide a supportive, encouraging environment.',
        },
        {
          icon: BookOpen,
          title: 'Structured Learning',
          description: 'Clear curriculum and organized lessons ensure steady progress and measurable results.',
        },
        {
          icon: Users,
          title: 'Cultural Connection',
          description: 'Language comes alive through culture, poetry, and real-world context.',
        },
      ],
    },
    fa: {
      title: 'فلسفه تدریس',
      subtitle: 'رویکردی صبورانه و ساختاریافته برای یادگیری زبان',
      description:
        'من معتقدم که یادگیری یک زبان فقط حفظ کلمات و قواعد دستور زبان نیست. این در مورد ارتباط با یک فرهنگ، درک ظرافت‌های آن و ایجاد اعتماد به نفس برای برقراری ارتباط اصیل است. رویکرد من یادگیری ساختاریافته را با زمینه فرهنگی ترکیب می‌کند و اطمینان می‌دهد که دانش‌آموزان نه تنها فارسی صحبت می‌کنند بلکه میراث غنی آن را نیز درک می‌کنند.',
      principles: [
        {
          icon: Heart,
          title: 'صبوری و حمایت',
          description: 'هر دانش‌آموز با سرعت خود یاد می‌گیرد. من یک محیط حمایتی و تشویق‌کننده فراهم می‌کنم.',
        },
        {
          icon: BookOpen,
          title: 'یادگیری ساختاریافته',
          description: 'برنامه درسی واضح و درس‌های منظم پیشرفت مداوم و نتایج قابل اندازه‌گیری را تضمین می‌کند.',
        },
        {
          icon: Users,
          title: 'ارتباط فرهنگی',
          description: 'زبان از طریق فرهنگ، شعر و زمینه دنیای واقعی زنده می‌شود.',
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
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-navy-900 dark:text-beige-50">
              {langContent.title}
            </h2>
            <p className="text-lg text-navy-600 dark:text-beige-300 mb-8">
              {langContent.subtitle}
            </p>
            <p className="text-navy-700 dark:text-beige-200 leading-relaxed text-lg">
              {langContent.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {langContent.principles.map((principle, index) => {
              const Icon = principle.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white dark:bg-navy-700 p-6 rounded-xl card-hover"
                >
                  <div className="w-12 h-12 bg-gold-100 dark:bg-gold-900/30 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-gold-600 dark:text-gold-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-navy-900 dark:text-beige-50">
                    {principle.title}
                  </h3>
                  <p className="text-navy-600 dark:text-beige-300 text-sm">
                    {principle.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
