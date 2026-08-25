'use client'

import { useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Clock3, Hexagon, Menu, MessageCircle, MoveUpRight, X } from 'lucide-react'
import KineticGrid from '@/components/KineticGrid'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
const whatsappUrl = 'https://wa.me/573158898014?text=Hola%2C%20quiero%20apartar%20mi%20cupo%20para%20el%20Diplomado%20en%20IA%20para%20empresarios.'

const levels = [
  { number: '01', eyebrow: 'Empieza con claridad', title: 'IA y herramientas digitales para negocios', detail: '20 h cátedra + 5 h autónomas · 10 sesiones · Presencial', copy: 'Construye una base práctica: entiende la IA, domina tus primeras herramientas y crea prompts que sí te sirven.', accent: 'lime' },
  { number: '02', eyebrow: 'Lleva la IA al día a día', title: 'IA en marketing, ventas y finanzas', detail: '40 h cátedra + 10 h autónomas · 20 sesiones', copy: 'Aplica agentes y prompt engineering para crear contenido, ordenar tus finanzas y lanzar tu primera página web.', accent: 'coral' },
  { number: '03', eyebrow: 'Haz que tu negocio avance', title: 'IA, automatización e inteligencia de negocios', detail: '40 h cátedra + 10 h autónomas · 20 sesiones', copy: 'Conecta procesos, automatiza tareas con n8n y toma decisiones con una visión más inteligente de tu empresa.', accent: 'blue' },
]
const audiences = ['Empresarios', 'Profesionales', 'Emprendedores', 'Dueños de negocio', 'Profesionales independientes', 'Consultores', 'Equipos de trabajo', 'Comercio', 'Restaurantes', 'Servicios']

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = [['La ruta', '#ruta'], ['El diplomado', '#diplomado'], ['Para quién', '#dirigido'], ['Inscripción', '#cupo']]
  return (
    <>
      <header className="site-header reference-header">
        <a href="#inicio" className="brand reference-logo" aria-label="Multicómputo, inicio"><img src={`${basePath}/images/logo-dark-bg.png`} alt="Multicómputo" /></a>
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
        <video className="hero-video" autoPlay loop muted playsInline poster={`${basePath}/images/hero-bg.jpg`} aria-hidden="true">
          <source src={`${basePath}/hero-ia.mp4`} type="video/mp4" />
        </video>
        <div className="hero-video-shade" aria-hidden="true" />
        <div className="hero-grid-lines" aria-hidden="true" />
        <div className="hero-centered-content">
          <div className="trust-pill"><span className="trust-avatar"><span>AI</span></span><span className="trust-avatar"><span>IA</span></span><span className="trust-avatar"><span>+</span></span><strong>Formación para empresas reales</strong></div>
          <h1><span>Aprende IA.</span><span><em>Lleva tu negocio a otro nivel.</em></span></h1>
          <p className="hero-lead">Una formación práctica para empresarios y profesionales que quieren actualizarse, trabajar mejor y llevar su empresa, emprendimiento o profesión a otro nivel con IA.</p>
          <div className="hero-actions"><a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Aparta tu cupo <ArrowUpRight size={18} /></a><a className="text-link" href="#ruta">Ver los niveles <ArrowDownRight size={17} /></a></div>
          <div className="hero-proof"><span>125</span> horas para trabajar mejor <span className="proof-divider" /> <span>03</span> niveles de avance</div>
        </div>
        <div className="video-status"><span className="status-dot" /> AI / BUSINESS / 2026</div>
        <div className="scroll-cue"><span>Scroll para explorar</span><ArrowDownRight size={17} /></div>
      </section>

      <section className="trust-strip" aria-label="Información de confianza"><div><span className="mono-label">UNA FORMACIÓN</span><strong>Para transformar tu forma de trabajar</strong></div><div><span className="metric">100 + 25</span><span>horas cátedra<br />+ autónomas</span></div><div><span className="metric">03</span><span>niveles<br />de avance</span></div><div><span className="metric accent-text">IA</span><span>aplicada a tu<br />realidad</span></div></section>

      <KineticGrid id="ruta" className="section section-dark levels-section" globalColor="red"><div className="section-heading"><div><p className="eyebrow">[ LA RUTA ]</p><h2>Una progresión<br /><span>que se nota.</span></h2></div><p className="section-intro">No vienes a escuchar teoría. Vienes a trabajar sobre tu propia empresa y a salir con herramientas que puedes usar desde el primer día.</p></div><div className="levels-list">{levels.map((level) => <article className={`level-card ${level.accent}`} key={level.number}><div className="level-top"><span className="level-number">{level.number}</span><span className="level-eyebrow">{level.eyebrow}</span><ArrowUpRight size={20} /></div><h3>{level.title}</h3><p className="level-detail"><Clock3 size={14} /> {level.detail}</p><p className="level-copy">{level.copy}</p></article>)}</div><div className="download-row"><span>¿Quieres ver el programa completo?</span><a href={`${basePath}/programa-completo-ia-para-empresarios.pdf`} target="_blank" rel="noreferrer">Descargar programa <MoveUpRight size={16} /></a></div></KineticGrid>

      <section id="diplomado" className="section transformation-section immersive-diploma-section"><div className="diploma-video-panel"><video autoPlay loop muted playsInline poster={`${basePath}/images/hero-bg.jpg`}><source src={`${basePath}/diplomado-ia.mp4`} type="video/mp4" /></video><div className="diploma-video-shade" /><div className="video-corner video-corner-top"><span className="mono-label">VISUAL / 01</span><span className="tech-live"><span className="status-dot" /> IA EN ACCIÓN</span></div><div className="video-corner video-corner-bottom"><div className="video-core-badge"><Hexagon size={24} strokeWidth={1.2} /><span>IA<br /><small>APLICADA</small></span></div><span className="mono-label">EMPRESA · EMPRENDIMIENTO · PROFESIÓN</span></div><div className="video-scanline" /></div><div className="transformation-copy"><p className="eyebrow">[ EL DIPLOMADO ]</p><h2>Aprende herramientas que<br /><em>hacen avanzar tu trabajo.</em></h2><p>La inteligencia artificial puede ayudarte a ahorrar tiempo, ordenar tus procesos, comunicar mejor tus ideas y entregar resultados más profesionales. Aquí aprendes a usarla con criterio en tu empresa, emprendimiento o profesión.</p><div className="benefit-grid"><div className="benefit-card benefit-card-cases" style={{ backgroundImage: `url(${basePath}/images/benefit-cases.jpg)` }}><div className="benefit-card-top"><span className="benefit-index">01 / 03</span><span className="benefit-status"><span className="status-dot" /> APLICADO</span></div><strong>Casos de tu sector</strong><span>Lo que aprendes tiene contexto.</span><ArrowUpRight className="benefit-arrow" size={17} /></div><div className="benefit-card benefit-card-workflow" style={{ backgroundImage: `url(${basePath}/images/benefit-workflow.webp)` }}><div className="benefit-card-top"><span className="benefit-index">02 / 03</span><span className="benefit-status"><span className="status-dot" /> MEDIBLE</span></div><strong>Progreso medible</strong><span>De la idea a la implementación.</span><ArrowUpRight className="benefit-arrow" size={17} /></div><div className="benefit-card benefit-card-wide benefit-card-certification" style={{ backgroundImage: `url(${basePath}/images/benefit-certification.png)` }}><div className="benefit-card-top"><span className="benefit-index">03 / 03</span><span className="benefit-status"><span className="status-dot" /> CERTIFICADO</span></div><strong>Formación con Calidad Certificada</strong><span>ISO 9001:2015, NTC 5555:2011, NTC 5581:2011, NTC 5666:2011.</span><ArrowUpRight className="benefit-arrow" size={17} /></div></div></div></section>

      <section id="dirigido" className="audience-section"><div className="audience-heading"><p className="eyebrow">[ PARA QUIÉN ]</p><h2>Para quienes<br /><span>quieren estar un paso adelante.</span></h2></div><div className="audience-content"><p>Para quienes quieren actualizarse y usar la IA para hacer su trabajo más fácil, rápido y profesional.</p><div className="tag-cloud">{audiences.map((audience, index) => <span key={audience} className={index % 4 === 0 ? 'highlight' : ''}>{audience}</span>)}</div></div></section>

      <KineticGrid id="cupo" className="signup-section" globalColor="red"><div className="signup-panel"><div className="signup-copy"><p className="eyebrow">[ TU SIGUIENTE MOVIMIENTO ]</p><h2>Haz que tu trabajo<br /><em>avance contigo.</em></h2><p>Conversa con nuestro equipo, descubre cómo la IA puede ayudarte en tu contexto y aparta tu cupo para comenzar tu transformación.</p><a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Quiero comenzar mi transformación <ArrowUpRight size={17} /></a></div><div className="invitation-card"><span className="mono-label">ACCESO A LA RUTA · 2026</span><div className="invitation-gif-visual" aria-hidden="true"><img src={`${basePath}/images/invitation-ia-red.gif`} alt="" /></div><strong>Tu empresa.<br /><em>Tu proceso.</em><br />Tu próxima ventaja.</strong><span className="invitation-meta">Cupos limitados · Hasta 20% de descuento</span></div></div></KineticGrid>

      <footer className="site-footer"><div className="footer-brand"><img src={`${basePath}/images/logo-dark-bg.png`} alt="Multicómputo" /><p>Aprendes porque aprendes.</p></div><div className="footer-meta"><span>Multicómputo · Bucaramanga, Santander</span><a href={whatsappUrl} target="_blank" rel="noreferrer">Escríbenos <ArrowUpRight size={15} /></a></div></footer>
      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Escribir por WhatsApp"><MessageCircle size={22} /></a>
    </main>
  )
}
