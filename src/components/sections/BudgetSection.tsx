import { Calculator, FileText, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GOOGLE_FORMS_URL = "https://forms.gle/SEU_FORM_AQUI";

export default function BudgetSection() {
  return (
    <section className="px-6 py-20 md:py-28" id="budget">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <Badge className="border-gold/30 bg-gold/10 text-gold hover:bg-gold/10">
            Faça o seu orçamento
          </Badge>

          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            Receba uma estimativa para o seu evento
          </h2>

          <p className="mt-5 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Preencha um formulário rápido para entendermos melhor o seu evento e
            calcularmos uma estimativa com base na data, estrutura desejada e
            adicionais escolhidos.
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
                  <Calculator className="h-6 w-6" />
                </div>

                <CardTitle className="mt-6 text-2xl md:text-3xl">
                  Como funciona o cálculo estimado
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-5">
                <div className="rounded-[1.5rem] border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-800/50">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-gold" />
                    <p className="font-medium">Informações analisadas</p>
                  </div>

                  <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                    O valor estimado considera a data desejada, modalidade,
                    duração do evento, uso de área kids, piscina e demais
                    detalhes informados no formulário.
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-zinc-200 p-5 dark:border-zinc-800">
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-gold" />
                    <p className="font-medium">Atendimento personalizado</p>
                  </div>

                  <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                    Após o envio, a equipe pode ajustar a proposta conforme a
                    necessidade do seu evento para encontrar a melhor condição.
                  </p>
                </div>

                <p className="text-sm italic text-zinc-500 dark:text-zinc-400">
                  valores a negociar
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <Card className="h-full rounded-[2rem] border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl">
                  Solicite seu orçamento
                </CardTitle>
              </CardHeader>

              <CardContent className="flex h-full flex-col justify-between gap-6">
                <div className="space-y-4">
                  <div className="rounded-[1.5rem] bg-zinc-50 p-5 dark:bg-zinc-800/50">
                    <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                      Ao preencher o formulário, você ajuda nossa equipe a
                      entender melhor o perfil do evento e a preparar uma
                      estimativa mais próxima do que você precisa.
                    </p>
                  </div>

                  <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
                    <li>• Data desejada para a reserva</li>
                    <li>• Tipo de modalidade escolhida</li>
                    <li>• Estrutura e adicionais desejados</li>
                    <li>• Informações complementares do evento</li>
                  </ul>
                </div>

                <Button
                  asChild
                  className="h-12 rounded-full bg-gold px-6 text-black hover:bg-goldLight"
                >
                  <a
                    href={GOOGLE_FORMS_URL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ir para o Google Forms
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}