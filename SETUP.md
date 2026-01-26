# Setup Guide

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Customization Checklist

### 1. Contact Information
- [ ] Update WhatsApp number in:
  - `components/layout/Footer.tsx`
  - `components/ui/FloatingWhatsApp.tsx`
  - `components/sections/contact/QuickContact.tsx`
  - All other components with WhatsApp links

- [ ] Update email address in:
  - `components/layout/Footer.tsx`
  - `components/sections/contact/QuickContact.tsx`

### 2. Images
- [ ] Add professional portrait image to `/public/images/portrait.jpg`
- [ ] Update hero section in `components/sections/Hero.tsx` to use the actual image
- [ ] Add any additional images as needed

### 3. Pricing
- [ ] Update pricing in `components/sections/pricing/PricingCards.tsx`
- [ ] Adjust currency if needed (currently USD)

### 4. Calendar/Booking Integration
- [ ] Replace placeholder in `components/sections/contact/CalendarEmbed.tsx`
- [ ] Add your Calendly, Acuity, or other booking system embed code

### 5. Content Updates
- [ ] Review and customize all text content in:
  - `lib/content.ts` (main content)
  - Individual component files for page-specific content
- [ ] Update testimonials with real student feedback
- [ ] Customize FAQ answers as needed

### 6. SEO & Metadata
- [ ] Update metadata in `app/layout.tsx`
- [ ] Update page-specific metadata in each page file
- [ ] Add your actual social media links if applicable

### 7. Styling (Optional)
- [ ] Adjust colors in `tailwind.config.ts` if needed
- [ ] Customize fonts (currently using Inter + Vazir for Persian)
- [ ] Modify spacing/sizing in component files

## Production Build

1. **Build for production:**
   ```bash
   npm run build
   ```

2. **Start production server:**
   ```bash
   npm start
   ```

## Deployment

This Next.js app can be deployed to:
- **Vercel** (recommended - zero config)
- **Netlify**
- **Any Node.js hosting service**

For Vercel:
1. Push your code to GitHub
2. Import project in Vercel
3. Deploy (automatic)

## Features Implemented

✅ Full RTL/LTR support (English/Persian)
✅ Dark mode toggle
✅ Responsive design (mobile, tablet, desktop)
✅ Form validation with React Hook Form + Zod
✅ Smooth animations with Framer Motion
✅ SEO-friendly structure
✅ Accessible components
✅ Language switching with persistence
✅ Theme switching with persistence
✅ Floating WhatsApp button (mobile)
✅ Back to top button
✅ Testimonials carousel
✅ FAQ accordion
✅ Contact form with validation
✅ Pricing cards
✅ Lesson tabs and content

## Notes

- All placeholder content is clearly marked
- Replace example.com email addresses
- Update WhatsApp number (currently placeholder: 1234567890)
- Calendar embed section needs your booking system code
- Images should be optimized before adding to `/public`
