import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Watches pathname + hash on every navigation.
 * - No hash  → scroll to top
 * - Has hash → scrollIntoView + trigger gold blink animation
 */
export default function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const id = hash.replace('#', '')

    // Small delay so the page has rendered before we try to scroll
    const timer = setTimeout(() => {
      const el = document.getElementById(id)
      if (!el) return

      el.scrollIntoView({ behavior: 'smooth', block: 'start' })

      // Re-trigger blink animation by removing and re-adding the class
      el.classList.remove('anchor-highlight')
      void el.offsetWidth // force reflow
      el.classList.add('anchor-highlight')
    }, 80)

    return () => clearTimeout(timer)
  }, [pathname, hash])

  return null
}
