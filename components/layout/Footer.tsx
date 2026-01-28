'use client'

/**
 * Footer – site-wide footer with bio, quick links, contact (email/WhatsApp), and copyright.
 * Uses LanguageContext for en/fa; same link set as header (without Home).
 */
import Link from 'next/link'
import { Mail, MessageCircle, Heart } from 'lucide-react'
import { useLanguage } from '@/lib/contexts/LanguageContext'

const currentYear = new Date().getFullYear()

export function Footer() {
  const { language } = useLanguage()

  /** Footer copy in English and Persian */
  const footerContent = {
    en: {
      bio: 'Fatemeh Bahman is a retired teacher with 30+ years of experience teaching Persian language. Dedicated to helping students learn with clarity, confidence, and cultural understanding.',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      rights: `© ${currentYear} Fatemeh Bahman. All rights reserved.`,
      madeWith: 'Made with',
    },
    fa: {
      bio: 'فاطمه بهمن یک معلم بازنشسته با بیش از ۳۰ سال تجربه در تدریس زبان فارسی است. متعهد به کمک به دانش‌آموزان برای یادگیری با وضوح، اطمینان و درک فرهنگی.',
      quickLinks: 'لینک‌های سریع',
      contact: 'تماس',
      rights: `© ${currentYear} فاطمه بهمن. تمامی حقوق محفوظ است.`,
      madeWith: 'ساخته شده با',
    },
  }

  const content = footerContent[language]

  return (
    <footer className="relative bg-navy-950 dark:bg-navy-950 text-beige-50 section-padding overflow-hidden">
      <div className="absolute inset-0 bg-mesh-dark opacity-60 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 font-persian gradient-text">فاطمه بهمن</h3>
            <p className="text-beige-200 text-sm leading-relaxed">
              {content.bio}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{content.quickLinks}</h4>
            <ul className="space-y-1">
              {[
                { href: '/about', en: 'About', fa: 'درباره' },
                { href: '/lessons', en: 'Lessons', fa: 'درس‌ها' },
                { href: '/pricing', en: 'Pricing', fa: 'قیمت‌ها' },
                { href: '/faq', en: 'FAQ', fa: 'سوالات متداول' },
                { href: '/contact', en: 'Contact', fa: 'تماس' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-3 text-beige-200 hover:text-gold-400 transition-colors text-sm min-h-[44px] flex items-center touch-manipulation -mx-2 px-2 rounded-lg hover:bg-white/5"
                  >
                    {language === 'en' ? item.en : item.fa}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{content.contact}</h4>
            <div className="space-y-1">
              <a
                href="mailto:fatemeh.bahman40@gmail.com"
                className="flex items-center gap-2 py-3 text-beige-200 hover:text-gold-400 transition-colors text-sm min-h-[44px] touch-manipulation -mx-2 px-2 rounded-lg hover:bg-white/5"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span className="break-all">fatemeh.bahman40@gmail.com</span>
              </a>
              <a
                href="https://wa.me/393758212541"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-3 text-beige-200 hover:text-gold-400 transition-colors text-sm min-h-[44px] touch-manipulation -mx-2 px-2 rounded-lg hover:bg-white/5"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>WhatsApp +39 375 821 2541</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-700/80 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-beige-300 text-sm">{content.rights}</p>
          <p className="text-beige-300 text-sm flex items-center gap-1.5">
            {content.madeWith} <Heart className="w-4 h-4 text-gold-400 animate-pulse" />
          </p>
        </div>
      </div>
    </footer>
  )
}
