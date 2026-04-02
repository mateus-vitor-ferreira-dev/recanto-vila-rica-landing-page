import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-28 text-center md:pb-28 md:pt-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-yellow-200/20 blur-3xl dark:bg-gold/10" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl"
      >
        <span className="inline-block rounded-full border border-gold/30 bg-gold/10 px-4 py-1 text-sm font-medium text-gold">
          Espaço premium para festas e eventos
        </span>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl"
        >
          Celebre momentos especiais com{" "}
          <span className="text-gold">sofisticação</span>, conforto e
          acolhimento
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-400 md:text-lg"
        >
          O Recanto Vila Rica é o espaço ideal para aniversários,
          confraternizações e celebrações inesquecíveis, com uma atmosfera
          elegante, alegre e preparada para receber seus convidados com estilo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button className="h-12 rounded-full bg-gold px-6 text-black hover:bg-goldLight">
            Solicitar orçamento
          </Button>

          <Button
            variant="outline"
            className="h-12 rounded-full border-zinc-300 px-6 dark:border-zinc-700"
          >
            Conhecer espaço
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
