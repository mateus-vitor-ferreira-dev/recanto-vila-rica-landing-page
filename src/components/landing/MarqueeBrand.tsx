'use client'

import { useEffect, useRef } from 'react'

const items = [
  'Recanto Vila Rica',
  '✦',
  'Festas & Eventos',
  '✦',
  'Lavras, MG',
  '✦',
  'Aniversários',
  '✦',
  'Casamentos',
  '✦',
  'Formaturas',
  '✦',
  'Confraternizações',
  '✦',
]

export default function MarqueeBrand() {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap')
      if (!trackRef.current) return

      const totalWidth = trackRef.current.scrollWidth / 2

      gsap.to(trackRef.current, {
        x: -totalWidth,
        duration: 28,
        ease: 'none',
        repeat: -1,
      })
    }
    init()
  }, [])

  // Duplica os itens para loop perfeito
  const doubled = [...items, ...items]

  return (
    <div className="relative overflow-hidden bg-[#C6A15B] py-4 select-none">
      {/* Fade nas bordas */}
      <div className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #C6A15B, transparent)' }} />
      <div className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #C6A15B, transparent)' }} />

      <div ref={trackRef} className="flex items-center gap-8 whitespace-nowrap w-max">
        {doubled.map((item, i) => (
          <span
            key={i}
            className={
              item === '✦'
                ? 'text-white/40 text-lg'
                : 'text-white font-bold text-sm tracking-widest uppercase'
            }
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
