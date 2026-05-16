'use client'

import { useEffect } from 'react'
import { Check, ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { useScrollAnimation } from '@/lib/useScrollAnimation'

const plans = [
  {
    name: 'Promocional',
    days: 'Seg – Qui',
    tagline: 'Aproveite nossa promoção',
    price: 649.99,
    highlight: true,
    badge: 'Mais popular',
    features: [
      '5 horas de festa',
      'Área kids com monitor incluso',
      'Salão principal',
      'Espaço de decoração',
    ],
  },
  {
    name: 'Essencial',
    days: 'Sex – Dom e feriados',
    tagline: 'Garanta sua data',
    price: 849.99,
    highlight: false,
    features: [
      '4 horas de festa',
      'Área kids com monitor incluso',
      'Salão principal',
      'Espaço de decoração',
    ],
  },
  {
    name: 'Completo',
    days: 'Sex – Dom e feriados',
    tagline: 'A experiência mais completa',
    price: 999.99,
    highlight: false,
    features: [
      '4 horas de festa',
      'Área kids com monitor incluso',
      'Piscina inclusa',
      'Salão principal',
      'Extensão área kids: +R$30/h',
    ],
  },
]

export default function PricingSection() {
  const sectionRef = useScrollAnimation<HTMLElement>({ selector: '.pricing-header' })

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      gsap.fromTo('.pricing-card',
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.7,
          ease: 'back.out(1.2)',
          stagger: 0.12,
          scrollTrigger: { trigger: '.pricing-grid', start: 'top 85%', once: true },
        }
      )
    }
    init()
  }, [])

  return (
    <section id="planos" ref={sectionRef} className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="pricing-header text-center mb-14">
          <Badge className="mb-5">Planos e valores</Badge>
          <h2 className="text-4xl md:text-5xl font-black text-[#161616] mb-4">
            Escolha o plano{' '}
            <span className="text-[#C6A15B]">ideal</span>
          </h2>
          <p className="text-[#6F6A63] text-lg max-w-xl mx-auto">
            Opções para todos os dias da semana. Escolha o que melhor se encaixa na data do seu evento.
          </p>
        </div>

        <div className="pricing-grid grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card relative flex flex-col rounded-[2rem] p-8 transition-all duration-300 ${
                plan.highlight
                  ? 'bg-[#161616] text-white shadow-2xl shadow-black/20 ring-1 ring-[#C6A15B]/30'
                  : 'bg-[#F8F4EE] text-[#161616] hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1'
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#C6A15B] text-white text-xs font-bold tracking-wide">
                  {plan.badge}
                </span>
              )}

              <div className="mb-6">
                <p className={`text-xs font-semibold tracking-widest uppercase mb-1 ${plan.highlight ? 'text-[#C6A15B]' : 'text-[#C6A15B]'}`}>
                  {plan.days}
                </p>
                <h3 className="text-2xl font-black mb-1">{plan.name}</h3>
                <p className={`text-sm ${plan.highlight ? 'text-white/50' : 'text-[#6F6A63]'}`}>{plan.tagline}</p>
              </div>

              <div className="mb-8">
                <span className={`text-xs font-medium ${plan.highlight ? 'text-white/40' : 'text-[#6F6A63]'}`}>a partir de</span>
                <div className="flex items-end gap-1.5 mt-1">
                  <span className={`text-sm font-semibold ${plan.highlight ? 'text-white/60' : 'text-[#6F6A63]'}`}>R$</span>
                  <span className="text-5xl font-black leading-none">
                    {plan.price.toFixed(2).replace('.', ',')}
                  </span>
                </div>
              </div>

              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5 ${
                      plan.highlight ? 'bg-[#C6A15B]/20 text-[#C6A15B]' : 'bg-[#C6A15B]/10 text-[#C6A15B]'
                    }`}>
                      <Check size={11} strokeWidth={3} />
                    </span>
                    <span className={plan.highlight ? 'text-white/80' : 'text-[#2A2A2A]'}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/5535999718824"
                target="_blank"
                rel="noopener noreferrer"
                className={`group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 ${
                  plan.highlight
                    ? 'bg-[#C6A15B] text-white hover:bg-[#A07C2A]'
                    : 'bg-[#161616] text-white hover:bg-[#2A2A2A]'
                }`}
              >
                Reservar este plano
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-[#6F6A63] mt-8">
          Dúvidas sobre os planos?{' '}
          <a href="https://wa.me/5535999718824" target="_blank" rel="noopener noreferrer" className="text-[#C6A15B] font-semibold hover:underline">
            Fale conosco no WhatsApp
          </a>
        </p>
      </div>
    </section>
  )
}
