'use client'

import { MapPin, Navigation, ExternalLink } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { useScrollAnimation } from '@/lib/useScrollAnimation'

const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Rua+Bernardino+Antônio+Tomás,+21,+Jardim+Vila+Rica,+Lavras,+MG'
const embedUrl = 'https://www.google.com/maps?q=Rua%20Bernardino%20Antônio%20Tomás,%2021,%20Jardim%20Vila%20Rica,%20Lavras,%20MG&z=16&output=embed'

export default function LocationSection() {
  const sectionRef = useScrollAnimation<HTMLElement>({ selector: '.loc-content', stagger: true })

  return (
    <section id="localizacao" ref={sectionRef} className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="loc-content text-center mb-14">
          <Badge className="mb-5">Localização</Badge>
          <h2 className="text-4xl md:text-5xl font-black text-[#161616] mb-4">
            Fácil de encontrar,{' '}
            <span className="text-[#C6A15B]">fácil de chegar</span>
          </h2>
          <p className="text-[#6F6A63] text-lg max-w-xl mx-auto">
            Localização prática para facilitar a chegada dos seus convidados desde o primeiro momento.
          </p>
        </div>

        <div className="loc-content grid lg:grid-cols-[1fr_0.85fr] gap-8 items-start">
          {/* Mapa */}
          <div className="rounded-[2rem] overflow-hidden border border-[#E5DDD0] shadow-lg aspect-[4/3] lg:aspect-auto lg:h-96">
            <iframe
              src={embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Recanto Vila Rica"
            />
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div className="bg-[#F8F4EE] rounded-[1.5rem] p-7 border border-[#E5DDD0]">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#C6A15B]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-[#C6A15B]" />
                </div>
                <div>
                  <p className="font-bold text-[#161616] mb-2">Endereço completo</p>
                  <p className="text-[#6F6A63] leading-relaxed text-sm">
                    Rua Bernardino Antônio Tomás, nº 21<br />
                    Jardim Vila Rica<br />
                    Lavras – MG<br />
                    CEP: 37.203-775
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#F8F4EE] rounded-[1.5rem] p-7 border border-[#E5DDD0]">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#C6A15B]/10 flex items-center justify-center flex-shrink-0">
                  <Navigation size={20} className="text-[#C6A15B]" />
                </div>
                <div>
                  <p className="font-bold text-[#161616] mb-1">Acesso facilitado</p>
                  <p className="text-[#6F6A63] text-sm leading-relaxed">
                    Local fácil de encontrar e ideal para orientar seus convidados com praticidade. Uma localização pensada para tornar a experiência mais confortável.
                  </p>
                </div>
              </div>
            </div>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-[#161616] text-white font-semibold text-sm hover:bg-[#2A2A2A] transition-all duration-200 shadow-md"
            >
              Abrir no Google Maps
              <ExternalLink size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
