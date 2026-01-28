'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Languages, Moon, Sun } from 'lucide-react'
import { useLanguage } from '@/lib/contexts/LanguageContext'
import { useTheme } from '@/lib/contexts/ThemeContext'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { key: 'home', href: '/', en: 'Home', fa: 'خانه' },
  { key: 'about', href: '/about', en: 'About', fa: 'درباره' },
  { key: 'lessons', href: '/lessons', en: 'Lessons', fa: 'درس‌ها' },
  { key: 'pricing', href: '/pricing', en: 'Pricing', fa: 'قیمت‌ها' },
  { key: 'faq', href: '/faq', en: 'FAQ', fa: 'سوالات متداول' },
  { key: 'contact', href: '/contact', en: 'Contact', fa: 'تماس' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { language, setLanguage, t } = useLanguage()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fa' : 'en')
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/80 dark:bg-navy-900/80 backdrop-blur-xl border-b border-navy-100/50 dark:border-navy-700/50 shadow-glass'
          : 'bg-transparent'
      )}
    >
      <nav className="container-custom section-padding py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold gradient-text font-persian tracking-tight"
          >
            فاطمه بهمن
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors duration-200 relative py-1 after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-gold-500 after:to-emerald-500 after:transition-all after:duration-300 hover:after:w-full',
                  pathname === item.href
                    ? 'text-gold-500 dark:text-gold-400 after:w-full'
                    : 'text-navy-700 dark:text-beige-200'
                )}
              >
                {language === 'en' ? item.en : item.fa}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl hover:bg-navy-100 dark:hover:bg-navy-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-gold-400" />
              ) : (
                <Moon className="w-5 h-5 text-navy-600" />
              )}
            </button>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-navy-100 dark:bg-navy-800 hover:bg-navy-200 dark:hover:bg-navy-700 transition-colors text-sm font-medium border border-transparent hover:border-navy-200 dark:hover:border-navy-600"
              aria-label={language === 'en' ? 'Switch to Persian' : 'تغییر به انگلیسی'}
            >
              <Languages className="w-4 h-4" />
              <span>{language === 'en' ? 'FA' : 'EN'}</span>
            </button>
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-gold-500 hover:bg-gold-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-glow-gold"
            >
              {language === 'en' ? 'Book Lesson' : 'رزرو درس'}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="mt-4 pb-4 border-t border-navy-200 dark:border-navy-700 pt-4">
                <div className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.key}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'text-base font-medium transition-colors hover:text-gold-500',
                        pathname === item.href
                          ? 'text-gold-500'
                          : 'text-navy-700 dark:text-beige-200'
                      )}
                    >
                      {language === 'en' ? item.en : item.fa}
                    </Link>
                  ))}
                  <div className="flex items-center gap-4 pt-4 border-t border-navy-200 dark:border-navy-700">
                    <button
                      onClick={toggleTheme}
                      className="p-2 rounded-lg hover:bg-navy-100 dark:hover:bg-navy-800 transition-colors"
                      aria-label={language === 'en' ? 'Toggle theme' : 'تغییر تم'}
                    >
                      {theme === 'dark' ? (
                        <Sun className="w-5 h-5" />
                      ) : (
                        <Moon className="w-5 h-5" />
                      )}
                    </button>
                    <button
                      onClick={toggleLanguage}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-navy-100 dark:bg-navy-800 hover:bg-navy-200 dark:hover:bg-navy-700 text-sm font-medium transition-colors"
                      aria-label={language === 'en' ? 'Change language' : 'تغییر زبان'}
                    >
                      <Languages className="w-4 h-4" />
                      <span>{language === 'en' ? 'FA' : 'EN'}</span>
                    </button>
                    <Link
                      href="/contact"
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-2 bg-gold-500 hover:bg-gold-600 text-white rounded-lg font-medium transition-colors text-sm"
                    >
                      {language === 'en' ? 'Book Lesson' : 'رزرو درس'}
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
