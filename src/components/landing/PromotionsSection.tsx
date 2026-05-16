'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { Gift, Trophy, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { useScrollAnimation } from '@/lib/useScrollAnimation'

const promotions = [
  {
    icon: Gift,
    name: 'Indique e Ganhe',
    color: '#C6A15B',
    description:
      'Indique um amigo e, se ele fechar conosco, na sua próxima reserva você recebe 10% de desconto automático.',
    validity: 'Válida de março até agosto.',
    highlight: 'Desconto de 10%',
  },
  {
    icon: Trophy,
    name: 'Sorteio VIP',
    color: '#1f4f41',
    description:
      'Ao fazer uma reserva, você entra automaticamente no sorteio de uma reserva gratuita em data determinada.',
    validity: 'Válida de agosto até dezembro.',
    highlight: 'Reserva gratuita',
  },
  {
    icon: Sparkles,
    name: 'Sempre Aqui',
    color: '#C6A15B',
    description:
      'Se você reservar nosso espaço mais de uma vez no ano, receberá 10% de desconto em todas as próximas reservas.',
    validity: 'Válido o ano todo.',
    highlight: 'Fidelidade recompensada',
  },
]

export default function PromotionsSection() {
  const [active, setActive] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const sectionRef = useScrollAnimation<HTMLElement>({ selector: '.promo-header' })
  const lastWheelTime = useRef(0)

  const goTo = useCallback(async (idx: number) => {
    if (isAnimating || idx === active) return
    setIsAnimating(true)
    const { gsap } = await import('gsap')

    if (cardRef.current) {
      const dir = idx > active ? 80 : -80
      await gsap.to(cardRef.current, { opacity: 0, y: dir, duration: 0.3, ease: 'power2.in' })
      setActive(idx)
      await gsap.fromTo(cardRef.current, { opacity: 0, y: -dir }, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' })
    }
    setIsAnimating(false)
  }, [active, isAnimating])

  const prev = () => goTo((active - 1 + promotions.length) % promotions.length)
  const next = () => goTo((active + 1) % promotions.length)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const handleWheel = (e: WheelEvent) => {
      const rect = section.getBoundingClientRect()
      const inView = rect.top < window.innerHeight * 0.8 && rect.bottom > window.innerHeight * 0.2
      if (!inView) return

      const now = Date.now()
      if (now - lastWheelTime.current < 700) return
      lastWheelTime.current = now

      if (e.deltaY > 0) next()
      else prev()
    }

    window.addEventListener('wheel', handleWheel, { passive: true })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [active, isAnimating, next, prev, sectionRef])

  const promo = promotions[active]
  const Icon = promo.icon

  return (
    <section id="promocoes" ref={sectionRef} className="bg-[#F8F4EE] py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="promo-header text-center mb-14">
          <Badge className="mb-5">Promoções exclusivas</Badge>
          <h2 className="text-4xl md:text-5xl font-black text-[#161616] mb-4">
            Reserve mais,{' '}
            <span className="text-[#C6A15B]">economize mais</span>
          </h2>
          <p className="text-[#6F6A63] text-lg max-w-xl mx-auto">
            Role o mouse sobre esta seção ou use as setas para navegar pelas promoções disponíveis.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Card principal */}
          <div
            ref={cardRef}
            className="relative bg-white rounded-[2rem] p-10 md:p-14 shadow-xl shadow-black/5 border border-[#E5DDD0] mb-8"
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
              style={{ backgroundColor: promo.color }}
            >
              <Icon size={28} className="text-white" />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C6A15B]/10 border border-[#C6A15B]/20 text-[#A07C2A] text-xs font-bold mb-4">
              ✦ {promo.highlight}
            </div>

            <h3 className="text-3xl md:text-4xl font-black text-[#161616] mb-4">{promo.name}</h3>
            <p className="text-[#6F6A63] text-lg leading-relaxed mb-6">{promo.description}</p>
            <p className="text-sm text-[#6F6A63] font-medium border-t border-[#E5DDD0] pt-4">
              📅 {promo.validity}
            </p>

            {/* Deco blob */}
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-5 pointer-events-none"
              style={{ background: `radial-gradient(circle, ${promo.color}, transparent)`, filter: 'blur(40px)', transform: 'translate(30%, -30%)' }}
            />
          </div>

          {/* Controles */}
          <div className="flex items-center justify-between">
            <div className="flex gap-3">
              {promotions.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active ? 'w-8 bg-[#C6A15B]' : 'w-2 bg-[#E5DDD0] hover:bg-[#C6A15B]/50'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-[#E5DDD0] bg-white flex items-center justify-center text-[#6F6A63] hover:border-[#C6A15B] hover:text-[#C6A15B] transition-all duration-200"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-[#E5DDD0] bg-white flex items-center justify-center text-[#6F6A63] hover:border-[#C6A15B] hover:text-[#C6A15B] transition-all duration-200"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
