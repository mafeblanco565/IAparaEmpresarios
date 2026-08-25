'use client'

import { useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Clock3, Hexagon, Menu, MessageCircle, MoveUpRight, Sparkles, Target, Workflow, X } from 'lucide-react'

const whatsappUrl = 'https://wa.me/573158898014?text=Hola%2C%20quiero%20apartar%20mi%20cupo%20para%20el%20Diplomado%20en%20IA%20para%20empresarios.'

const levels = [
  { number: '01', eyebrow: 'Empieza con claridad', title: 'IA y herramientas digitales para negocios', detail: '20 h cátedra + 5 h autónomas · 10 sesiones · Presencial', copy: 'Construye una base práctica: entiende la IA, domina tus primeras herramientas y crea prompts que sí te sirven.', accent: 'lime' },
  { number: '02', eyebrow: 'Lleva la IA al día a día', title: 'IA en marketing, ventas y finanzas', detail: '40 h cátedra + 10 h autónomas · 20 sesiones', copy: 'Aplica agentes y prompt engineering para crear contenido, ordenar tus finanzas y lanzar tu primera página web.', accent: 'coral' },
  { number: '03', eyebrow: 'Haz que tu negocio avance', title: 'IA, automatización e inteligencia de negocios', detail: '40 h cátedra + 10 h autónomas · 20 sesiones', copy: 'Conecta procesos, automatiza tareas con n8n y toma decisiones con una visión más inteligente de tu empresa.', accent: 'blue' },
]
const audiences = ['Emprendedores', 'Dueños de negocio', 'Comercio', 'Restaurantes', 'Alimentos', 'Talleres y oficios', 'Microempresas', 'Tiendas de ropa', 'Artesanos', 'Servicios']

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = [['La ruta', '#ruta'], ['El diplomado', '#diplomado'], ['Para quién', '#dirigido'], ['Inscripción', '#cupo']]
  return (
    <>
      <header className="site-header reference-header">
        <a href="#inicio" className="brand reference-logo" aria-label="Multicómputo, inicio"><img src="/images/logo-light-bg.png" alt="Multicómputo" /></a>
        <nav className="reference-nav" aria-label="Navegación principal">{links.map(([label, href], index) => <a className={index === 0 ? 'active' : ''} href={href} key={href}>{label}</a>)}</nav>
        <a className="header-cta reference-signin" href={whatsappUrl} target="_blank" rel="noreferrer">Aparta tu cupo <ArrowUpRight size={14} /></a>
        <button className={`mobile-menu-toggle ${menuOpen ? 'open' : ''}`} aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
      </header>
      {menuOpen && <div className="mobile-menu-sheet">{links.map(([label, href]) => <a href={href} key={href} onClick={() => setMenuOpen(false)}>{label}</a>)}<a className="mobile-menu-cta" href={whatsappUrl} target="_blank" rel="noreferrer">Aparta tu cupo <ArrowUpRight size={16} /></a></div>}
    </>
  )
}

export default function Home() {
  return (
    <main>
      <Header />

      <section id="inicio" className="hero-video-section">
        <video className="hero-video" autoPlay loop muted playsInline poster="/images/hero-bg.jpg" aria-hidden="true">
          <source src="/hero-ia.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-shade" aria-hidden="true" />
        <div className="hero-grid-lines" aria-hidden="true" />
        <div className="hero-centered-content">
          <div className="trust-pill"><span className="trust-avatar"><span>AI</span></span><span className="trust-avatar"><span>IA</span></span><span className="trust-avatar"><span>+</span></span><strong>Formación para empresas reales</strong></div>
          <h1><span>Aprende IA.</span><span><em>Lleva tu negocio a otro nivel.</em></span></h1>
          <p className="hero-lead">Una ruta práctica para transformar tus procesos, vender mejor y hacer crecer tu empresa con inteligencia artificial.</p>
          <div className="hero-actions"><a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Aparta tu cupo <ArrowUpRight size={18} /></a><a className="text-link" href="#ruta">Ver los niveles <ArrowDownRight size={17} /></a></div>
          <div className="hero-proof"><span>125</span> horas de formación aplicada <span className="proof-divider" /> <span>03</span> niveles integrados</div>
        </div>
        <div className="video-status"><span className="status-dot" /> AI / BUSINESS / 2026</div>
        <div className="scroll-cue"><span>Scroll para explorar</span><ArrowDownRight size={17} /></div>
      </section>

      <section className="trust-strip" aria-label="Información de confianza"><div><span className="mono-label">UNA FORMACIÓN</span><strong>Hecha para empresas reales</strong></div><div><span className="metric">100 + 25</span><span>horas cátedra<br />+ autónomas</span></div><div><span className="metric">03</span><span>niveles<br />conectados</span></div><div><span className="metric accent-text">ISO</span><span>calidad<br />certificada</span></div></section>

      <section id="ruta" className="section section-dark levels-section"><div className="section-heading"><div><p className="eyebrow">[ LA RUTA ]</p><h2>Una progresión<br /><span>que se nota.</span></h2></div><p className="section-intro">No vienes a escuchar teoría. Vienes a trabajar sobre tu propia empresa y a salir con herramientas que puedes usar desde el primer día.</p></div><div className="levels-list">{levels.map((level) => <article className={`level-card ${level.accent}`} key={level.number}><div className="level-top"><span className="level-number">{level.number}</span><span className="level-eyebrow">{level.eyebrow}</span><ArrowUpRight size={20} /></div><h3>{level.title}</h3><p className="level-detail"><Clock3 size={14} /> {level.detail}</p><p className="level-copy">{level.copy}</p></article>)}</div><div className="download-row"><span>¿Quieres ver el programa completo?</span><a href="/programa-completo-ia-para-empresarios.pdf" target="_blank" rel="noreferrer">Descargar programa <MoveUpRight size={16} /></a></div></section>

      <section id="diplomado" className="section transformation-section"><div className="transformation-mark"><Hexagon size={62} strokeWidth={1} /><span>IA<br />+<br />NEGOCIO</span></div><div className="transformation-copy"><p className="eyebrow">[ EL DIPLOMADO ]</p><h2>Mientras aprendes,<br /><em>tu negocio se mueve.</em></h2><p>La diferencia está en la aplicación. No trabajas con ejemplos inventados: cada clase se conecta con los retos, procesos y oportunidades de tu propia empresa.</p><div className="benefit-grid"><div><Target size={22} /><strong>Casos de tu sector</strong><span>Lo que aprendes tiene contexto.</span></div><div><Workflow size={22} /><strong>Progreso medible</strong><span>De la idea a la implementación.</span></div><div><Sparkles size={22} /><strong>Formación con Calidad Certificada</strong><span>ISO 9001:2015, NTC 5555:2011, NTC 5581:2011, NTC 5666:2011.</span></div></div></div></section>

      <section id="dirigido" className="audience-section"><div className="audience-heading"><p className="eyebrow">[ PARA QUIÉN ]</p><h2>Para quienes<br /><span>no quieren quedarse atrás.</span></h2></div><div className="audience-content"><p>Si tu negocio tiene clientes, procesos y ganas de crecer, esta ruta es para ti.</p><div className="tag-cloud">{audiences.map((audience, index) => <span key={audience} className={index % 4 === 0 ? 'highlight' : ''}>{audience}</span>)}</div></div></section>

      <section id="cupo" className="signup-section"><div className="signup-panel"><div className="signup-copy"><p className="eyebrow">[ ÚLTIMO PASO ]</p><h2>Tu negocio ya está<br /><em>listo para avanzar.</em></h2><p>Aparta tu cupo hoy y recibe hasta un 20% de descuento. Los cupos son limitados.</p><a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Apartar mi cupo por WhatsApp</a></div><div className="payment-card"><span className="mono-label">PAGO CON QR</span><img src="/images/qr-pago.jpeg" alt="Código QR de Bancolombia para pagar la inscripción a Multicómputo" /><strong>Escanea, paga y confirma tu inscripción.</strong><small>Sin costo desde la app de tu entidad bancaria habilitada.</small></div></div></section>

      <footer className="site-footer"><div className="footer-brand"><img src="/images/logo-dark-bg.png" alt="Multicómputo" /><p>Aprendes porque aprendes.</p></div><div className="footer-meta"><span>Multicómputo · Bucaramanga, Santander</span><a href={whatsappUrl} target="_blank" rel="noreferrer">Escríbenos <ArrowUpRight size={15} /></a></div></footer>
      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Escribir por WhatsApp"><MessageCircle size={22} /></a>
    </main>
  )
}
