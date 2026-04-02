import instagram from "@/assets/icons/instagram.svg";
import whatsapp from "@/assets/icons/whatsapp.svg";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const WHATSAPP_URL = "https://wa.me/5500000000000";
const INSTAGRAM_URL = "https://instagram.com/recantovilarica";

const benefits = [
  "Atendimento rápido e humanizado",
  "Suporte para verificar disponibilidade",
  "Alinhamento personalizado do evento",
];

export default function CTASection() {
  return (
    <section className="px-6 py-20 md:py-28" id="reservation">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
        >
          <Card className="overflow-hidden rounded-[2.5rem] border border-zinc-200 bg-white shadow-xl dark:border-zinc-800 dark:bg-zinc-950">
            <CardContent className="relative p-8 md:p-10 lg:p-12">
              <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-gold/10 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-gold/10 blur-3xl" />

              <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <Badge className="border-gold/30 bg-gold/10 text-gold hover:bg-gold/10">
                    Confirme sua reserva
                  </Badge>

                  <h2 className="mt-5 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-zinc-950 dark:text-white md:text-5xl">
                    Seu evento merece um atendimento à altura da celebração
                  </h2>

                  <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-400">
                    Fale com a equipe do Recanto Vila Rica para verificar datas,
                    alinhar detalhes do evento e garantir um atendimento rápido,
                    acolhedor e personalizado.
                  </p>

                  <div className="mt-8 space-y-3">
                    {benefits.map((benefit) => (
                      <div
                        key={benefit}
                        className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300"
                      >
                        <CheckCircle2 className="h-5 w-5 text-gold" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="group block rounded-[2rem] bg-gold p-6 text-black shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-goldLight"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-black/10">
                          <img src={whatsapp} className="h-7 w-7" />
                        </div>

                        <div>
                          <p className="text-xl font-semibold">
                            Falar no WhatsApp
                          </p>
                          <p className="mt-2 text-sm leading-7 text-black/75">
                            Atendimento mais rápido para consultar
                            disponibilidade e avançar com a sua reserva.
                          </p>
                        </div>
                      </div>

                      <ArrowRight className="mt-1 h-5 w-5 transition group-hover:translate-x-1" />
                    </div>
                  </a>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="group rounded-[1.75rem] border border-zinc-200 bg-zinc-50 p-5 transition hover:border-gold/40 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm dark:bg-zinc-800">
                        <img src={instagram} className="h-6 w-6 text-gold" />
                      </div>

                      <p className="mt-4 font-semibold text-zinc-900 dark:text-white">
                        Visitar Instagram
                      </p>
                      <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                        Veja fotos, novidades e inspirações do espaço.
                      </p>
                    </a>

                    <a
                      href="#budget"
                      className="group rounded-[1.75rem] border border-zinc-200 bg-zinc-50 p-5 transition hover:border-gold/40 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm dark:bg-zinc-800">
                        <Sparkles className="h-6 w-6 text-gold" />
                      </div>

                      <p className="mt-4 font-semibold text-zinc-900 dark:text-white">
                        Revisar orçamento
                      </p>
                      <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                        Volte para a seção de orçamento e revise os detalhes.
                      </p>
                    </a>
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    className="h-12 w-full rounded-full border-zinc-300 bg-transparent dark:border-zinc-700"
                  >
                    <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                      Confirmar reserva agora
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
