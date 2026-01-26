'use client'

import Link from 'next/link'
import { Mail, MessageCircle, Heart } from 'lucide-react'
import { useLanguage } from '@/lib/contexts/LanguageContext'

const currentYear = new Date().getFullYear()

export function Footer() {
  const { language } = useLanguage()

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
    <footer className="bg-navy-900 dark:bg-navy-950 text-beige-50 section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Bio */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-persian">فاطمه بهمن</h3>
            <p className="text-beige-200 text-sm leading-relaxed">
              {content.bio}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{content.quickLinks}</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-beige-200 hover:text-gold-400 transition-colors text-sm"
                >
                  {language === 'en' ? 'About' : 'درباره'}
                </Link>
              </li>
              <li>
                <Link
                  href="/lessons"
                  className="text-beige-200 hover:text-gold-400 transition-colors text-sm"
                >
                  {language === 'en' ? 'Lessons' : 'درس‌ها'}
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-beige-200 hover:text-gold-400 transition-colors text-sm"
                >
                  {language === 'en' ? 'Pricing' : 'قیمت‌ها'}
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-beige-200 hover:text-gold-400 transition-colors text-sm"
                >
                  {language === 'en' ? 'FAQ' : 'سوالات متداول'}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-beige-200 hover:text-gold-400 transition-colors text-sm"
                >
                  {language === 'en' ? 'Contact' : 'تماس'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{content.contact}</h4>
            <div className="space-y-3">
              <a
                href="mailto:fatemeh.bahman@example.com"
                className="flex items-center gap-2 text-beige-200 hover:text-gold-400 transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>fatemeh.bahman@example.com</span>
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-beige-200 hover:text-gold-400 transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-700 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-beige-300 text-sm">{content.rights}</p>
          <p className="text-beige-300 text-sm flex items-center gap-1">
            {content.madeWith} <Heart className="w-4 h-4 text-red-500" />
          </p>
        </div>
      </div>
    </footer>
  )
}
