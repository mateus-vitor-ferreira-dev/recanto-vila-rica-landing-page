'use client'

import { MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react'

function InstagramIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  )
}
import { Badge } from '@/components/ui/badge'
import { useScrollAnimation } from '@/lib/useScrollAnimation'

const benefits = [
  'Atendimento rápido e humanizado',
  'Verificação de disponibilidade na hora',
  'Alinhamento personalizado do seu evento',
]

export default function CTASection() {
  const sectionRef = useScrollAnimation<HTMLElement>({ selector: '.cta-content', stagger: true })

  return (
    <section ref={sectionRef} className="bg-[#161616] py-20 md:py-28 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C6A15B, transparent)', filter: 'blur(80px)' }} />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #1f4f41, transparent)', filter: 'blur(60px)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="cta-content text-center mb-14">
          <Badge className="mb-5 border-[#C6A15B]/40 bg-[#C6A15B]/10 text-[#C6A15B]">
            Confirme sua reserva
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
            Seu evento merece um{' '}
            <span className="text-[#C6A15B]">atendimento à altura</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto mb-8">
            Fale com a equipe do Recanto Vila Rica para verificar datas, alinhar detalhes e garantir uma experiência memorável.
          </p>
          <ul className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            {benefits.map((b) => (
              <li key={b} className="flex items-center gap-2 text-white/60 text-sm">
                <CheckCircle2 size={16} className="text-[#C6A15B] flex-shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Cards */}
        <div className="cta-content grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {/* WhatsApp — principal */}
          <a
            href="https://wa.me/5535999718824"
            target="_blank"
            rel="noopener noreferrer"
            className="group md:col-span-1 relative bg-[#C6A15B] rounded-[2rem] p-8 flex flex-col gap-4 hover:bg-[#A07C2A] transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-[#C6A15B]/20"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
              <MessageCircle size={22} className="text-white" />
            </div>
            <div>
              <p className="text-white font-black text-xl mb-1">Falar no WhatsApp</p>
              <p className="text-white/70 text-sm leading-relaxed">
                Atendimento rápido para consultar disponibilidade e avançar com sua reserva.
              </p>
            </div>
            <p className="text-white/60 text-sm font-medium mt-auto">(35) 99971-8824 →</p>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/recanto.vilarica"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/5 border border-white/10 rounded-[2rem] p-8 flex flex-col gap-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
              <InstagramIcon size={22} />
            </div>
            <div>
              <p className="text-white font-black text-xl mb-1">Instagram</p>
              <p className="text-white/50 text-sm leading-relaxed">
                Veja fotos, novidades e inspirações do espaço.
              </p>
            </div>
            <p className="text-white/40 text-sm font-medium mt-auto">@recanto.vilarica →</p>
          </a>

          {/* Orçamento */}
          <a
            href="#planos"
            className="group bg-white/5 border border-white/10 rounded-[2rem] p-8 flex flex-col gap-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
              <Sparkles size={22} className="text-white" />
            </div>
            <div>
              <p className="text-white font-black text-xl mb-1">Ver planos</p>
              <p className="text-white/50 text-sm leading-relaxed">
                Revise os planos disponíveis e escolha o ideal para seu evento.
              </p>
            </div>
            <p className="text-white/40 text-sm font-medium mt-auto">Ver detalhes →</p>
          </a>
        </div>
      </div>
    </section>
  )
}
