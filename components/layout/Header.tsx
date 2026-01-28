'use client'

import { useState, useEffect, useCallback } from 'react'
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
  const { language, setLanguage } = useLanguage()
  const { theme, toggleTheme } = useTheme()

  const closeMenu = useCallback(() => setIsOpen(false), [])

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

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (typeof document === 'undefined') return
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.touchAction = 'none'
    } else {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
  }, [isOpen])

  // Close on Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
      return () => window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, closeMenu])

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

          {/* Mobile Menu Button - larger touch target */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 -m-1 rounded-xl hover:bg-navy-100 dark:hover:bg-navy-800 transition-colors touch-manipulation"
            aria-label={isOpen ? (language === 'en' ? 'Close menu' : 'بستن منو') : (language === 'en' ? 'Open menu' : 'باز کردن منو')}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile: full-screen backdrop + slide-in drawer */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop - tap to close */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-40 md:hidden bg-navy-900/50 dark:bg-black/60 backdrop-blur-sm"
                onClick={closeMenu}
              />
              {/* Drawer - slides from end (right in LTR, left in RTL) */}
              <motion.aside
                id="mobile-menu"
                role="dialog"
                aria-modal="true"
                aria-label={language === 'en' ? 'Navigation menu' : 'منوی ناوبری'}
                initial={{ x: language === 'fa' ? '-100%' : '100%' }}
                animate={{ x: 0 }}
                exit={{ x: language === 'fa' ? '-100%' : '100%' }}
                transition={{ type: 'tween', duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
                className={cn(
                  'fixed top-0 bottom-0 w-[min(320px,85vw)] z-50 md:hidden',
                  'bg-white dark:bg-navy-900 shadow-premium dark:shadow-premium-dark',
                  'flex flex-col',
                  language === 'fa' ? 'left-0' : 'right-0'
                )}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between p-4 border-b border-navy-100 dark:border-navy-700">
                  <span className="text-lg font-semibold text-navy-900 dark:text-beige-50">
                    {language === 'en' ? 'Menu' : 'منو'}
                  </span>
                  <button
                    onClick={closeMenu}
                    className="p-3 rounded-xl hover:bg-navy-100 dark:hover:bg-navy-800 transition-colors -m-1"
                    aria-label={language === 'en' ? 'Close menu' : 'بستن منو'}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <nav className="flex-1 overflow-y-auto p-4 flex flex-col gap-1">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.key}
                      initial={{ opacity: 0, x: language === 'fa' ? -12 : 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i, duration: 0.2 }}
                    >
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className={cn(
                          'block w-full py-3.5 px-4 rounded-xl text-base font-medium transition-colors min-h-[44px] flex items-center touch-manipulation',
                          pathname === item.href
                            ? 'bg-gold-100 dark:bg-gold-900/30 text-gold-700 dark:text-gold-400'
                            : 'text-navy-700 dark:text-beige-200 hover:bg-navy-100 dark:hover:bg-navy-800 hover:text-gold-600 dark:hover:text-gold-400'
                        )}
                      >
                        {language === 'en' ? item.en : item.fa}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
                <div className="p-4 border-t border-navy-100 dark:border-navy-700 space-y-3">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={toggleTheme}
                      className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-navy-100 dark:bg-navy-800 hover:bg-navy-200 dark:hover:bg-navy-700 transition-colors min-h-[44px] touch-manipulation"
                      aria-label={language === 'en' ? 'Toggle theme' : 'تغییر تم'}
                    >
                      {theme === 'dark' ? (
                        <Sun className="w-5 h-5 text-gold-400" />
                      ) : (
                        <Moon className="w-5 h-5 text-navy-600" />
                      )}
                      <span className="text-sm font-medium">
                        {theme === 'dark' ? (language === 'en' ? 'Light' : 'روشن') : (language === 'en' ? 'Dark' : 'تاریک')}
                      </span>
                    </button>
                    <button
                      onClick={toggleLanguage}
                      className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-navy-100 dark:bg-navy-800 hover:bg-navy-200 dark:hover:bg-navy-700 transition-colors text-sm font-medium min-h-[44px] touch-manipulation"
                      aria-label={language === 'en' ? 'Change language' : 'تغییر زبان'}
                    >
                      <Languages className="w-4 h-4" />
                      <span>{language === 'en' ? 'FA' : 'EN'}</span>
                    </button>
                  </div>
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="block w-full py-3.5 px-4 bg-gold-500 hover:bg-gold-600 text-white rounded-xl font-semibold text-center transition-colors min-h-[44px] flex items-center justify-center touch-manipulation"
                  >
                    {language === 'en' ? 'Book Lesson' : 'رزرو درس'}
                  </Link>
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
