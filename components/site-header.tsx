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
    </header>
  )
}
