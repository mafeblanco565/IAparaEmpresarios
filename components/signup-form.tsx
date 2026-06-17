'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'

// URL del Google Apps Script que recibe las inscripciones
const GOOGLE_SHEET_URL =
  'https://script.google.com/macros/s/AKfycbxpLExuSdNAK83hIXAqGbZkBC3rVccYx__buENlBzYV0mFNmQohi5yW8jIqzRtvBvawNQ/exec'

const SECCIONALES = ['Bucaramanga', 'Girón', 'Piedecuesta', 'Floridablanca']

type Status = 'idle' | 'submitting' | 'success' | 'error'

const initialData = {
  nombre: '',
  cedula: '',
  correo: '',
  celular: '',
  empresa: '',
  nit: '',
  seccional: '',
}

export function SignupForm() {
  const [data, setData] = useState(initialData)
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  function update(field: keyof typeof initialData, value: string) {
    setData((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  function validate() {
    const next: Record<string, string> = {}
    if (!data.nombre.trim()) next.nombre = 'Ingresa tu nombre completo.'
    if (!data.cedula.trim()) next.cedula = 'Ingresa tu cédula.'
    if (!data.correo.trim()) {
      next.correo = 'Ingresa tu correo.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.correo)) {
      next.correo = 'Ingresa un correo válido.'
    }
    if (!data.celular.trim()) next.celular = 'Ingresa tu celular.'
    if (!data.empresa.trim()) next.empresa = 'Ingresa el nombre de la empresa.'
    if (!data.nit.trim()) next.nit = 'Ingresa el NIT.'
    if (!data.seccional) next.seccional = 'Selecciona una seccional.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setStatus('submitting')
    try {
      // Enviamos como form-urlencoded para que los datos lleguen en e.parameter
      // del Apps Script (formato más compatible) y sin disparar preflight CORS.
      const params = new URLSearchParams({
        nombre: data.nombre,
        cedula: data.cedula,
        correo: data.correo,
        celular: data.celular,
        empresa: data.empresa,
        nit: data.nit,
        seccional: data.seccional,
      })
      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body: params.toString(),
      })
      setStatus('success')
      setData(initialData)
    } catch {
      setStatus('error')
    }
  }

  const fieldClass =
    'w-full rounded-2xl border border-white/20 bg-white/10 px-5 py-3.5 text-white placeholder:text-white/50 focus:border-pink focus:outline-none focus:ring-2 focus:ring-pink/50'

  if (status === 'success') {
    return (
      <section id="cupo" className="bg-wine py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
          <CheckCircle2
            className="mx-auto h-16 w-16 text-pink"
            aria-hidden="true"
          />
          <h2 className="font-heading mt-6 text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
            ¡Listo!
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/90">
            Hemos recibido tus datos. Te contactaremos muy pronto.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="cupo" className="bg-wine py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-5 sm:px-8">
        <h2 className="font-heading text-balance text-4xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl">
          Aparta tu cupo.
        </h2>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-white/80">
          Asegura tu lugar con hasta 30% de descuento por inscribirte hoy.
        </p>

        <form onSubmit={handleSubmit} noValidate className="mt-10 grid gap-5">
          <Field label="Nombre completo" error={errors.nombre}>
            <input
              type="text"
              value={data.nombre}
              onChange={(e) => update('nombre', e.target.value)}
              className={fieldClass}
              placeholder="Tu nombre"
              autoComplete="name"
            />
          </Field>

          <Field label="Cédula" error={errors.cedula}>
            <input
              type="text"
              inputMode="numeric"
              value={data.cedula}
              onChange={(e) => update('cedula', e.target.value.replace(/\D/g, ''))}
              className={fieldClass}
              placeholder="Número de cédula"
            />
          </Field>

          <Field label="Correo electrónico" error={errors.correo}>
            <input
              type="email"
              value={data.correo}
              onChange={(e) => update('correo', e.target.value)}
              className={fieldClass}
              placeholder="tucorreo@ejemplo.com"
              autoComplete="email"
            />
          </Field>

          <Field label="Celular" error={errors.celular}>
            <input
              type="tel"
              inputMode="numeric"
              value={data.celular}
              onChange={(e) => update('celular', e.target.value.replace(/\D/g, ''))}
              className={fieldClass}
              placeholder="Número de celular"
              autoComplete="tel"
            />
          </Field>

          <Field label="Nombre de la empresa" error={errors.empresa}>
            <input
              type="text"
              value={data.empresa}
              onChange={(e) => update('empresa', e.target.value)}
              className={fieldClass}
              placeholder="Tu empresa"
            />
          </Field>

          <Field label="Actividad a la que pertenece" error={errors.nit}>
            <input
              type="text"
              value={data.nit}
              onChange={(e) => update('nit', e.target.value)}
              className={fieldClass}
              placeholder="ejemplo: restaurante"
            />
          </Field>

          <Field label="Seccional de Cámara de Comercio" error={errors.seccional}>
            <select
              value={data.seccional}
              onChange={(e) => update('seccional', e.target.value)}
              className={`${fieldClass} appearance-none`}
            >
              <option value="" disabled>
                Selecciona una seccional
              </option>
              {SECCIONALES.map((s) => (
                <option key={s} value={s} className="text-black">
                  {s}
                </option>
              ))}
            </select>
          </Field>

          {status === 'error' && (
            <p className="rounded-2xl bg-brand-red px-5 py-3 text-center text-sm font-medium text-white">
              Hubo un problema al enviar. Intenta de nuevo.
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-8 py-4 text-base font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" /> Enviando...
              </>
            ) : (
              <>
                Reservar mi cupo <ArrowRight className="h-5 w-5" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  )
}

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-white">{label}</span>
      {children}
      {error && <span className="mt-1 block text-sm text-pink">{error}</span>}
    </label>
  )
}
