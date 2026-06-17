import Image from 'next/image'

export function SiteFooter() {
  return (
    <footer className="bg-ink py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 text-center sm:px-8">
        <Image
          src="/images/logo-dark-bg.png"
          alt="Multicómputo"
          width={200}
          height={54}
          className="h-12 w-auto"
        />
        <p className="text-sm text-white/70">Multicómputo · Bucaramanga, Santander</p>
        <p className="font-heading text-lg font-semibold uppercase tracking-tight text-pink">
          Aprendes porque aprendes.
        </p>
      </div>
    </footer>
  )
}
