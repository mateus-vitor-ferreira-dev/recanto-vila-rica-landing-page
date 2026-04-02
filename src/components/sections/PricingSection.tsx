import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Check, Clock, Waves } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      date: "Seg-qui",
      name: "Promocional",
      highlight: true,
      price: "R$649,99",
      extras: ["5h de festa", "Área kids com monitor incluso"],
    },
    {
      date: "Sex-dom e feriados",
      name: "Essencial",
      price: "R$849,99",
      extras: ["4h de festa", "Área kids com monitor INCLUSO"],
    },
    {
      date: "Sex-dom e feriados",
      name: "Completo",
      price: "R$999,99",
      extras: [
        "4h de festa",
        "Área kids com monitor incluso",
        "Piscina inclusa",
        "Extensão da área kids: + R$30/h",
      ],
    },
  ];

  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Planos e valores</h2>

        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          Escolha a melhor opção para sua celebração
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <motion.div
            key={plan.name}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
          >
            <Card
              className={`rounded-3xl border transition ${
                plan.highlight
                  ? "border-gold shadow-xl"
                  : "border-zinc-200 dark:border-zinc-800"
              }`}
            >
              <CardHeader>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-zinc-500">{plan.date}</span>

                  {plan.highlight && (
                    <Badge className="bg-red-600 text-white">+ Vendida</Badge>
                  )}
                </div>

                <CardTitle className="mt-4 text-2xl">{plan.name}</CardTitle>
              </CardHeader>

              <CardContent>
                <div className="space-y-3">
                  {plan.extras.map((extra) => {
                    const isPool = extra.includes("Piscina");
                    const isExtension = extra.includes("Extensão");

                    return (
                      <div
                        key={extra}
                        className={`flex items-center gap-2 ${
                          isExtension ? "text-sm text-gold" : ""
                        }`}
                      >
                        {isPool ? (
                          <Waves className="w-4 h-4 text-gold" />
                        ) : isExtension ? (
                          <Clock className="w-4 h-4 text-gold" />
                        ) : (
                          <Check className="w-4 h-4 text-green-600" />
                        )}
                        {extra}
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6">
                  <p className="text-3xl font-bold">{plan.price}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
