/**
 * Decorative organic "metaball" blobs used as section separators.
 * Pure CSS/SVG shapes — purely decorative, hidden from screen readers.
 */

type BlobFieldProps = {
  className?: string
  variant?: 'top' | 'bottom'
}

export function BlobField({ className = '', variant = 'top' }: BlobFieldProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 ${
        variant === 'top' ? 'top-0' : 'bottom-0'
      } overflow-hidden ${className}`}
    >
      <svg
        viewBox="0 0 1200 240"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="14" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -10"
              result="goo"
            />
          </filter>
        </defs>
        <g filter="url(#goo)">
          <circle cx="120" cy="60" r="58" fill="#ff8fa3" />
          <circle cx="210" cy="90" r="46" fill="#ff8fa3" />
          <circle cx="300" cy="55" r="40" fill="#e63946" />
          <circle cx="980" cy="80" r="64" fill="#e63946" />
          <circle cx="1070" cy="50" r="48" fill="#ff8fa3" />
          <circle cx="1140" cy="100" r="40" fill="#7b1e2b" />
          <circle cx="600" cy="40" r="34" fill="#ff8fa3" />
        </g>
      </svg>
    </div>
  )
}

/** Large soft blobs floating behind a dark section. */
export function FloatingBlobs() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full opacity-80"
      >
        <defs>
          <filter id="goo-bg">
            <feGaussianBlur in="SourceGraphic" stdDeviation="22" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9"
            />
          </filter>
        </defs>
        <g filter="url(#goo-bg)">
          <circle cx="140" cy="120" r="90" fill="#7b1e2b" />
          <circle cx="260" cy="180" r="70" fill="#e63946" />
          <circle cx="90" cy="240" r="60" fill="#7b1e2b" />
          <circle cx="1080" cy="560" r="110" fill="#7b1e2b" />
          <circle cx="950" cy="620" r="80" fill="#e63946" />
          <circle cx="1140" cy="460" r="64" fill="#ff8fa3" />
        </g>
      </svg>
    </div>
  )
}
