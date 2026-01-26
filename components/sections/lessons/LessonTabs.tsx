'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, MessageCircle, FileText, Heart } from 'lucide-react'
import { useLanguage } from '@/lib/contexts/LanguageContext'

const tabs = [
  { id: 'reading', icon: BookOpen, en: 'Reading & Writing', fa: 'خواندن و نوشتن' },
  { id: 'conversation', icon: MessageCircle, en: 'Conversation', fa: 'گفتگو' },
  { id: 'grammar', icon: FileText, en: 'Grammar & Structure', fa: 'دستور زبان و ساختار' },
  { id: 'culture', icon: Heart, en: 'Culture & Poetry', fa: 'فرهنگ و شعر' },
]

export function LessonTabs() {
  const { language } = useLanguage()
  const [activeTab, setActiveTab] = useState('reading')

  const content = {
    en: {
      title: 'What You\'ll Learn',
      reading: {
        title: 'Reading & Writing',
        description: 'Master the Persian alphabet, phonetics, and spelling. Learn to read and write with confidence.',
        topics: [
          'Persian alphabet (32 letters)',
          'Phonetics and pronunciation',
          'Reading comprehension',
          'Writing practice and composition',
          'Spelling and grammar basics',
        ],
      },
      conversation: {
        title: 'Conversation',
        description: 'Develop practical speaking skills for daily life, travel, and family interactions.',
        topics: [
          'Daily life conversations',
          'Travel and tourism phrases',
          'Family and relationships',
          'Shopping and dining',
          'Professional communication',
        ],
      },
      grammar: {
        title: 'Grammar & Structure',
        description: 'Understand Persian sentence structure, verb conjugations, and grammatical rules.',
        topics: [
          'Verb tenses and conjugations',
          'Sentence structure',
          'Noun and adjective agreements',
          'Prepositions and conjunctions',
          'Complex sentence formation',
        ],
      },
      culture: {
        title: 'Culture & Poetry',
        description: 'Explore Persian culture, literature, and poetry to deepen your understanding.',
        topics: [
          'Persian poetry appreciation',
          'Cultural traditions and customs',
          'Historical context',
          'Literary works',
          'Idiomatic expressions',
        ],
      },
    },
    fa: {
      title: 'آنچه یاد خواهید گرفت',
      reading: {
        title: 'خواندن و نوشتن',
        description: 'تسلط بر الفبای فارسی، آواشناسی و املاء. با اطمینان بخوانید و بنویسید.',
        topics: [
          'الفبای فارسی (۳۲ حرف)',
          'آواشناسی و تلفظ',
          'درک مطلب',
          'تمرین نوشتن و انشاء',
          'املاء و اصول دستور زبان',
        ],
      },
      conversation: {
        title: 'گفتگو',
        description: 'مهارت‌های گفتاری عملی را برای زندگی روزمره، سفر و تعاملات خانوادگی توسعه دهید.',
        topics: [
          'گفتگوهای زندگی روزمره',
          'عبارات سفر و گردشگری',
          'خانواده و روابط',
          'خرید و رستوران',
          'ارتباطات حرفه‌ای',
        ],
      },
      grammar: {
        title: 'دستور زبان و ساختار',
        description: 'درک ساختار جمله فارسی، صرف افعال و قواعد دستور زبان.',
        topics: [
          'زمان‌های فعل و صرف',
          'ساختار جمله',
          'توافق اسم و صفت',
          'حروف اضافه و ربط',
          'تشکیل جملات پیچیده',
        ],
      },
      culture: {
        title: 'فرهنگ و شعر',
        description: 'فرهنگ، ادبیات و شعر فارسی را کاوش کنید تا درک خود را عمیق‌تر کنید.',
        topics: [
          'درک شعر فارسی',
          'آداب و رسوم فرهنگی',
          'زمینه تاریخی',
          'آثار ادبی',
          'عبارات اصطلاحی',
        ],
      },
    },
  }

  const langContent = content[language]
  const activeContent = langContent[activeTab as keyof typeof langContent] as {
    title: string
    description: string
    topics: string[]
  }

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

        <div className="max-w-5xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                    isActive
                      ? 'bg-gold-500 text-white'
                      : 'bg-beige-100 dark:bg-navy-700 text-navy-700 dark:text-beige-200 hover:bg-beige-200 dark:hover:bg-navy-600'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{language === 'en' ? tab.en : tab.fa}</span>
                </button>
              )
            })}
          </div>

          {/* Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-beige-50 dark:bg-navy-700 p-8 rounded-xl"
          >
            <h3 className="text-2xl font-semibold mb-4 text-navy-900 dark:text-beige-50">
              {activeContent.title}
            </h3>
            <p className="text-navy-600 dark:text-beige-300 mb-6 leading-relaxed">
              {activeContent.description}
            </p>
            <ul className="space-y-3">
              {activeContent.topics.map((topic, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-navy-700 dark:text-beige-200"
                >
                  <span className="text-gold-500 mt-1">•</span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
