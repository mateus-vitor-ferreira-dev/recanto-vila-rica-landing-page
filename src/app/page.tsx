import Navbar from '@/components/landing/Navbar'
import HeroSection from '@/components/landing/HeroSection'
import MarqueeBrand from '@/components/landing/MarqueeBrand'
import SpacesSection from '@/components/landing/SpacesSection'
import PricingSection from '@/components/landing/PricingSection'
import PromotionsSection from '@/components/landing/PromotionsSection'
import LocationSection from '@/components/landing/LocationSection'
import CTASection from '@/components/landing/CTASection'
import Footer from '@/components/landing/Footer'
import WhatsAppFloat from '@/components/landing/WhatsAppFloat'

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeBrand />
        <SpacesSection />
        <PricingSection />
        <PromotionsSection />
        <LocationSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
