import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Recanto Vila Rica — Espaço para Eventos em Lavras, MG',
  description:
    'O espaço ideal para aniversários, casamentos, formaturas e confraternizações. Conforto, sofisticação e acolhimento em Lavras, MG.',
  openGraph: {
    title: 'Recanto Vila Rica',
    description: 'Celebre momentos especiais com sofisticação e acolhimento.',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
