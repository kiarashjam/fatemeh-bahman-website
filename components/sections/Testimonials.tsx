'use client'

/**
 * Testimonials (Reviews & Comments) – carousel of student reviews from lib/content.
 * Shows one review at a time with prev/next and dot indicators; keyboard (ArrowLeft/Right) supported.
 * Review: Add more reviews in content.en.testimonials and content.fa.testimonials to keep both languages in sync.
 */
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { useLanguage } from '@/lib/contexts/LanguageContext'
import { content } from '@/lib/content'

export function Testimonials() {
  const { language } = useLanguage()
  const langContent = content[language]
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % langContent.testimonials.length)
  }

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + langContent.testimonials.length) % langContent.testimonials.length
    )
  }

  return (
    <section className="section-padding bg-white dark:bg-navy-800" aria-label={language === 'en' ? 'Reviews and comments from students' : 'نظرات و کامنت‌های دانش‌آموزان'}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* Section title: “Reviews & Comments” style; subtitle explains these are student voices */}
          <h2 className="section-title mb-4 section-title-accent">
            {language === 'en' ? 'Reviews & Comments' : 'نظرات و کامنت‌ها'}
          </h2>
          <p className="text-lg text-navy-600 dark:text-beige-300">
            {language === 'en'
              ? 'What students say — reviews and comments from those who have transformed their Persian'
              : 'نظرات و کامنت‌های دانش‌آموزانی که مهارت‌های زبان فارسی خود را متحول کرده‌اند'}
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Single visible review; AnimatePresence for enter/exit when index changes */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="glass-card p-8 sm:p-12 rounded-2xl"
            >
              {/* Star rating (1–5); data from content.testimonials[].rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(langContent.testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <p className="text-lg text-navy-700 dark:text-beige-200 mb-6 leading-relaxed italic">
                &ldquo;{langContent.testimonials[currentIndex].text}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-navy-900 dark:text-beige-50">
                  {langContent.testimonials[currentIndex].name}
                </p>
                <p className="text-sm text-navy-600 dark:text-beige-300">
                  {langContent.testimonials[currentIndex].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Prev/Next: positioned outside card; Review: in RTL consider swapping arrow direction if needed */}
          <button
            onClick={prev}
            onKeyDown={(e) => {
              if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault()
                prev()
              }
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 p-2 bg-white dark:bg-navy-700 rounded-full shadow-lg hover:bg-gold-50 dark:hover:bg-navy-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-500"
            aria-label={language === 'en' ? 'Previous testimonial' : 'نظریه قبلی'}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            onKeyDown={(e) => {
              if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault()
                next()
              }
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 p-2 bg-white dark:bg-navy-700 rounded-full shadow-lg hover:bg-gold-50 dark:hover:bg-navy-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-500"
            aria-label={language === 'en' ? 'Next testimonial' : 'نظریه بعدی'}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dot indicators: current review gets wider and gold */}
          <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label={language === 'en' ? 'Review slides' : 'اسلایدهای نظرات'}>
            {langContent.testimonials.map((_, index) => (
              <button
                key={index}
                role="tab"
                aria-selected={index === currentIndex}
                aria-label={`${language === 'en' ? 'Review' : 'نظر'} ${index + 1}`}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-gold-500 w-8'
                    : 'bg-navy-300 dark:bg-navy-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
