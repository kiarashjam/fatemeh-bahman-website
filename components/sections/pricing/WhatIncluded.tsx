'use client'

import { motion } from 'framer-motion'
import { FileText, Video, Book, MessageCircle } from 'lucide-react'
import { useLanguage } from '@/lib/contexts/LanguageContext'

export function WhatIncluded() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: 'What\'s Included',
      items: [
        {
          icon: FileText,
          title: 'Learning Materials',
          description: 'All course materials, worksheets, and resources provided',
        },
        {
          icon: Video,
          title: 'Recorded Sessions',
          description: 'Access to recorded lesson sessions for review',
        },
        {
          icon: Book,
          title: 'Homework & Practice',
          description: 'Structured assignments to reinforce learning',
        },
        {
          icon: MessageCircle,
          title: 'Ongoing Support',
          description: 'Email support between lessons for questions',
        },
      ],
    },
    fa: {
      title: 'چه چیزی شامل می‌شود',
      items: [
        {
          icon: FileText,
          title: 'مواد یادگیری',
          description: 'همه مواد درسی، برگه‌های کار و منابع ارائه شده',
        },
        {
          icon: Video,
          title: 'جلسات ضبط شده',
          description: 'دسترسی به جلسات درس ضبط شده برای مرور',
        },
        {
          icon: Book,
          title: 'تکلیف و تمرین',
          description: 'تکالیف ساختاریافته برای تقویت یادگیری',
        },
        {
          icon: MessageCircle,
          title: 'پشتیبانی مداوم',
          description: 'پشتیبانی ایمیل بین درس‌ها برای سوالات',
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
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {langContent.items.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white dark:bg-navy-700 p-6 rounded-xl text-center card-hover"
              >
                <div className="w-16 h-16 bg-gold-100 dark:bg-gold-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-gold-600 dark:text-gold-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-navy-900 dark:text-beige-50">
                  {item.title}
                </h3>
                <p className="text-sm text-navy-600 dark:text-beige-300">
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
