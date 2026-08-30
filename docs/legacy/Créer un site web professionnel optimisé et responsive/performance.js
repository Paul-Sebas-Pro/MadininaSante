// Utilitaires pour l'optimisation des performances

/**
 * Debounce function pour limiter les appels de fonction
 */
export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

/**
 * Throttle function pour limiter la fréquence d'exécution
 */
export const throttle = (func, limit) => {
  let inThrottle
  return function() {
    const args = arguments
    const context = this
    if (!inThrottle) {
      func.apply(context, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

/**
 * Intersection Observer pour le lazy loading
 */
export const createIntersectionObserver = (callback, options = {}) => {
  const defaultOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1
  }
  
  return new IntersectionObserver(callback, { ...defaultOptions, ...options })
}

/**
 * Précharge les ressources critiques
 */
export const preloadCriticalResources = () => {
  // Précharge les polices
  const fontUrls = [
    'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap',
    'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600&display=swap'
  ]
  
  fontUrls.forEach(url => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'style'
    link.href = url
    document.head.appendChild(link)
  })
}

/**
 * Mesure les Core Web Vitals
 */
export const measureWebVitals = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    // Mesure du LCP (Largest Contentful Paint)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries()
      const lastEntry = entries[entries.length - 1]
      console.log('LCP:', lastEntry.startTime)
    }).observe({ entryTypes: ['largest-contentful-paint'] })

    // Mesure du FID (First Input Delay)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries()
      entries.forEach(entry => {
        console.log('FID:', entry.processingStart - entry.startTime)
      })
    }).observe({ entryTypes: ['first-input'] })

    // Mesure du CLS (Cumulative Layout Shift)
    let clsValue = 0
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries()
      entries.forEach(entry => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value
        }
      })
      console.log('CLS:', clsValue)
    }).observe({ entryTypes: ['layout-shift'] })
  }
}

/**
 * Service Worker pour la mise en cache
 */
export const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('SW registered: ', registration)
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError)
        })
    })
  }
}

