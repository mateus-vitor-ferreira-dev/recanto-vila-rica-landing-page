'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { useScrollAnimation } from '@/lib/useScrollAnimation'

const spaces = [
  { id: 'salao', label: 'Salão principal', src: '/assets/salao.jpeg', description: 'Ambiente amplo e versátil, ideal para festas, confraternizações e eventos especiais com toda a estrutura necessária.' },
  { id: 'espaco', label: 'Espaço de festa', src: '/assets/espaco-de-festa.jpeg', description: 'Área preparada para decoração personalizada e momentos inesquecíveis com seus convidados.' },
  { id: 'kids', label: 'Área kids', src: '/assets/area-kids.jpeg', description: 'Espaço dedicado para as crianças se divertirem com segurança e monitor incluso.' },
  { id: 'piscina', label: 'Piscina', src: '/assets/piscina.jpeg', description: 'Perfeita para dias quentes e eventos mais descontraídos, agregando ainda mais valor à celebração.' },
  { id: 'entrada', label: 'Entrada', src: '/assets/entrada.jpeg', description: 'Um acesso organizado e acolhedor para receber seus convidados com conforto desde o primeiro momento.' },
]

export default function SpacesSection() {
  const [active, setActive] = useState(0)
  const [animating, setAnimating] = useState(false)
  const imgRef = useRef<HTMLDivElement>(null)
  const sectionRef = useScrollAnimation<HTMLElement>({ selector: '.space-header', stagger: false })

  const goTo = async (idx: number) => {
    if (animating || idx === active) return
    setAnimating(true)

    const { gsap } = await import('gsap')
    if (imgRef.current) {
      await gsap.to(imgRef.current, { opacity: 0, scale: 1.03, duration: 0.25, ease: 'power2.in' })
      setActive(idx)
      await gsap.fromTo(imgRef.current, { opacity: 0, scale: 0.98 }, { opacity: 1, scale: 1, duration: 0.35, ease: 'power2.out' })
    }
    setAnimating(false)
  }

  const prev = () => goTo((active - 1 + spaces.length) % spaces.length)
  const next = () => goTo((active + 1) % spaces.length)

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      gsap.fromTo('.space-thumb',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', stagger: 0.08,
          scrollTrigger: { trigger: '.space-thumbs', start: 'top 85%', once: true } }
      )
    }
    init()
  }, [])

  return (
    <section id="espaco" ref={sectionRef} className="bg-[#F8F4EE] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">

        <div className="space-header text-center mb-14">
          <Badge className="mb-5">Conheça nosso espaço</Badge>
          <h2 className="text-4xl md:text-5xl font-black text-[#161616] mb-4 leading-tight">
            Um ambiente pensado para{' '}
            <span className="text-[#C6A15B]">celebrar</span>
          </h2>
          <p className="text-[#6F6A63] text-lg max-w-2xl mx-auto leading-relaxed">
            Estrutura acolhedora, sofisticada e preparada para receber momentos especiais com segurança, elegância e muita alegria.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.4fr_0.6fr] gap-6 items-start">
          {/* Imagem principal */}
          <div className="relative">
            <div
              ref={imgRef}
              className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-[#E5DDD0] shadow-xl"
            >
              <Image
                src={spaces[active].src}
                alt={spaces[active].label}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              {/* Overlay info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white font-bold text-lg mb-1">{spaces[active].label}</p>
                <p className="text-white/70 text-sm leading-relaxed">{spaces[active].description}</p>
              </div>
            </div>

            {/* Prev/Next */}
            <div className="flex gap-2 mt-4 justify-end">
              <button onClick={prev} className="w-10 h-10 rounded-full border border-[#E5DDD0] bg-white flex items-center justify-center text-[#6F6A63] hover:border-[#C6A15B] hover:text-[#C6A15B] transition-all duration-200">
                <ChevronLeft size={18} />
              </button>
              <button onClick={next} className="w-10 h-10 rounded-full border border-[#E5DDD0] bg-white flex items-center justify-center text-[#6F6A63] hover:border-[#C6A15B] hover:text-[#C6A15B] transition-all duration-200">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="space-thumbs flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {spaces.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goTo(i)}
                className={`space-thumb group relative flex-shrink-0 w-24 h-20 lg:w-full lg:h-24 rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                  i === active ? 'border-[#C6A15B] shadow-md' : 'border-transparent opacity-60 hover:opacity-90 hover:border-[#E7D3A8]'
                }`}
              >
                <Image src={s.src} alt={s.label} fill className="object-cover" sizes="200px" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <span className="absolute bottom-1.5 left-0 right-0 text-center text-white text-[10px] font-semibold px-1 drop-shadow">
                  {s.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
