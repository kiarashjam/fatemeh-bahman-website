'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from '@/lib/contexts/LanguageContext'

export function FAQAccordion() {
  const { language } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const content = {
    en: {
      questions: [
        {
          question: 'Do I need to know Arabic script?',
          answer:
            'No prior knowledge of Arabic script is required. Persian uses a modified Arabic alphabet, and I\'ll teach you everything from the basics, including letter recognition, pronunciation, and writing.',
        },
        {
          question: 'How long until I can read Persian?',
          answer:
            'This varies by individual, but with consistent practice, most students can read simple texts within 2-3 months. Reading fluency develops over time with regular lessons and practice.',
        },
        {
          question: 'Do you teach children?',
          answer:
            'Yes! I have extensive experience teaching children and can adapt lessons to be engaging and age-appropriate. Please contact me to discuss your child\'s specific needs.',
        },
        {
          question: 'What tools do I need for online lessons?',
          answer:
            'You\'ll need a computer or tablet with a camera, microphone, and stable internet connection. I\'ll provide all learning materials digitally, so no additional purchases are needed.',
        },
        {
          question: 'Can you focus on conversation only?',
          answer:
            'Absolutely! I can tailor lessons to focus on conversation skills if that\'s your primary goal. We can adjust the curriculum to emphasize speaking and listening practice.',
        },
        {
          question: 'How often should I take lessons?',
          answer:
            'I recommend 1-2 lessons per week for consistent progress. However, we can adjust the frequency based on your schedule and learning goals.',
        },
        {
          question: 'Do you offer group lessons?',
          answer:
            'Yes, I offer small group lessons (2-4 students) at a discounted rate. Group lessons are great for practice and peer learning.',
        },
        {
          question: 'What if I need to cancel a lesson?',
          answer:
            'I require 24-hour notice for cancellations. With proper notice, we can reschedule. Last-minute cancellations may be subject to a fee.',
        },
        {
          question: 'Can I learn Persian for business purposes?',
          answer:
            'Yes! I can customize lessons to focus on business Persian, including professional vocabulary, formal communication, and industry-specific terms.',
        },
        {
          question: 'How do I know my current level?',
          answer:
            'We\'ll start with an assessment during your trial lesson. This helps me understand your current proficiency and create a personalized learning plan.',
        },
      ],
    },
    fa: {
      questions: [
        {
          question: 'آیا باید خط عربی را بدانم؟',
          answer:
            'نیازی به دانش قبلی خط عربی نیست. فارسی از الفبای عربی اصلاح شده استفاده می‌کند و من همه چیز را از اصول به شما آموزش می‌دهم، از جمله شناسایی حروف، تلفظ و نوشتن.',
        },
        {
          question: 'چقدر طول می‌کشد تا بتوانم فارسی بخوانم؟',
          answer:
            'این بسته به فرد متفاوت است، اما با تمرین مداوم، اکثر دانش‌آموزان می‌توانند متون ساده را در عرض ۲-۳ ماه بخوانند. روانی خواندن با گذشت زمان با درس‌های منظم و تمرین توسعه می‌یابد.',
        },
        {
          question: 'آیا به کودکان آموزش می‌دهید؟',
          answer:
            'بله! من تجربه گسترده‌ای در تدریس به کودکان دارم و می‌توانم درس‌ها را جذاب و مناسب سن تنظیم کنم. لطفاً با من تماس بگیرید تا در مورد نیازهای خاص فرزندتان صحبت کنیم.',
        },
        {
          question: 'برای درس‌های آنلاین به چه ابزارهایی نیاز دارم؟',
          answer:
            'شما به یک کامپیوتر یا تبلت با دوربین، میکروفون و اتصال اینترنت پایدار نیاز دارید. من همه مواد یادگیری را به صورت دیجیتال ارائه می‌دهم، بنابراین نیازی به خرید اضافی نیست.',
        },
        {
          question: 'آیا می‌توانید فقط بر گفتگو تمرکز کنید؟',
          answer:
            'قطعاً! اگر این هدف اصلی شماست، می‌توانم درس‌ها را برای تمرکز بر مهارت‌های گفتگو تنظیم کنم. می‌توانیم برنامه درسی را برای تأکید بر تمرین گفتاری و شنیداری تنظیم کنیم.',
        },
        {
          question: 'چند بار باید درس بگیرم؟',
          answer:
            'من ۱-۲ درس در هفته را برای پیشرفت مداوم توصیه می‌کنم. با این حال، می‌توانیم فرکانس را بر اساس برنامه و اهداف یادگیری شما تنظیم کنیم.',
        },
        {
          question: 'آیا درس‌های گروهی ارائه می‌دهید؟',
          answer:
            'بله، من درس‌های گروهی کوچک (۲-۴ دانش‌آموز) را با نرخ تخفیف‌دار ارائه می‌دهم. درس‌های گروهی برای تمرین و یادگیری همتا عالی هستند.',
        },
        {
          question: 'اگر نیاز به لغو یک درس داشته باشم چه می‌شود؟',
          answer:
            'من به ۲۴ ساعت اطلاع قبلی برای لغو نیاز دارم. با اطلاع مناسب، می‌توانیم دوباره برنامه‌ریزی کنیم. لغو‌های لحظه‌آخر ممکن است مشمول هزینه باشند.',
        },
        {
          question: 'آیا می‌توانم فارسی را برای اهداف تجاری یاد بگیرم؟',
          answer:
            'بله! می‌توانم درس‌ها را برای تمرکز بر فارسی تجاری، از جمله واژگان حرفه‌ای، ارتباطات رسمی و اصطلاحات خاص صنعت تنظیم کنم.',
        },
        {
          question: 'چگونه سطح فعلی خود را بدانم؟',
          answer:
            'ما با یک ارزیابی در جلسه آزمایشی شما شروع می‌کنیم. این به من کمک می‌کند تا سطح فعلی شما را درک کنم و یک برنامه یادگیری شخصی‌سازی شده ایجاد کنم.',
        },
      ],
    },
  }

  const langContent = content[language]

  return (
    <section className="section-padding bg-white dark:bg-navy-800">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {langContent.questions.map((item, index) => {
              const isOpen = openIndex === index
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="bg-beige-50 dark:bg-navy-700 rounded-xl overflow-hidden border border-navy-100 dark:border-navy-600"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        setOpenIndex(isOpen ? null : index)
                      }
                    }}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-beige-100 dark:hover:bg-navy-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-inset rounded-t-xl"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                  >
                    <span className="font-semibold text-navy-900 dark:text-beige-50 pr-4">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-navy-600 dark:text-beige-300 flex-shrink-0 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                        id={`faq-answer-${index}`}
                        role="region"
                        aria-labelledby={`faq-question-${index}`}
                      >
                        <div className="px-6 pb-5 text-navy-600 dark:text-beige-300 leading-relaxed">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
