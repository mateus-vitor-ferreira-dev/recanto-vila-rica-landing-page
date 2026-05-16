'use client'

import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Espaço', href: '#espaco' },
  { label: 'Planos', href: '#planos' },
  { label: 'Promoções', href: '#promocoes' },
  { label: 'Localização', href: '#localizacao' },
]

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap')
      gsap.fromTo(navRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay: 0.2 })
    }
    init()
  }, [])

  return (
    <header
      ref={navRef}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#F8F4EE]/95 backdrop-blur-md border-b border-[#E5DDD0] shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-black text-lg text-[#161616] tracking-tight">
          Recanto <span className="text-[#C6A15B]">Vila Rica</span>
        </a>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[#6F6A63] hover:text-[#161616] transition-colors duration-200 font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5535999718824"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C6A15B] text-white text-sm font-semibold hover:bg-[#A07C2A] transition-colors duration-200 shadow-sm"
          >
            Reservar agora
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-[#161616]"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#F8F4EE] border-b border-[#E5DDD0] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-[#6F6A63] hover:text-[#161616] py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5535999718824"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#C6A15B] text-white text-sm font-semibold"
          >
            Reservar agora
          </a>
        </div>
      )}
    </header>
  )
}
