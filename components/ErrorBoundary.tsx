'use client'

/**
 * ErrorBoundary – class component that catches React errors in the tree and shows a fallback.
 * Used in layout.tsx to prevent a single component crash from breaking the whole app.
 * Optional fallback prop; otherwise shows a generic "Something went wrong" + Refresh.
 */
import { Component, ReactNode } from 'react'
import { AlertCircle } from 'lucide-react'

interface Props {
  children: ReactNode
  /** Custom UI when an error is caught; if omitted, default message + Refresh is shown */
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  /** Turn thrown error into state so we can render fallback */
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  /** Log error and stack for debugging */
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-beige-50 dark:bg-navy-900 p-4">
          <div className="max-w-md w-full bg-white dark:bg-navy-800 rounded-xl shadow-lg p-8 text-center">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-2 text-navy-900 dark:text-beige-50">
              Something went wrong
            </h1>
            <p className="text-navy-600 dark:text-beige-300 mb-6">
              We&apos;re sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            <button
              onClick={() => {
                this.setState({ hasError: false, error: undefined })
                window.location.reload()
              }}
              className="px-6 py-3 bg-gold-500 hover:bg-gold-600 text-white rounded-lg font-medium transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
