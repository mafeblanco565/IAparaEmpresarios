import { Download } from 'lucide-react'

const levels = [
  {
    num: 'I',
    title: 'Herramientas Digitales e IA para Negocios',
    meta: '25 horas · 10 sesiones · Presencial',
    desc: 'Fundamentos de IA, herramientas digitales esenciales, tus primeros agentes (Gems) y prompts básicos. Ideal para empezar desde cero.',
  },
  {
    num: 'II',
    title: 'IA en Marketing, Ventas y Finanzas',
    meta: '50 horas · 20 sesiones',
    desc: 'Agentes de IA y prompt engineering, finanzas con IA, marketing de contenido y tu primera página web con IA. Aplica la IA a las áreas clave de tu negocio.',
  },
  {
    num: 'III',
    title: 'Automatización e Inteligencia de Negocios',
    meta: '50 horas · 20 sesiones',
    desc: 'Ventas con IA, automatización de procesos con n8n, inteligencia de negocios y herramientas avanzadas. Automatiza y escala tu empresa.',
  },
]

export function Levels() {
  return (
    <section id="niveles" className="bg-paper-soft py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="font-heading max-w-3xl text-balance text-4xl font-bold uppercase leading-[0.95] tracking-tight text-ink sm:text-5xl lg:text-6xl">
          Un camino completo, nivel por nivel.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {levels.map((level) => (
            <article
              key={level.num}
              className="flex flex-col rounded-3xl border border-black/10 bg-white p-7 transition hover:border-brand-red/40 hover:shadow-lg"
            >
              <span
                className="font-heading text-5xl font-bold leading-none text-brand-red"
                aria-hidden="true"
              >
                {level.num}
              </span>
              <h3 className="font-heading mt-5 text-xl font-bold leading-tight text-ink">
                Nivel {level.num} — {level.title}
              </h3>
              <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-wine">
                {level.meta}
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {level.desc}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="/programa-completo-ia-para-empresarios.pdf"
            download
            className="font-heading group inline-flex animate-neon-pulse items-center gap-2 rounded-full bg-[#39ff14] px-8 py-4 text-base font-bold uppercase tracking-wide text-ink shadow-[0_0_20px_rgba(57,255,20,0.6)] transition duration-300 hover:scale-105 hover:bg-[#5fff45] hover:shadow-[0_0_35px_rgba(57,255,20,0.9)]"
          >
            Descarga programa completo
            <Download
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
