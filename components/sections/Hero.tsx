'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MessageCircle } from 'lucide-react'
import { useLanguage } from '@/lib/contexts/LanguageContext'
import { content } from '@/lib/content'

export function Hero() {
  const { language } = useLanguage()
  const langContent = content[language]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-beige-50 via-white to-beige-100 dark:from-navy-900 dark:via-navy-800 dark:to-navy-900">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="block mb-2">{langContent.hero.headline}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl text-navy-600 dark:text-beige-300 mb-8 leading-relaxed"
            >
              {langContent.hero.subheadline}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/contact"
                className="px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 text-center"
              >
                {langContent.hero.ctaPrimary}
              </Link>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                {langContent.hero.ctaSecondary}
              </a>
            </motion.div>
          </motion.div>

          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-400 to-emerald-400 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-navy-200 dark:bg-navy-700 rounded-3xl p-8 flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto mb-4 bg-navy-300 dark:bg-navy-600 rounded-full flex items-center justify-center">
                    <span className="text-6xl font-persian text-navy-600 dark:text-beige-300">
                      ف.ب
                    </span>
                  </div>
                  <p className="text-sm text-navy-600 dark:text-beige-300 mt-4">
                    {/* Replace with actual portrait image */}
                    [Professional Portrait Placeholder]
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
