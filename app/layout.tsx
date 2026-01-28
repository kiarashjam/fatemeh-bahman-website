/**
 * Root layout – wraps every page with shared providers and shell (Header, Footer).
 * Fonts, metadata, and global UI (WhatsApp, BackToTop, SkipToContent) are set here.
 */
import type { Metadata, Viewport } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { LanguageProvider } from '@/lib/contexts/LanguageContext'
import { ThemeProvider } from '@/lib/contexts/ThemeContext'
import { FloatingWhatsApp } from '@/components/ui/FloatingWhatsApp'
import { BackToTop } from '@/components/ui/BackToTop'
import { SkipToContent } from '@/components/ui/SkipToContent'
import { ErrorBoundary } from '@/components/ErrorBoundary'

// Google Fonts: DM Sans (body), Playfair Display (headings). CSS vars used in globals.css/tailwind.
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans', weight: ['400', '500', '600', '700'] })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', weight: ['400', '500', '600', '700'] })

/** Viewport: responsive, allow zoom up to 5x; cover for notches/safe areas */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
}

/** SEO and social: title template, description, OG, Twitter, robots, alternates (en/fa). Review: update url and locale when deploying. */
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
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/images/fatemeh.jpeg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${playfair.variable} font-sans antialiased`}>
        {/* Top-level error boundary so a single component crash doesn’t break the whole app */}
        <ErrorBoundary>
          <ThemeProvider>
            <LanguageProvider>
              {/* Accessibility: skip link for keyboard users */}
              <SkipToContent />
              <div className="min-h-screen flex flex-col">
                <Header />
                {/* main-content id is the target of SkipToContent and used for focus management */}
                <main className="flex-grow" id="main-content" tabIndex={-1}>
                  {children}
                </main>
                <Footer />
                {/* Global UI: contact CTA and scroll-to-top */}
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
