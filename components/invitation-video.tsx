'use client'

import { useRef, useState } from 'react'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export function InvitationVideo() {
  const ref = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(true)
  const [muted, setMuted] = useState(true)

  const togglePlay = () => {
    const v = ref.current
    if (!v) return
    if (v.paused) {
      v.play()
    } else {
      v.pause()
    }
  }

  const toggleMute = () => {
    const v = ref.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
  }

  const restart = () => {
    const v = ref.current
    if (!v) return
    v.currentTime = 0
    v.play()
  }

  return (
    <div className="invitation-video-visual">
      <video
        ref={ref}
        className="invitation-video"
        src={`${basePath}/videos/diplomado-ia-invitacion.mp4`}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <div className="invitation-video-controls">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={playing ? 'Pausar video' : 'Reproducir video'}
        >
          {playing ? (
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
              <rect x="6" y="5" width="4" height="14" rx="1" />
              <rect x="14" y="5" width="4" height="14" rx="1" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
              <path d="M8 5.14v13.72a1 1 0 0 0 1.53.85l10.79-6.86a1 1 0 0 0 0-1.7L9.53 4.29A1 1 0 0 0 8 5.14z" />
            </svg>
          )}
        </button>
        <button
          type="button"
          onClick={restart}
          aria-label="Volver a empezar"
        >
          <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 2v6h6" />
            <path d="M3.5 13a9 9 0 1 0 2-6.7L3 8" />
          </svg>
        </button>
        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? 'Activar sonido' : 'Silenciar'}
        >
          {muted ? (
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
              <path d="M11 5 6.5 9H3v6h3.5L11 19V5z" />
              <path d="M16 9l5 6M21 9l-5 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
              <path d="M11 5 6.5 9H3v6h3.5L11 19V5z" />
              <path d="M15.5 8.5a5 5 0 0 1 0 7M18 6a8.5 8.5 0 0 1 0 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}
