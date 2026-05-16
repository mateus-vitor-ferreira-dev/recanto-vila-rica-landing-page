'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
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
  const logoRef = useRef<HTMLAnchorElement>(null)
  const linksRef = useRef<HTMLDivElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap')

      // Navbar desliza de cima
      gsap.fromTo(
        navRef.current,
        { opacity: 0, y: -24 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.1 }
      )

      // Logo aparece com scale + fade
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.75, filter: 'blur(6px)' },
        { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.9, ease: 'back.out(1.7)', delay: 0.4 }
      )

      // Links entram em stagger
      if (linksRef.current) {
        gsap.fromTo(
          linksRef.current.children,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.08, delay: 0.6 }
        )
      }
    }
    init()
  }, [])

  return (
    <header
      ref={navRef}
      style={{ opacity: 0 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#F8F4EE]/96 backdrop-blur-md border-b border-[#E5DDD0] shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-[68px] flex items-center justify-between">

        {/* Logo */}
        <a ref={logoRef} href="#" className="flex items-center gap-2.5 group" style={{ opacity: 0 }}>
          <div className="w-9 h-9 relative flex-shrink-0">
            <Image
              src="/logo-recanto.svg"
              alt="Recanto Vila Rica"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className={cn(
            'font-black text-base tracking-tight transition-colors duration-300 leading-tight',
            scrolled ? 'text-[#161616]' : 'text-white'
          )}>
            Recanto{' '}
            <span className="text-[#C6A15B]">Vila Rica</span>
          </span>
        </a>

        {/* Desktop links */}
        <div ref={linksRef} className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                'text-sm font-medium transition-colors duration-300',
                scrolled
                  ? 'text-[#6F6A63] hover:text-[#161616]'
                  : 'text-white/70 hover:text-white'
              )}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5535999718824"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C6A15B] text-white text-sm font-semibold hover:bg-[#A07C2A] transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-[#C6A15B]/20"
          >
            Reservar agora
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className={cn(
            'md:hidden p-2 transition-colors duration-300',
            scrolled ? 'text-[#161616]' : 'text-white'
          )}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#F8F4EE] border-b border-[#E5DDD0] px-6 py-5 flex flex-col gap-4">
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
