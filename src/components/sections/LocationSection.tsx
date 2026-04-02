import { motion } from "framer-motion";
import { ExternalLink, MapPin, Navigation } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Rua+Bernardino+Ant%C3%B4nio+Tom%C3%A1s,+21,+Jardim+Vila+Rica,+Lavras,+MG";

export default function LocationSection() {
  return (
    <section className="px-6 py-20 md:py-28" id="location">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <Badge className="border-gold/30 bg-gold/10 text-gold hover:bg-gold/10">
            Localização
          </Badge>

          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            Um espaço especial em uma localização fácil de encontrar
          </h2>

          <p className="mt-5 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Facilite a chegada dos seus convidados com uma localização prática e
            acesso simples. O Recanto Vila Rica está pronto para receber seu
            evento com conforto desde a chegada.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45 }}
          >
            <Card className="h-full rounded-[2rem] border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <CardHeader>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold text-black shadow-sm">
                  <MapPin className="h-6 w-6" />
                </div>

                <CardTitle className="mt-6 text-2xl md:text-3xl">
                  Venha conhecer o Recanto Vila Rica
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="rounded-[1.5rem] border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-800/50">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500">
                    Endereço
                  </p>

                  <p className="mt-3 text-base leading-7 text-zinc-700 dark:text-zinc-300">
                    Rua Bernadino Antônio Tomas, n21
                    <br />
                    Bairro Jardim Vila Rica
                    <br />
                    Lavras - MG
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-zinc-200 p-5 dark:border-zinc-800">
                    <div className="flex items-center gap-3">
                      <Navigation className="h-5 w-5 text-gold" />
                      <p className="font-medium">Acesso facilitado</p>
                    </div>

                    <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                      Local fácil de encontrar e ideal para orientar seus
                      convidados com praticidade.
                    </p>
                  </div>

                  <div className="rounded-[1.5rem] border border-zinc-200 p-5 dark:border-zinc-800">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-gold" />
                      <p className="font-medium">Mais comodidade</p>
                    </div>

                    <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                      Uma localização pensada para tornar a experiência mais
                      confortável desde a chegada ao evento.
                    </p>
                  </div>
                </div>

                <Button
                  asChild
                  className="h-12 rounded-full bg-gold px-6 text-black hover:bg-goldLight"
                >
                  <a href={GOOGLE_MAPS_URL} target="_blank" rel="noreferrer">
                    Abrir no Google Maps
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <Card className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <div className="relative h-80 sm:h-105">
                <iframe
                  title="Mapa do Recanto Vila Rica"
                  src="https://www.google.com/maps?q=Rua%20Bernardino%20Ant%C3%B4nio%20Tom%C3%A1s,%2021,%20Jardim%20Vila%20Rica,%20Lavras,%20MG&z=16&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/35 to-transparent" />
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
