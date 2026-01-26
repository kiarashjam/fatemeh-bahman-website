import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { LanguageProvider } from '@/lib/contexts/LanguageContext'
import { ThemeProvider } from '@/lib/contexts/ThemeContext'
import { FloatingWhatsApp } from '@/components/ui/FloatingWhatsApp'
import { BackToTop } from '@/components/ui/BackToTop'
import { SkipToContent } from '@/components/ui/SkipToContent'
import { ErrorBoundary } from '@/components/ErrorBoundary'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: {
    default: 'Fatemeh Bahman - Learn Persian with Clarity, Confidence, and Culture',
    template: '%s | Fatemeh Bahman',
  },
  description: 'Professional Persian (Farsi) language lessons with 30+ years of teaching experience. Learn reading, writing, and conversation from beginner to advanced levels.',
  keywords: ['Persian teacher', 'Farsi lessons', 'learn Persian', 'Persian language', 'Farsi tutor', 'online Persian classes', 'Persian tutor', 'Farsi teacher'],
  authors: [{ name: 'Fatemeh Bahman' }],
  creator: 'Fatemeh Bahman',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'fa_IR',
    title: 'Fatemeh Bahman - Persian Teacher',
    description: 'Learn Persian with clarity, confidence, and culture',
    siteName: 'Fatemeh Bahman - Persian Teacher',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fatemeh Bahman - Persian Teacher',
    description: 'Learn Persian with clarity, confidence, and culture',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    languages: {
      'en-US': '/',
      'fa-IR': '/',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ErrorBoundary>
          <ThemeProvider>
            <LanguageProvider>
              <SkipToContent />
              <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow" id="main-content" tabIndex={-1}>
                  {children}
                </main>
                <Footer />
                <FloatingWhatsApp />
                <BackToTop />
              </div>
            </LanguageProvider>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
