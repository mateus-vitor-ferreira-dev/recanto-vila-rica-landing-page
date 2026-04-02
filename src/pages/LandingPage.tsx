import BudgetSection from "../components/sections/BudgetSection";
import CTASection from "../components/sections/CTASection";
import HeroSection from "../components/sections/HeroSection";
import LocationSection from "../components/sections/LocationSection";
import PricingSection from "../components/sections/PricingSection";
import PromotionsSection from "../components/sections/PromotionsSection";
import SpaceSection from "../components/sections/SpaceSection";

export default function LandingPage() {
  return (
    <main className="bg-[#FCFAF5] dark:bg-[#0F0F10] text-zinc-900 dark:text-white">
      <HeroSection />
      <SpaceSection />
      <PricingSection />
      <PromotionsSection />
      <LocationSection />
      <BudgetSection />
      <CTASection />
    </main>
  );
}
