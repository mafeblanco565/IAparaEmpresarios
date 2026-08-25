'use client'

import { ReactNode, useEffect, useRef } from 'react'

type KineticGridProps = {
  children: ReactNode
  className?: string
  id?: string
  globalColor?: 'red' | 'monochrome'
}

type Point = { x: number; y: number }
type Ripple = { x: number; y: number; born: number; radius: number; opacity: number }

const CELL_SIZE = 62
const INFLUENCE_RADIUS = 240
const MAX_WARP = 22
const DOT_SPACING = 28

export default function KineticGrid({ children, className = '', id, globalColor = 'red' }: KineticGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const section = sectionRef.current
    if (!canvas || !section) return
    const context = canvas.getContext('2d')
    if (!context) return

    let frameId = 0
    let width = 0
    let height = 0
    let pixelRatio = 1
    let mouse: Point = { x: -9999, y: -9999 }
    let targetMouse: Point = { x: -9999, y: -9999 }
    const ripples: Ripple[] = []
    const active = globalColor === 'monochrome'
      ? { r: 255, g: 255, b: 255 }
      : { r: 230, g: 57, b: 70 }

    const resize = () => {
      const bounds = section.getBoundingClientRect()
      width = Math.max(1, bounds.width)
      height = Math.max(1, bounds.height)
      pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5)
      canvas.width = Math.floor(width * pixelRatio)
      canvas.height = Math.floor(height * pixelRatio)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
    }

    const getWarpedPoint = (gx: number, gy: number, col: number, row: number, cols: number, rows: number) => {
      const edge = Math.min(col / 1.5, (cols - 1 - col) / 1.5, row / 1.5, (rows - 1 - row) / 1.5, 1)
      const dx = gx - mouse.x
      const dy = gy - mouse.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      const proximity = Math.max(0, 1 - distance / INFLUENCE_RADIUS) * edge * edge
      let rippleX = 0
      let rippleY = 0
      ripples.forEach((ripple) => {
        const rdx = gx - ripple.x
        const rdy = gy - ripple.y
        const rippleDistance = Math.sqrt(rdx * rdx + rdy * rdy)
        const difference = rippleDistance - ripple.radius
        if (Math.abs(difference) < 48) {
          const strength = (1 - Math.abs(difference) / 48) * ripple.opacity * 15 * edge
          const angle = Math.atan2(rdy, rdx)
          const direction = difference < 0 ? -1 : 1
          rippleX += Math.cos(angle) * strength * direction * -1
          rippleY += Math.sin(angle) * strength * direction * -1
        }
      })
      if (distance > 0 && distance < INFLUENCE_RADIUS && edge > 0) {
        const falloff = (1 - distance / INFLUENCE_RADIUS) ** 2
        const warp = falloff * MAX_WARP * edge
        const angle = Math.atan2(dy, dx)
        return { x: gx - Math.cos(angle) * warp + rippleX, y: gy - Math.sin(angle) * warp + rippleY, proximity }
      }
      return { x: gx + rippleX, y: gy + rippleY, proximity }
    }

    const draw = (now: number) => {
      mouse.x += (targetMouse.x - mouse.x) * 0.08
      mouse.y += (targetMouse.y - mouse.y) * 0.08
      context.clearRect(0, 0, width, height)
      context.fillStyle = globalColor === 'monochrome' ? '#08090b' : '#0d0b0e'
      context.fillRect(0, 0, width, height)

      context.fillStyle = globalColor === 'monochrome' ? 'rgba(255,255,255,.05)' : 'rgba(255,110,120,.09)'
      for (let x = DOT_SPACING / 2; x < width; x += DOT_SPACING) {
        for (let y = DOT_SPACING / 2; y < height; y += DOT_SPACING) {
          context.beginPath()
          context.arc(x, y, .7, 0, Math.PI * 2)
          context.fill()
        }
      }

      ripples.forEach((ripple, index) => {
        const age = (now - ripple.born) / 1000
        ripple.radius = age * 360
        ripple.opacity = Math.max(0, 1 - age * 1.25)
        if (ripple.opacity <= 0) ripples.splice(index, 1)
      })

      const cols = Math.max(3, Math.ceil(width / CELL_SIZE) + 1)
      const rows = Math.max(3, Math.ceil(height / CELL_SIZE) + 1)
      const cellWidth = width / (cols - 1)
      const cellHeight = height / (rows - 1)
      const points: Array<Array<Point & { proximity: number }>> = []
      for (let row = 0; row < rows; row += 1) {
        points[row] = []
        for (let col = 0; col < cols; col += 1) {
          points[row][col] = getWarpedPoint(col * cellWidth, row * cellHeight, col, row, cols, rows)
        }
      }

      const drawLine = (a: Point & { proximity: number }, b: Point & { proximity: number }) => {
        const power = Math.max(a.proximity, b.proximity)
        context.beginPath()
        context.moveTo(a.x, a.y)
        context.lineTo(b.x, b.y)
        context.strokeStyle = `rgba(${active.r},${active.g},${active.b},${(0.1 + power * 0.72).toFixed(3)})`
        context.lineWidth = 0.7 + power * 1.1
        context.stroke()
      }

      context.lineCap = 'round'
      for (let row = 0; row < rows; row += 1) {
        for (let col = 0; col < cols - 1; col += 1) drawLine(points[row][col], points[row][col + 1])
      }
      for (let col = 0; col < cols; col += 1) {
        for (let row = 0; row < rows - 1; row += 1) drawLine(points[row][col], points[row + 1][col])
      }

      for (let row = 0; row < rows; row += 1) {
        for (let col = 0; col < cols; col += 1) {
          const point = points[row][col]
          const radius = 1.1 + point.proximity * 2.2
          context.beginPath()
          context.arc(point.x, point.y, radius, 0, Math.PI * 2)
          context.fillStyle = `rgba(${active.r},${active.g},${active.b},${(0.22 + point.proximity * .7).toFixed(3)})`
          context.fill()
        }
      }

      ripples.forEach((ripple) => {
        context.beginPath()
        context.arc(ripple.x, ripple.y, Math.max(0, ripple.radius), 0, Math.PI * 2)
        context.strokeStyle = `rgba(${active.r},${active.g},${active.b},${(ripple.opacity * .34).toFixed(3)})`
        context.lineWidth = 1.4
        context.stroke()
      })
      frameId = window.requestAnimationFrame(draw)
    }

    const pointerMove = (event: PointerEvent) => {
      const bounds = section.getBoundingClientRect()
      targetMouse = { x: event.clientX - bounds.left, y: event.clientY - bounds.top }
    }
    const pointerLeave = () => { targetMouse = { x: -9999, y: -9999 } }
    const pointerDown = (event: PointerEvent) => {
      const bounds = section.getBoundingClientRect()
      ripples.push({ x: event.clientX - bounds.left, y: event.clientY - bounds.top, born: performance.now(), radius: 0, opacity: 1 })
    }

    resize()
    window.addEventListener('resize', resize)
    section.addEventListener('pointermove', pointerMove)
    section.addEventListener('pointerleave', pointerLeave)
    section.addEventListener('pointerdown', pointerDown)
    frameId = window.requestAnimationFrame(draw)
    return () => {
      window.removeEventListener('resize', resize)
      section.removeEventListener('pointermove', pointerMove)
      section.removeEventListener('pointerleave', pointerLeave)
      section.removeEventListener('pointerdown', pointerDown)
      window.cancelAnimationFrame(frameId)
    }
  }, [globalColor])

  return (
    <section ref={sectionRef} id={id} className={`kinetic-grid-section ${className}`}>
      <canvas ref={canvasRef} className="kinetic-grid-canvas" aria-hidden="true" />
      <div className="kinetic-grid-content">{children}</div>
    </section>
  )
}
