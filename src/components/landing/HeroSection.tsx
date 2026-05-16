'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { ArrowRight, Star } from 'lucide-react'

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const brandRef = useRef<HTMLDivElement>(null)
  const dividerRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const socialRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap')
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.to(logoRef.current, { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.9, ease: 'back.out(1.7)', delay: 0.1 })
        .to(brandRef.current, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.9 }, '-=0.5')
        .to(dividerRef.current, { opacity: 1, scaleX: 1, duration: 0.6, ease: 'power2.inOut' }, '-=0.4')
        .to(headlineRef.current, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8 }, '-=0.3')
        .to(subRef.current, { opacity: 1, y: 0, duration: 0.7 }, '-=0.5')
        .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
        .to(socialRef.current, { opacity: 1, y: 0, duration: 0.5 }, '-=0.3')
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

        {/* Logo animada */}
        <div
          ref={logoRef}
          className="flex justify-center mb-5 opacity-0"
          style={{ scale: '0.7', filter: 'blur(8px)' }}
        >
          <div className="w-20 h-20 md:w-24 md:h-24 relative">
            <Image
              src="/logo-recanto.svg"
              alt="Recanto Vila Rica"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Nome da marca — destaque principal */}
        <div
          ref={brandRef}
          className="mb-4 opacity-0 translate-y-6"
          style={{ filter: 'blur(6px)' }}
        >
          <h1 className="font-black leading-none tracking-tight">
            <span
              className="block text-5xl md:text-7xl lg:text-8xl"
              style={{
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                backgroundImage: 'linear-gradient(135deg, #C6A15B 0%, #E7D3A8 40%, #C6A15B 70%, #A07C2A 100%)',
              }}
            >
              Recanto
            </span>
            <span className="block text-5xl md:text-7xl lg:text-8xl text-white">
              Vila Rica
            </span>
          </h1>
          <p className="text-[#C6A15B]/60 text-xs tracking-[0.35em] uppercase mt-3 font-medium">
            Festas &amp; Eventos · Lavras, MG
          </p>
        </div>

        {/* Divisor dourado */}
        <div
          ref={dividerRef}
          className="flex items-center justify-center gap-3 mb-10 opacity-0"
          style={{ transformOrigin: 'center', transform: 'scaleX(0)' }}
        >
          <div className="h-px w-20 md:w-32 bg-gradient-to-r from-transparent to-[#C6A15B]/60" />
          <span className="text-[#C6A15B] text-base">✦</span>
          <div className="h-px w-20 md:w-32 bg-gradient-to-l from-transparent to-[#C6A15B]/60" />
        </div>

        {/* Subtítulo */}
        <h2
          ref={headlineRef}
          className="text-xl md:text-2xl font-semibold text-white/80 leading-relaxed mb-5 max-w-2xl mx-auto opacity-0 translate-y-6"
          style={{ filter: 'blur(4px)' }}
        >
          Celebre momentos especiais com{' '}
          <span className="text-[#C6A15B]">sofisticação</span> e{' '}
          <span className="text-[#C6A15B]">acolhimento</span>
        </h2>

        <p
          ref={subRef}
          className="text-base text-white/45 max-w-xl mx-auto leading-relaxed mb-10 opacity-0 translate-y-5"
        >
          O espaço ideal para aniversários, casamentos, formaturas e confraternizações.
          Um ambiente pensado para transformar celebrações em memórias inesquecíveis.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 opacity-0 translate-y-5">
          <a
            href="https://wa.me/5535999718824"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#C6A15B] text-white font-bold text-base hover:bg-[#A07C2A] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#C6A15B]/25 hover:-translate-y-0.5"
          >
            Reservar pelo WhatsApp
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#espaco"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/15 text-white/70 text-base font-medium hover:bg-white/8 hover:border-white/30 transition-all duration-300"
          >
            Conhecer o espaço
          </a>
        </div>

        {/* Social proof */}
        <div ref={socialRef} className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-white/35 text-xs md:text-sm opacity-0 translate-y-3">
          <div className="flex items-center gap-1.5">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={11} fill="#C6A15B" className="text-[#C6A15B]" />
              ))}
            </div>
            <span>Avaliações 5 estrelas</span>
          </div>
          <span className="hidden md:block w-px h-4 bg-white/15" />
          <span>📍 Jardim Vila Rica, Lavras</span>
          <span className="hidden md:block w-px h-4 bg-white/15" />
          <span>📞 Atendimento rápido</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25 text-xs animate-bounce">
        <span>Role para ver mais</span>
        <div className="w-px h-6 bg-white/15 rounded-full" />
      </div>
    </section>
  )
}
