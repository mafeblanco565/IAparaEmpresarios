import { Rocket, BadgeCheck, Building2, Award } from 'lucide-react'
import { FloatingBlobs } from './blobs'

const benefits = [
  {
    icon: Rocket,
    text: 'Mientras aprendes, transformas tu negocio: no trabajas con ejemplos, trabajas en tu propia empresa.',
  },
  {
    icon: BadgeCheck,
    text: 'Formación de calidad: ISO 9001:2015, NTC 5555:2011, NTC 5581:2011, NTC 5666:2011.',
  },
  { icon: Building2, text: 'Casos reales de tu sector.' },
  { icon: Award, text: 'Certificado y graduación al finalizar.' },
]

export function FullDiploma() {
  return (
    <section
      id="diplomado"
      className="relative isolate overflow-hidden bg-ink py-20 sm:py-28"
    >
      <FloatingBlobs />
      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <h2 className="font-heading text-balance text-4xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
          Diplomado en ia: Transformación digital
        </h2>
        <p className="mt-6 max-w-3xl text-pretty text-lg leading-relaxed text-white/70">
          3 niveles integrados en una sola ruta de formación: 125 horas Teórico-prácticos, desde los fundamentos hasta la automatización.  Aprende, usa, aplica y automatiza con IA para que lleves tu negocio a otro nivel.
        </p>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {benefits.map((b, i) => {
            const Icon = b.icon
            return (
              <li
                key={i}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-red">
                  <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                </span>
                <span className="text-base leading-relaxed text-white/90">
                  {b.text}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
