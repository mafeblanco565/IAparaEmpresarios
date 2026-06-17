import Image from 'next/image'

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <a href="#inicio" className="flex items-center" aria-label="Multicómputo - inicio">
          <Image
            src="/images/logo-dark-bg.png"
            alt="Multicómputo"
            width={180}
            height={48}
            className="h-10 w-auto sm:h-11"
            priority
          />
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegación principal">
          <a href="#niveles" className="text-sm font-medium text-white/80 transition hover:text-white">
            Niveles
          </a>
          <a href="#diplomado" className="text-sm font-medium text-white/80 transition hover:text-white">
            Diplomado
          </a>
          <a href="#dirigido" className="text-sm font-medium text-white/80 transition hover:text-white">
            Para quién
          </a>
        </nav>
        <a
          href="#cupo"
          className="rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Aparta tu cupo
        </a>
      </div>
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3 px-5 pb-3 sm:justify-end sm:px-8">
        {certifications.map((cert) => (
          <span
            key={cert.alt}
            className="flex h-12 items-center justify-center rounded-md bg-white px-2 shadow-sm"
          >
            <Image
              src={cert.src || "/placeholder.svg"}
              alt={cert.alt}
              width={80}
              height={48}
              className="h-9 w-auto"
            />
          </span>
        ))}
      </div>
    </header>
  )
}

const certifications = [
  { src: '/certifications/iso-9001.png', alt: 'Certificación ISO 9001:2015' },
  { src: '/certifications/icontec-5555.png', alt: 'Certificación ICONTEC NTC 5555' },
  { src: '/certifications/ict-5581.png', alt: 'Certificación IC&T NTC 5581:2011' },
  { src: '/certifications/ict-5666.png', alt: 'Certificación IC&T NTC 5666:2011' },
]
