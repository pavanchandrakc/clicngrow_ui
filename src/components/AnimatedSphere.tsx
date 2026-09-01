import React, { useEffect, useRef } from 'react'

export const AnimatedSphere: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600)
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = canvas.parentElement?.clientWidth || 600
      height = canvas.height = canvas.parentElement?.clientHeight || 600
    }

    window.addEventListener('resize', handleResize)

    // Particle nodes on sphere
    const numDots = 130
    const dots: Array<{ x: number; y: number; z: number; radius: number }> = []
    const radius = Math.min(width, height) * 0.35

    for (let i = 0; i < numDots; i++) {
      const phi = Math.acos(-1 + (2 * i) / numDots)
      const theta = Math.sqrt(numDots * Math.PI) * phi
      dots.push({
        x: radius * Math.cos(theta) * Math.sin(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(phi),
        radius: Math.random() * 1.5 + 1,
      })
    }

    let angleX = 0.002
    let angleY = 0.004

    const render = () => {
      ctx.clearRect(0, 0, width, height)
      const cx = width / 2
      const cy = height / 2

      // Draw wireframe rings
      ctx.strokeStyle = 'rgba(37, 99, 235, 0.12)'
      ctx.lineWidth = 1
      for (let r = 0.2; r <= 1; r += 0.2) {
        ctx.beginPath()
        ctx.arc(cx, cy, radius * r, 0, Math.PI * 2)
        ctx.stroke()
      }

      // Rotate dots
      const cosX = Math.cos(angleX)
      const sinX = Math.sin(angleX)
      const cosY = Math.cos(angleY)
      const sinY = Math.sin(angleY)

      const projectedDots: Array<{ x: number; y: number; scale: number; alpha: number }> = []

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i]

        let x1 = dot.x * cosY - dot.z * sinY
        let z1 = dot.z * cosY + dot.x * sinY

        let y1 = dot.y * cosX - z1 * sinX
        let z2 = z1 * cosX + dot.y * sinX

        dot.x = x1
        dot.y = y1
        dot.z = z2

        const perspective = 600 / (600 + z2)
        const projX = cx + x1 * perspective
        const projY = cy + y1 * perspective
        const alpha = Math.max(0.1, (z2 + radius) / (2 * radius))

        projectedDots.push({
          x: projX,
          y: projY,
          scale: perspective * dot.radius,
          alpha,
        })
      }

      // Draw connecting lines
      ctx.lineWidth = 0.8
      for (let i = 0; i < projectedDots.length; i++) {
        for (let j = i + 1; j < projectedDots.length; j++) {
          const dx = projectedDots[i].x - projectedDots[j].x
          const dy = projectedDots[i].y - projectedDots[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 65) {
            const lineAlpha = (1 - dist / 65) * 0.25 * projectedDots[i].alpha
            ctx.strokeStyle = `rgba(37, 99, 235, ${lineAlpha})`
            ctx.beginPath()
            ctx.moveTo(projectedDots[i].x, projectedDots[i].y)
            ctx.lineTo(projectedDots[j].x, projectedDots[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw dots
      for (let i = 0; i < projectedDots.length; i++) {
        const p = projectedDots[i]
        ctx.fillStyle = `rgba(37, 99, 235, ${p.alpha * 0.9})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, Math.max(1, p.scale), 0, Math.PI * 2)
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full pointer-events-none opacity-60"
    />
  )
}
