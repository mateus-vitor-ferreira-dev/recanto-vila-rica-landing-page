import { MapPin, Phone, MessageCircle } from 'lucide-react'

function InstagramIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0F0F10] border-t border-white/5 py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Marca */}
          <div>
            <p className="font-black text-xl text-white mb-3">
              Recanto <span className="text-[#C6A15B]">Vila Rica</span>
            </p>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Um espaço pensado para celebrar momentos especiais com conforto, acolhimento e uma experiência memorável.
            </p>
          </div>

          {/* Contato */}
          <div>
            <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-4">Contato</p>
            <div className="space-y-3">
              <a href="https://wa.me/5535999718824" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/50 hover:text-[#C6A15B] text-sm transition-colors duration-200">
                <MessageCircle size={15} />
                (35) 99971-8824
              </a>
              <a href="tel:+5535999718824"
                className="flex items-center gap-3 text-white/50 hover:text-white text-sm transition-colors duration-200">
                <Phone size={15} />
                (35) 99971-8824
              </a>
              <a href="https://instagram.com/recanto.vilarica" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/50 hover:text-[#C6A15B] text-sm transition-colors duration-200">
                <InstagramIcon size={15} />
                @recanto.vilarica
              </a>
            </div>
          </div>

          {/* Localização */}
          <div>
            <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-4">Localização</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Rua+Bernardino+Antônio+Tomás,+21,+Jardim+Vila+Rica,+Lavras,+MG"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-white/50 hover:text-white text-sm transition-colors duration-200"
            >
              <MapPin size={15} className="flex-shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                Rua Bernardino Antônio Tomás, 21<br />
                Jardim Vila Rica<br />
                Lavras – MG
              </span>
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/20 text-xs">
          <p>© {year} Recanto Vila Rica. Todos os direitos reservados.</p>
          <a href="https://wa.me/5535999718824" target="_blank" rel="noopener noreferrer"
            className="hover:text-[#C6A15B] transition-colors duration-200">
            Reservas pelo WhatsApp
          </a>
        </div>
      </div>
    </footer>
  )
}
