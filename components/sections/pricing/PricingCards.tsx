'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { useLanguage } from '@/lib/contexts/LanguageContext'

export function PricingCards() {
  const { language } = useLanguage()

  const content = {
    en: {
      trial: {
        name: 'Trial Lesson',
        duration: '30 minutes',
        price: '$25',
        description: 'Perfect for first-time students to experience the teaching style',
        features: ['One 30-minute session', 'Level assessment', 'Learning plan discussion', 'Q&A session'],
        cta: 'Book Trial',
      },
      standard: {
        name: 'Standard Lesson',
        duration: '60 minutes',
        price: '$45',
        description: 'Regular one-on-one lessons for consistent progress',
        features: ['One 60-minute session', 'Structured curriculum', 'Homework assignments', 'Progress tracking'],
        cta: 'Book Lesson',
        popular: true,
      },
      bundle5: {
        name: '5-Lesson Bundle',
        duration: '5 × 60 minutes',
        price: '$200',
        originalPrice: '$225',
        description: 'Save with a 5-lesson package',
        features: ['5 × 60-minute sessions', '10% discount', 'Flexible scheduling', 'All standard features'],
        cta: 'Buy Bundle',
      },
      bundle10: {
        name: '10-Lesson Bundle',
        duration: '10 × 60 minutes',
        price: '$380',
        originalPrice: '$450',
        description: 'Best value for committed learners',
        features: ['10 × 60-minute sessions', '15% discount', 'Priority scheduling', 'Bonus materials'],
        cta: 'Buy Bundle',
      },
    },
    fa: {
      trial: {
        name: 'جلسه آزمایشی',
        duration: '۳۰ دقیقه',
        price: '۲۵ دلار',
        description: 'عالی برای دانش‌آموزان تازه‌کار برای تجربه سبک تدریس',
        features: ['یک جلسه ۳۰ دقیقه‌ای', 'ارزیابی سطح', 'بحث برنامه یادگیری', 'جلسه پرسش و پاسخ'],
        cta: 'رزرو آزمایشی',
      },
      standard: {
        name: 'درس استاندارد',
        duration: '۶۰ دقیقه',
        price: '۴۵ دلار',
        description: 'درس‌های منظم یک به یک برای پیشرفت مداوم',
        features: ['یک جلسه ۶۰ دقیقه‌ای', 'برنامه درسی ساختاریافته', 'تکالیف', 'پیگیری پیشرفت'],
        cta: 'رزرو درس',
        popular: true,
      },
      bundle5: {
        name: 'بسته ۵ جلسه‌ای',
        duration: '۵ × ۶۰ دقیقه',
        price: '۲۰۰ دلار',
        originalPrice: '۲۲۵ دلار',
        description: 'با بسته ۵ جلسه‌ای صرفه‌جویی کنید',
        features: ['۵ × جلسه ۶۰ دقیقه‌ای', 'تخفیف ۱۰٪', 'برنامه‌ریزی انعطاف‌پذیر', 'همه ویژگی‌های استاندارد'],
        cta: 'خرید بسته',
      },
      bundle10: {
        name: 'بسته ۱۰ جلسه‌ای',
        duration: '۱۰ × ۶۰ دقیقه',
        price: '۳۸۰ دلار',
        originalPrice: '۴۵۰ دلار',
        description: 'بهترین ارزش برای زبان‌آموزان متعهد',
        features: ['۱۰ × جلسه ۶۰ دقیقه‌ای', 'تخفیف ۱۵٪', 'برنامه‌ریزی اولویت‌دار', 'مواد اضافی'],
        cta: 'خرید بسته',
      },
    },
  }

  const langContent = content[language]
  type PlanType = {
    name: string
    duration: string
    price: string
    originalPrice?: string
    description: string
    features: string[]
    cta: string
    popular?: boolean
  }
  
  const plans: PlanType[] = [
    langContent.trial,
    langContent.standard,
    langContent.bundle5,
    langContent.bundle10,
  ]

  return (
    <section className="section-padding bg-white dark:bg-navy-800">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`relative bg-white dark:bg-navy-700 p-8 rounded-xl border-2 ${
                plan.popular
                  ? 'border-gold-500 shadow-lg scale-105'
                  : 'border-navy-100 dark:border-navy-600'
              } card-hover`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {language === 'en' ? 'Most Popular' : 'محبوب‌ترین'}
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold mb-2 text-navy-900 dark:text-beige-50">
                  {plan.name}
                </h3>
                <p className="text-sm text-navy-600 dark:text-beige-300 mb-4">
                  {plan.duration}
                </p>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-navy-900 dark:text-beige-50">
                    {plan.price}
                  </span>
                  {plan.originalPrice && (
                    <span className="text-lg text-navy-400 dark:text-navy-500 line-through ml-2">
                      {plan.originalPrice}
                    </span>
                  )}
                </div>
                <p className="text-sm text-navy-600 dark:text-beige-300">
                  {plan.description}
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start gap-2 text-sm text-navy-700 dark:text-beige-200"
                  >
                    <Check className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gold-500 hover:bg-gold-600 text-white'
                    : 'bg-navy-900 dark:bg-navy-600 hover:bg-navy-800 dark:hover:bg-navy-500 text-white'
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
