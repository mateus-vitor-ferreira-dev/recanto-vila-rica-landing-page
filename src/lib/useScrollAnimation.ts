'use client'

import { useEffect, useRef } from 'react'
import type { RefObject } from 'react'

type AnimationOptions = {
  stagger?: boolean
  selector?: string
  delay?: number
  fromScale?: boolean
}

export function useScrollAnimation<T extends HTMLElement>(
  options: AnimationOptions = {}
): RefObject<T | null> {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    if (!ref.current) return

    let ctx: { revert: () => void } | undefined

    const init = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        const targets = options.selector
          ? ref.current!.querySelectorAll(options.selector)
          : [ref.current!]

        if (options.fromScale) {
          gsap.fromTo(
            targets,
            { opacity: 0, scale: 0.85, y: 20 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.7,
              ease: 'back.out(1.4)',
              stagger: options.stagger ? 0.1 : 0,
              delay: options.delay ?? 0,
              scrollTrigger: {
                trigger: ref.current,
                start: 'top 85%',
                once: true,
              },
            }
          )
        } else {
          gsap.fromTo(
            targets,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: 'power2.out',
              stagger: options.stagger ? 0.12 : 0,
              delay: options.delay ?? 0,
              clearProps: 'all',
              scrollTrigger: {
                trigger: ref.current,
                start: 'top 85%',
                once: true,
              },
            }
          )
        }
      }, ref)
    }

    init()
    return () => ctx?.revert()
  }, [options.selector, options.stagger, options.delay, options.fromScale])

  return ref
}
