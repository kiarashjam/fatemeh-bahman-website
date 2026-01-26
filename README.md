# Fatemeh Bahman - Persian Teacher Website

A modern, premium React website built with Next.js, TypeScript, and Tailwind CSS for Fatemeh Bahman, a Persian (Farsi) teacher.

## ✨ Features

- 🌐 Full RTL/LTR support (English/Persian)
- 🎨 Modern, elegant design with warm colors
- 📱 Fully responsive
- 🌙 Dark mode support
- ⚡ Fast and SEO-friendly
- ✨ Smooth animations with Framer Motion
- 📝 Form validation with React Hook Form + Zod
- ♿ Fully accessible (WCAG compliant)
- ⌨️ Keyboard navigation support
- 🔍 SEO optimized with sitemap and robots.txt
- 🛡️ Error boundary for graceful error handling

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## 📦 Deployment

### GitHub + Azure (Recommended)

See `COMPLETE_SETUP.md` for full instructions.

**Quick Steps:**
1. Push to GitHub
2. Create Azure Web App (F1 Free tier, North Italy)
3. Add publish profile to GitHub Secrets
4. Automatic deployment via GitHub Actions!

### Other Platforms

- **Vercel**: Connect GitHub repo (zero config)
- **Netlify**: Connect GitHub repo
- **Any Node.js hosting**: Build and deploy

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
├── components/             # React components
│   ├── layout/            # Header, Footer
│   ├── sections/          # Page sections
│   └── ui/                # Reusable UI components
├── lib/                   # Utilities and contexts
├── public/                # Static assets
└── .github/workflows/     # GitHub Actions
```

## 🎨 Customization

1. **Contact Info**: Update `lib/constants.ts`
2. **Content**: Edit component files or `lib/content.ts`
3. **Styling**: Modify `tailwind.config.ts`
4. **Images**: Add to `/public/images`

## 📚 Documentation

- `COMPLETE_SETUP.md` - Full deployment guide
- `AZURE_QUICK_START.md` - Quick Azure setup
- `azure-setup.md` - Detailed Azure instructions
- `SETUP.md` - Customization guide
- `BUG_FIXES.md` - Bug fixes and improvements

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React

## 📄 License

Private project for Fatemeh Bahman

## 🙏 Credits

Built with modern web technologies and best practices.
