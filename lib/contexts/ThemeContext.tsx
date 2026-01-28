'use client'

/**
 * Theme context – light/dark with persistence in localStorage and system preference fallback.
 * Use useTheme() in components; toggleTheme() flips theme and updates <html class="dark">.
 */
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  /** On mount: read saved theme or prefer system (prefers-color-scheme: dark). */
  useEffect(() => {
    setMounted(true)
    try {
      const saved = localStorage.getItem('theme') as Theme
      if (saved && (saved === 'light' || saved === 'dark')) {
        setTheme(saved)
      } else if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark')
      }
    } catch (error) {
      // localStorage might not be available (SSR, private browsing, etc.)
      console.warn('Failed to access localStorage:', error)
      if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark')
      }
    }
  }, [])

  /** Apply theme to <html class="dark"> and persist to localStorage (after mount to avoid hydration mismatch). */
  useEffect(() => {
    if (mounted && typeof document !== 'undefined') {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      try {
        localStorage.setItem('theme', theme)
      } catch (error) {
        console.warn('Failed to save theme to localStorage:', error)
      }
    }
  }, [theme, mounted])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  /* Always provide context value, even during SSR, so useTheme() doesn’t throw before mount */
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

/** Use theme state and toggleTheme; must be used inside ThemeProvider. */
export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
