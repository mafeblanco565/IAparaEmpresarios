export function PromoBanner() {
  return (
    <section className="bg-wine py-8">
      <div className="mx-auto max-w-6xl px-5 text-center sm:px-8">
        <p className="font-heading text-xl font-bold uppercase leading-tight tracking-tight text-white sm:text-2xl">
          <span aria-hidden="true">🔥</span> Hasta{' '}
          <span className="text-pink">30% de descuento</span> si te
          inscribes <span className="text-pink">hoy mismo</span>
        </p>
        <p className="mt-2 text-sm text-white/70">Cupos limitados por seccional.</p>
      </div>
    </section>
  )
}
