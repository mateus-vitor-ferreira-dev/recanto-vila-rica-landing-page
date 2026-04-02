import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, Gift, Sparkles, Trophy } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const promotions = [
  {
    id: 1,
    icon: Gift,
    title: "Indique e ganhe",
    description:
      "Indique um amigo e, se ele fechar conosco, na sua próxima reserva você recebe 10% de desconto.",
    validity: "Válida de março até agosto.",
  },
  {
    id: 2,
    icon: Trophy,
    title: "Sorteio VIP",
    description:
      "Ao fazer uma reserva, você participa do sorteio de outra reserva em data determinada.",
    validity: "Válida de agosto até dezembro.",
  },
  {
    id: 3,
    icon: Sparkles,
    title: "Sempre aqui",
    description:
      "Se você alugar o nosso espaço mais de uma vez no ano, receberá 10% de desconto.",
    validity: "Válido o ano todo.",
  },
];

export default function PromotionsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const isThrottledRef = useRef(false);

  const currentPromotion = useMemo(
    () => promotions[currentIndex],
    [currentIndex],
  );

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % promotions.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + promotions.length) % promotions.length,
    );
  };

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const handleWheel = (event: WheelEvent) => {
      const rect = element.getBoundingClientRect();
      const isVisible =
        rect.top < window.innerHeight * 0.8 &&
        rect.bottom > window.innerHeight * 0.2;

      if (!isVisible || isThrottledRef.current) return;

      isThrottledRef.current = true;

      if (event.deltaY > 0) {
        goToNext();
      } else if (event.deltaY < 0) {
        goToPrevious();
      }

      window.setTimeout(() => {
        isThrottledRef.current = false;
      }, 700);
    };

    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const Icon = currentPromotion.icon;

  return (
    <section ref={sectionRef} className="px-6 py-20 md:py-28" id="promotions">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <Badge className="border-gold/30 bg-gold/10 text-gold hover:bg-gold/10">
            Conheça nossas promoções
          </Badge>

          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            Promoções exclusivas para deixar sua reserva ainda melhor
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Role o mouse nesta seção ou use o botão para navegar entre as
            promoções em destaque do Recanto Vila Rica.
          </p>
        </div>

        <div className="mt-14 rounded-[2.5rem] border border-zinc-200/80 p-4 shadow-sm dark:border-zinc-800">
          <div className="grid items-stretch gap-6 lg:grid-cols-[320px_1fr]">
            <Card className="h-full rounded-[2rem] border-zinc-200 bg-white/90 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/80">
              <CardContent className="flex h-full flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
                  Promoção atual
                </p>

                <div className="mt-4 flex items-end gap-2">
                  <span className="text-5xl font-bold text-gold">
                    {currentIndex + 1}
                  </span>
                  <span className="pb-1 text-lg text-zinc-400">
                    / {promotions.length}
                  </span>
                </div>

                <div className="mt-5 flex gap-2">
                  {promotions.map((promotion, index) => (
                    <button
                      key={promotion.id}
                      type="button"
                      aria-label={`Ir para promoção ${index + 1}`}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2.5 rounded-full transition-all ${
                        currentIndex === index
                          ? "w-10 bg-gold"
                          : "w-2.5 bg-zinc-300 dark:bg-zinc-700"
                      }`}
                    />
                  ))}
                </div>

                <div className="mt-auto">
                  <p className="mt-6 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    A navegação muda com a rolagem quando esta seção estiver em
                    foco.
                  </p>

                  <Button
                    onClick={goToNext}
                    className="mt-6 h-12 w-full rounded-full bg-gold text-black hover:bg-goldLight"
                  >
                    Ver próxima promoção
                    <ArrowDown className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="relative min-h-90 md:min-h-105">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPromotion.id}
                  initial={{ opacity: 0, y: 80, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -80, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="h-full"
                >
                  <Card className="h-full rounded-[2rem] border border-gold/20 bg-linear-to-br from-white via-[#fffdf8] to-amber-50 shadow-xl dark:border-zinc-800 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-950">
                    <CardHeader className="p-8 pb-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gold text-black shadow-sm">
                        <Icon className="h-7 w-7" />
                      </div>

                      <CardTitle className="mt-6 text-3xl md:text-4xl">
                        {currentPromotion.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="px-8 pb-8 pt-2">
                      <p className="max-w-2xl text-base leading-8 text-zinc-700 dark:text-zinc-300 md:text-lg">
                        {currentPromotion.description}
                      </p>

                      <div className="mt-8 inline-flex rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-medium text-gold">
                        {currentPromotion.validity}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
