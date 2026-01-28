'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { MessageCircle } from 'lucide-react'
import { useLanguage } from '@/lib/contexts/LanguageContext'
import { content } from '@/lib/content'
import { ASSETS } from '@/lib/constants'

export function Hero() {
  const { language } = useLanguage()
  const langContent = content[language]
  const [portraitError, setPortraitError] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-mesh-light dark:bg-gradient-to-br dark:from-navy-950 dark:via-navy-900 dark:to-navy-950">
      {/* Decorative mesh / orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[5%] w-[400px] h-[400px] bg-gold-400/20 dark:bg-gold-500/10 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-emerald-400/15 dark:bg-emerald-500/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-300/5 dark:bg-gold-400/5 rounded-full blur-[150px]" />
      </div>
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,42,67,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,42,67,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="container-custom section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-[1.1] font-display text-navy-900 dark:text-beige-50"
            >
              <span className="block mb-2">{langContent.hero.headline}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="text-lg sm:text-xl text-navy-600 dark:text-beige-300 mb-10 leading-relaxed max-w-xl"
            >
              {langContent.hero.subheadline}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/contact"
                className="btn-primary bg-gold-500 hover:bg-gold-600 text-white text-center shadow-premium"
              >
                {langContent.hero.ctaPrimary}
              </Link>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary bg-emerald-500 hover:bg-emerald-600 text-white"
              >
                <MessageCircle className="w-5 h-5" />
                {langContent.hero.ctaSecondary}
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center"
          >
            <div className="relative w-full aspect-square max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-br from-gold-400 via-gold-500 to-emerald-500 rounded-[2rem] opacity-80 blur-sm transform rotate-3" />
              <div className="absolute inset-0 bg-gradient-to-br from-gold-400/30 to-emerald-400/30 rounded-[2rem] transform -rotate-2" />
              <div className="relative glass-card rounded-[2rem] p-6 sm:p-10 flex items-center justify-center h-full min-h-0 overflow-hidden">
                <div className="text-center">
                  <div className="w-44 h-44 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold-100 to-beige-200 dark:from-navy-600 dark:to-navy-700 flex items-center justify-center ring-4 ring-gold-400/30 dark:ring-gold-500/20 shadow-premium overflow-hidden">
                    {!portraitError ? (
                      <Image
                        src={ASSETS.portrait}
                        alt={langContent.hero.headline}
                        width={176}
                        height={176}
                        className="w-full h-full object-cover"
                        onError={() => setPortraitError(true)}
                        unoptimized
                      />
                    ) : (
                      <span className="text-5xl font-persian text-navy-700 dark:text-beige-200 font-bold">
                        ف.ب
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-navy-500 dark:text-beige-400 mt-2 font-medium">
                    {portraitError ? '[Add your photo as public/images/portrait.jpg]' : 'Fatemeh Bahman'}
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
