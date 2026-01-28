/**
 * Site-wide constants – asset paths and config used across layout, metadata, and components.
 * Update SITE_CONFIG.url and contact details when deploying.
 */
export const ASSETS = {
  /** Professional portrait – Fatemeh's photo (Hero, metadata icons) */
  portrait: '/images/fatemeh.jpeg',
} as const

/** Site name, SEO, and contact (email, WhatsApp). */
export const SITE_CONFIG = {
  name: 'Fatemeh Bahman',
  title: 'Fatemeh Bahman - Learn Persian with Clarity, Confidence, and Culture',
  description: 'Professional Persian (Farsi) language lessons with 30+ years of teaching experience.',
  url: 'https://fatemehbahman.com', // Update with your actual domain
  email: 'fatemeh.bahman40@gmail.com',
  whatsapp: '393758212541',
  whatsappUrl: 'https://wa.me/393758212541',
} as const
