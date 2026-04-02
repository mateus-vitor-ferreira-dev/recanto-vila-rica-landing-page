import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="px-6 pt-28 pb-20 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold leading-tight"
      >
        Celebre momentos especiais com{" "}
        <span className="text-gold">sofisticação</span>
      </motion.h1>

      <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
        O Recanto Vila Rica é o espaço perfeito para transformar sua festa em
        uma experiência inesquecível.
      </p>

      <div className="mt-8 flex gap-4 justify-center">
        <Button className="bg-gold text-black hover:bg-goldLight">
          Solicitar orçamento
        </Button>

        <Button variant="outline">Conhecer espaço</Button>
      </div>
    </section>
  );
}
