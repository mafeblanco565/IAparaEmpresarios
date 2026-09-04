import { MessageCircle } from 'lucide-react'

// Número de WhatsApp para las inscripciones
const WHATSAPP_PHONE = '573158071474'
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hola, quiero apartar mi cupo para el Diplomado en IA para empresarios.',
)

export function SignupForm() {
  const href = `https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_MESSAGE}`

  return (
    <section id="cupo" className="bg-wine py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
        <h2 className="font-heading text-balance text-4xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl">
          Aparta tu cupo.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-white/80">
          Asegura tu lugar con hasta 20% de descuento por inscribirte hoy.
          Escríbenos por WhatsApp y con gusto te ayudamos con tu inscripción.
        </p>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-base font-semibold text-white transition hover:opacity-90"
        >
          <MessageCircle className="h-6 w-6" aria-hidden="true" />
          Aparta tu cupo por WhatsApp
        </a>

        <p className="mt-6 text-sm text-white/60">Cupos limitados</p>
      </div>
    </section>
  )
}
