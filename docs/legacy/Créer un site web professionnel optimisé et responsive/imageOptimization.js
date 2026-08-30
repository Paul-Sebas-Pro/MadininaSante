// Utilitaires pour l'optimisation des images

/**
 * Génère des URLs d'images optimisées avec lazy loading
 */
export const getOptimizedImageUrl = (src, width = 800, quality = 80) => {
  // En production, on pourrait utiliser un service comme Cloudinary ou ImageKit
  // Pour le développement, on retourne l'image originale
  return src
}

/**
 * Composant Image optimisé avec lazy loading
 */
export const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = "",
  loading = "lazy",
  ...props 
}) => {
  return (
    <img
      src={getOptimizedImageUrl(src, width)}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      className={className}
      {...props}
      style={{
        ...props.style,
        aspectRatio: width && height ? `${width}/${height}` : undefined
      }}
    />
  )
}

/**
 * Précharge les images critiques
 */
export const preloadCriticalImages = (imageUrls) => {
  imageUrls.forEach(url => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = url
    document.head.appendChild(link)
  })
}

/**
 * Génère un placeholder pour les images en cours de chargement
 */
export const generateImagePlaceholder = (width, height, color = '#f3f4f6') => {
  return `data:image/svg+xml;base64,${btoa(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${color}"/>
    </svg>
  `)}`
}

