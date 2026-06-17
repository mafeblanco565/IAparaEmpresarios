const audiences = [
  'Emprendedores',
  'Dueños de negocio',
  'Comercio',
  'Restaurantes',
  'Tiendas de ropa',
  'Artesanos',
  'Servicios',
]

export function Audience() {
  return (
    <section id="dirigido" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
        <h2 className="font-heading mx-auto max-w-3xl text-balance text-4xl font-bold uppercase leading-[0.95] tracking-tight text-ink sm:text-5xl lg:text-6xl">
          Para quienes quieren aprender y no quedarse atrás.
        </h2>
        <ul className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {audiences.map((a) => (
            <li
              key={a}
              className="rounded-full border border-brand-red/30 bg-pink/15 px-6 py-3 text-base font-semibold text-wine"
            >
              {a}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
