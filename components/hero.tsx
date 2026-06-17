import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-ink pt-32 pb-24 sm:pt-40 sm:pb-32"
    >
      <img
        src="/images/hero-bg.jpg"
        alt="Equipo de microempresarias presentando productos optimizados con IA en su laboratorio"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-ink/80" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 text-center sm:px-8">
        <h1 className="font-heading text-balance text-5xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
          Aprende IA.
          <br />
          <span className="text-brand-red">
            Lleva tu negocio a otro nivel.
          </span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
          Diplomado en IA : Transformación Digital · 125 horas · 3 niveles · Para
          microempresarios sin experiencia técnica.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#cupo"
            className="inline-flex items-center gap-2 rounded-full bg-brand-red px-8 py-4 text-base font-semibold text-white transition hover:opacity-90"
          >
            Aparta tu cupo <ArrowRight className="h-5 w-5" />
          </a>
          <a
            href="#niveles"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10"
          >
            Ver los niveles
          </a>
        </div>
      </div>
    </section>
  )
}
