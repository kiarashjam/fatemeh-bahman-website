'use client'

import { motion } from 'framer-motion'
import { Mail, MessageCircle } from 'lucide-react'
import { useLanguage } from '@/lib/contexts/LanguageContext'

export function QuickContact() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: 'Quick Contact',
      subtitle: 'Reach out directly via email or WhatsApp',
      email: 'Email',
      whatsapp: 'WhatsApp',
      emailText: 'fatemeh.bahman@gmail.com',
      whatsappText: 'Send a message on WhatsApp',
    },
    fa: {
      title: 'تماس سریع',
      subtitle: 'مستقیماً از طریق ایمیل یا واتساپ تماس بگیرید',
      email: 'ایمیل',
      whatsapp: 'واتساپ',
      emailText: 'fatemeh.bahman@gmail.com',
      whatsappText: 'ارسال پیام در واتساپ',
    },
  }

  const langContent = content[language]

  return (
    <section className="section-padding bg-gradient-to-br from-beige-50 to-white dark:from-navy-900 dark:to-navy-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2 text-navy-900 dark:text-beige-50">
            {langContent.title}
          </h2>
          <p className="text-navy-600 dark:text-beige-300">
            {langContent.subtitle}
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-6 max-w-2xl mx-auto">
          <motion.a
            href="mailto:fatemeh.bahman@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="flex-1 bg-white dark:bg-navy-700 p-8 rounded-xl card-hover border border-navy-100 dark:border-navy-600 text-center"
          >
            <div className="w-16 h-16 bg-gold-100 dark:bg-gold-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-gold-600 dark:text-gold-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-navy-900 dark:text-beige-50">
              {langContent.email}
            </h3>
            <p className="text-navy-600 dark:text-beige-300 text-sm">
              {langContent.emailText}
            </p>
          </motion.a>

          <motion.a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex-1 bg-white dark:bg-navy-700 p-8 rounded-xl card-hover border border-navy-100 dark:border-navy-600 text-center"
          >
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-navy-900 dark:text-beige-50">
              {langContent.whatsapp}
            </h3>
            <p className="text-navy-600 dark:text-beige-300 text-sm">
              {langContent.whatsappText}
            </p>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
