export function PaymentSection() {
  return (
    <section id="pago" className="bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <h2 className="font-heading text-balance text-4xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl">
          Aparta tu cupo con tu <span className="text-pink">Código QR</span>
        </h2>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-white/80">
          Escanea el código y realiza tu pago. Sin costo desde la app de
          cualquier entidad bancaria habilitada.
        </p>

        <div className="mt-10 flex justify-center">
          <div className="rounded-3xl bg-white p-4 shadow-xl">
            <img
              src="/images/qr-pago.jpeg"
              alt="Código QR de Bancolombia para pagar a la cuenta corriente de Multicómputo"
              className="h-auto w-72 rounded-2xl object-contain sm:w-80"
            />
          </div>
        </div>

        <p className="mt-10 text-pretty text-sm leading-relaxed text-white/60">
          Tras realizar tu pago, recuerda diligenciar el formulario de
          inscripción para confirmar tu cupo.
        </p>
      </div>
    </section>
  )
}
