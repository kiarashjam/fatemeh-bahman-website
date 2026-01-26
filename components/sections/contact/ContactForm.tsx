'use client'

import { useState, useMemo, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { CheckCircle, Loader2 } from 'lucide-react'
import { useLanguage } from '@/lib/contexts/LanguageContext'

// Schema will be created dynamically based on language
const createContactSchema = (language: 'en' | 'fa') => {
  const messages = {
    en: {
      nameMin: 'Name must be at least 2 characters',
      emailInvalid: 'Invalid email address',
      goalMin: 'Please describe your learning goal (at least 10 characters)',
      availabilityMin: 'Please provide your availability (at least 5 characters)',
      phoneInvalid: 'Invalid phone number format',
    },
    fa: {
      nameMin: 'نام باید حداقل ۲ کاراکتر باشد',
      emailInvalid: 'آدرس ایمیل نامعتبر است',
      goalMin: 'لطفاً هدف یادگیری خود را شرح دهید (حداقل ۱۰ کاراکتر)',
      availabilityMin: 'لطفاً دسترسی خود را ارائه دهید (حداقل ۵ کاراکتر)',
      phoneInvalid: 'فرمت شماره تلفن نامعتبر است',
    },
  }

  const msg = messages[language]

  return z.object({
    name: z.string().min(2, msg.nameMin),
    email: z.string().email(msg.emailInvalid),
    phone: z
      .string()
      .optional()
      .refine(
        (val) => !val || /^[\d\s\-\+\(\)]+$/.test(val),
        msg.phoneInvalid
      ),
    preferredLanguage: z.enum(['en', 'fa']),
    level: z.enum(['beginner', 'intermediate', 'advanced', 'not-sure']),
    goal: z.string().min(10, msg.goalMin),
    availability: z.string().min(5, msg.availabilityMin),
    message: z.string().optional(),
  })
}


type ContactFormData = z.infer<ReturnType<typeof createContactSchema>>

export function ContactForm() {
  const { language } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Memoize schema to prevent recreation on every render
  const schema = useMemo(() => createContactSchema(language), [language])

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      preferredLanguage: language,
      level: 'not-sure',
    },
  })

  // Reset form when language changes
  useEffect(() => {
    reset({
      preferredLanguage: language,
      level: 'not-sure',
    })
  }, [language, reset])

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setError(null)
    try {
      // Simulate API call - replace with actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500))
      // In production, replace with:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // })
      // if (!response.ok) throw new Error('Failed to send message')
      
      setIsSuccess(true)
      reset()
      setTimeout(() => setIsSuccess(false), 5000)
    } catch (err) {
      setError(
        language === 'en'
          ? 'Failed to send message. Please try again or contact directly.'
          : 'ارسال پیام ناموفق بود. لطفاً دوباره تلاش کنید یا مستقیماً تماس بگیرید.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const content = {
    en: {
      title: 'Send a Message',
      subtitle: 'Fill out the form below and I\'ll get back to you soon',
      fields: {
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone / WhatsApp (Optional)',
        preferredLanguage: 'Preferred Language',
        level: 'Current Level',
        goal: 'Learning Goal',
        availability: 'Availability',
        message: 'Additional Message (Optional)',
      },
      options: {
        language: { en: 'English', fa: 'Persian (فارسی)' },
        level: {
          beginner: 'Beginner',
          intermediate: 'Intermediate',
          advanced: 'Advanced',
          'not-sure': 'Not Sure',
        },
      },
      submit: 'Send Message',
      submitting: 'Sending...',
      success: 'Message sent successfully! I\'ll get back to you soon.',
    },
    fa: {
      title: 'ارسال پیام',
      subtitle: 'فرم زیر را پر کنید و به زودی با شما تماس می‌گیرم',
      fields: {
        name: 'نام کامل',
        email: 'آدرس ایمیل',
        phone: 'تلفن / واتساپ (اختیاری)',
        preferredLanguage: 'زبان ترجیحی',
        level: 'سطح فعلی',
        goal: 'هدف یادگیری',
        availability: 'دسترسی',
        message: 'پیام اضافی (اختیاری)',
      },
      options: {
        language: { en: 'انگلیسی', fa: 'فارسی' },
        level: {
          beginner: 'مبتدی',
          intermediate: 'متوسط',
          advanced: 'پیشرفته',
          'not-sure': 'مطمئن نیستم',
        },
      },
      submit: 'ارسال پیام',
      submitting: 'در حال ارسال...',
      success: 'پیام با موفقیت ارسال شد! به زودی با شما تماس می‌گیرم.',
    },
  }

  const langContent = content[language]

  if (isSuccess) {
    return (
      <section className="section-padding bg-white dark:bg-navy-800">
        <div className="container-custom max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-emerald-50 dark:bg-emerald-900/20 border-2 border-emerald-500 rounded-xl p-8 text-center"
          >
            <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
            <p className="text-lg font-semibold text-emerald-700 dark:text-emerald-400">
              {langContent.success}
            </p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="section-padding bg-white dark:bg-navy-800">
      <div className="container-custom max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2 text-navy-900 dark:text-beige-50">
              {langContent.title}
            </h2>
            <p className="text-navy-600 dark:text-beige-300">
              {langContent.subtitle}
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2 text-navy-700 dark:text-beige-200"
              >
                {langContent.fields.name} *
              </label>
              <input
                id="name"
                {...register('name')}
                type="text"
                autoComplete="name"
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className="w-full px-4 py-3 rounded-lg border border-navy-200 dark:border-navy-600 bg-white dark:bg-navy-700 text-navy-900 dark:text-beige-50 focus:outline-none focus:ring-2 focus:ring-gold-500 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-sm text-red-500" role="alert">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2 text-navy-700 dark:text-beige-200"
              >
                {langContent.fields.email} *
              </label>
              <input
                id="email"
                {...register('email')}
                type="email"
                autoComplete="email"
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className="w-full px-4 py-3 rounded-lg border border-navy-200 dark:border-navy-600 bg-white dark:bg-navy-700 text-navy-900 dark:text-beige-50 focus:outline-none focus:ring-2 focus:ring-gold-500 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-500" role="alert">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium mb-2 text-navy-700 dark:text-beige-200"
              >
                {langContent.fields.phone}
              </label>
              <input
                id="phone"
                {...register('phone')}
                type="tel"
                autoComplete="tel"
                aria-invalid={errors.phone ? 'true' : 'false'}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
                placeholder={language === 'en' ? '+1 (555) 123-4567' : '+۹۸ ۹۱۲ ۳۴۵ ۶۷۸۹'}
                className="w-full px-4 py-3 rounded-lg border border-navy-200 dark:border-navy-600 bg-white dark:bg-navy-700 text-navy-900 dark:text-beige-50 focus:outline-none focus:ring-2 focus:ring-gold-500 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              />
              {errors.phone && (
                <p id="phone-error" className="mt-1 text-sm text-red-500" role="alert">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="preferredLanguage"
                  className="block text-sm font-medium mb-2 text-navy-700 dark:text-beige-200"
                >
                  {langContent.fields.preferredLanguage} *
                </label>
                <select
                  id="preferredLanguage"
                  {...register('preferredLanguage')}
                  className="w-full px-4 py-3 rounded-lg border border-navy-200 dark:border-navy-600 bg-white dark:bg-navy-700 text-navy-900 dark:text-beige-50 focus:outline-none focus:ring-2 focus:ring-gold-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  <option value="en">{langContent.options.language.en}</option>
                  <option value="fa">{langContent.options.language.fa}</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="level"
                  className="block text-sm font-medium mb-2 text-navy-700 dark:text-beige-200"
                >
                  {langContent.fields.level} *
                </label>
                <select
                  id="level"
                  {...register('level')}
                  className="w-full px-4 py-3 rounded-lg border border-navy-200 dark:border-navy-600 bg-white dark:bg-navy-700 text-navy-900 dark:text-beige-50 focus:outline-none focus:ring-2 focus:ring-gold-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  <option value="not-sure">{langContent.options.level['not-sure']}</option>
                  <option value="beginner">{langContent.options.level.beginner}</option>
                  <option value="intermediate">{langContent.options.level.intermediate}</option>
                  <option value="advanced">{langContent.options.level.advanced}</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="goal"
                className="block text-sm font-medium mb-2 text-navy-700 dark:text-beige-200"
              >
                {langContent.fields.goal} *
              </label>
              <textarea
                id="goal"
                {...register('goal')}
                rows={3}
                aria-invalid={errors.goal ? 'true' : 'false'}
                aria-describedby={errors.goal ? 'goal-error' : undefined}
                className="w-full px-4 py-3 rounded-lg border border-navy-200 dark:border-navy-600 bg-white dark:bg-navy-700 text-navy-900 dark:text-beige-50 focus:outline-none focus:ring-2 focus:ring-gold-500 disabled:opacity-50 disabled:cursor-not-allowed resize-y"
                disabled={isSubmitting}
              />
              {errors.goal && (
                <p id="goal-error" className="mt-1 text-sm text-red-500" role="alert">
                  {errors.goal.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="availability"
                className="block text-sm font-medium mb-2 text-navy-700 dark:text-beige-200"
              >
                {langContent.fields.availability} *
              </label>
              <textarea
                id="availability"
                {...register('availability')}
                rows={2}
                aria-invalid={errors.availability ? 'true' : 'false'}
                aria-describedby={errors.availability ? 'availability-error' : undefined}
                placeholder={language === 'en' ? 'e.g., Weekdays 6-8 PM EST' : 'مثلاً، روزهای هفته ۶-۸ بعدازظهر'}
                className="w-full px-4 py-3 rounded-lg border border-navy-200 dark:border-navy-600 bg-white dark:bg-navy-700 text-navy-900 dark:text-beige-50 focus:outline-none focus:ring-2 focus:ring-gold-500 disabled:opacity-50 disabled:cursor-not-allowed resize-y"
                disabled={isSubmitting}
              />
              {errors.availability && (
                <p id="availability-error" className="mt-1 text-sm text-red-500" role="alert">
                  {errors.availability.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2 text-navy-700 dark:text-beige-200"
              >
                {langContent.fields.message}
              </label>
              <textarea
                id="message"
                {...register('message')}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-navy-200 dark:border-navy-600 bg-white dark:bg-navy-700 text-navy-900 dark:text-beige-50 focus:outline-none focus:ring-2 focus:ring-gold-500 disabled:opacity-50 disabled:cursor-not-allowed resize-y"
                disabled={isSubmitting}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-gold-500 hover:bg-gold-600 disabled:bg-gold-300 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  {langContent.submitting}
                </>
              ) : (
                langContent.submit
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
