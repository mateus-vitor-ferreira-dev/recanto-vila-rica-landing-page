'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight, Star } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const socialRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap')

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo(badgeRef.current, { opacity: 0, y: 20, filter: 'blur(8px)' }, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.7 })
        .fromTo(headlineRef.current, { opacity: 0, y: 30, filter: 'blur(6px)' }, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8 }, '-=0.4')
        .fromTo(subRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.5')
        .fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
        .fromTo(socialRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 }, '-=0.2')
    }
    init()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#161616]"
    >
      {/* Background textura */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(to right, #C6A15B 1px, transparent 1px), linear-gradient(to bottom, #C6A15B 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Blobs radiais */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C6A15B 0%, transparent 70%)', filter: 'blur(80px)' }}
      />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #1f4f41 0%, transparent 70%)', filter: 'blur(60px)' }}
      />

      {/* Gradient overlay bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#F8F4EE] to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-28 pb-20 text-center">
        <div ref={badgeRef} className="mb-8">
          <Badge className="text-[#C6A15B] border-[#C6A15B]/40 bg-[#C6A15B]/10">
            ✦ Recanto Vila Rica · Festas &amp; Eventos · Lavras, MG
          </Badge>
        </div>

        <h1
          ref={headlineRef}
          className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight mb-7"
        >
          Celebre momentos{' '}
          <span
            className="relative inline-block"
            style={{ WebkitTextFillColor: 'transparent', backgroundClip: 'text', backgroundImage: 'linear-gradient(135deg, #C6A15B 0%, #E7D3A8 50%, #C6A15B 100%)' }}
          >
            especiais
          </span>
          <br />
          com sofisticação e{' '}
          <span className="text-[#C6A15B]">acolhimento</span>
        </h1>

        <p
          ref={subRef}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          O espaço ideal para aniversários, casamentos, formaturas e confraternizações.
          Um ambiente pensado para transformar celebrações em memórias inesquecíveis.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="https://wa.me/5535999718824"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#C6A15B] text-white font-bold text-base hover:bg-[#A07C2A] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#C6A15B]/20 hover:-translate-y-0.5"
          >
            Reservar pelo WhatsApp
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#espaco"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white/80 text-base font-medium hover:bg-white/10 transition-all duration-300"
          >
            Conhecer o espaço
          </a>
        </div>

        {/* Social proof */}
        <div ref={socialRef} className="flex items-center justify-center gap-6 text-white/40 text-sm">
          <div className="flex items-center gap-1.5">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} fill="#C6A15B" className="text-[#C6A15B]" />
              ))}
            </div>
            <span>Avaliações 5 estrelas</span>
          </div>
          <span className="w-px h-4 bg-white/20" />
          <span>📍 Jardim Vila Rica, Lavras</span>
          <span className="w-px h-4 bg-white/20" />
          <span>📞 Atendimento rápido</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs animate-bounce">
        <span>Role para ver mais</span>
        <div className="w-px h-6 bg-white/20 rounded-full" />
      </div>
    </section>
  )
}
