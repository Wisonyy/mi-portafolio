import { useState } from 'react'

interface OptionalImageProps {
  src: string
  alt: string
  className?: string
  fallbackClassName?: string
  fallback?: string
}

export default function OptionalImage({
  src,
  alt,
  className = '',
  fallbackClassName = '',
  fallback,
}: OptionalImageProps) {
  const [unavailable, setUnavailable] = useState(false)

  if (unavailable) {
    return fallback ? (
      <div aria-label={alt} className={`${className} ${fallbackClassName}`} role="img">
        {fallback}
      </div>
    ) : null
  }

  return (
    <img
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setUnavailable(true)}
      src={src}
    />
  )
}
