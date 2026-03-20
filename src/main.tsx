import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

// Lazy-load Clerk and Convex only when env vars are present to reduce initial bundle size
const ClerkWrappedApp = lazy(() =>
  import('./ClerkApp').then((mod) => ({ default: mod.default }))
)

function Root() {
  if (PUBLISHABLE_KEY) {
    return (
      <Suspense fallback={<App />}>
        <ClerkWrappedApp />
      </Suspense>
    )
  }

  return <App />
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
)
