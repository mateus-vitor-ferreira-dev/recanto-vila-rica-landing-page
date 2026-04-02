import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, PlayCircle } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import areaKids from "@/assets/area-kids.jpeg";
import entrada from "@/assets/entrada.jpeg";
import espaco from "@/assets/espaco-de-festa.jpeg";
import piscina from "@/assets/piscina.jpeg";
import salao from "@/assets/salao.jpeg";

const galleryImages = [
  {
    id: 1,
    title: "Entrada",
    description:
      "Um acesso organizado e acolhedor para receber seus convidados com conforto desde o primeiro momento.",
    image: entrada,
  },
  {
    id: 2,
    title: "Salão principal",
    description:
      "Ambiente amplo e versátil, ideal para festas, confraternizações e eventos especiais.",
    image: salao,
  },
  {
    id: 3,
    title: "Espaço de festa",
    description:
      "Área preparada para decoração personalizada e momentos inesquecíveis com seus convidados.",
    image: espaco,
  },
  {
    id: 4,
    title: "Área kids",
    description:
      "Espaço dedicado para as crianças se divertirem com segurança e monitor incluso.",
    image: areaKids,
  },
  {
    id: 5,
    title: "Piscina",
    description:
      "Perfeita para dias quentes e eventos mais descontraídos, agregando ainda mais valor à experiência.",
    image: piscina,
  },
];

export default function SpaceSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMainImageLoaded, setIsMainImageLoaded] = useState(false);

  const currentImage = useMemo(
    () => galleryImages[currentIndex],
    [currentIndex],
  );

  const visibleImages = useMemo(() => {
    const total = galleryImages.length;

    if (total <= 3) {
      return galleryImages.map((item, index) => ({
        ...item,
        originalIndex: index,
      }));
    }

    const getWrappedIndex = (index: number) => {
      return (index + total) % total;
    };

    const visibleIndexes = [
      getWrappedIndex(currentIndex - 1),
      getWrappedIndex(currentIndex),
      getWrappedIndex(currentIndex + 1),
    ];

    return visibleIndexes.map((index) => ({
      ...galleryImages[index],
      originalIndex: index,
    }));
  }, [currentIndex]);

  const goToPrevious = () => {
    setIsMainImageLoaded(false);
    setCurrentIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length,
    );
  };

  const goToNext = () => {
    setIsMainImageLoaded(false);
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  useEffect(() => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    const prevIndex =
      (currentIndex - 1 + galleryImages.length) % galleryImages.length;

    const preloadNext = new Image();
    preloadNext.src = galleryImages[nextIndex].image;

    const preloadPrev = new Image();
    preloadPrev.src = galleryImages[prevIndex].image;
  }, [currentIndex]);

  return (
    <section className="px-6 py-20 md:py-28" id="space">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <Badge className="border-gold/30 bg-gold/10 text-gold hover:bg-gold/10">
            Conheça nosso espaço
          </Badge>

          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            Um ambiente pensado para celebrar com charme e conforto
          </h2>

          <p className="mt-5 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            O Recanto Vila Rica oferece uma estrutura acolhedora, sofisticada e
            preparada para receber momentos especiais com segurança, elegância e
            muita alegria.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="space-y-6">
            <Card className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <div className="relative h-80 sm:h-105 md:h-125">
                {!isMainImageLoaded && (
                  <div className="absolute inset-0 animate-pulse bg-zinc-200/80 dark:bg-zinc-800" />
                )}

                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImage.id}
                    src={currentImage.image}
                    alt={currentImage.title}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{
                      opacity: isMainImageLoaded ? 1 : 0,
                      scale: isMainImageLoaded ? 1 : 1.02,
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    onLoad={() => setIsMainImageLoaded(true)}
                    decoding="async"
                    fetchPriority="high"
                    className={`h-full w-full object-cover transition duration-500 ${
                      isMainImageLoaded ? "blur-0" : "blur-md"
                    }`}
                  />
                </AnimatePresence>

                <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/10 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-8">
                  <p className="text-sm font-medium uppercase tracking-[0.24em] text-white/75">
                    Destaque do espaço
                  </p>
                  <h3 className="mt-3 text-2xl font-bold md:text-3xl">
                    {currentImage.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-white/85 md:text-base">
                    {currentImage.description}
                  </p>
                </div>

                <div className="absolute right-4 top-4 flex gap-2 md:right-6 md:top-6">
                  <Button
                    type="button"
                    size="icon"
                    variant="secondary"
                    onClick={goToPrevious}
                    className="rounded-full"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>

                  <Button
                    type="button"
                    size="icon"
                    variant="secondary"
                    onClick={goToNext}
                    className="rounded-full"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>

            <div className="grid gap-4 sm:grid-cols-3">
              {visibleImages.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setIsMainImageLoaded(false);
                    setCurrentIndex(item.originalIndex);
                  }}
                  className={`overflow-hidden rounded-[1.5rem] border text-left transition ${
                    currentIndex === item.originalIndex
                      ? "border-gold shadow-md"
                      : "border-zinc-200 dark:border-zinc-800"
                  }`}
                >
                  <div className="h-28 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition duration-300 hover:scale-105"
                    />
                  </div>

                  <div className="bg-white p-4 dark:bg-zinc-900">
                    <p className="font-medium">{item.title}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <Card className="rounded-[2rem] border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <CardHeader>
              <Badge className="w-fit border-gold/30 bg-gold/10 text-gold hover:bg-gold/10">
                Vídeo do local
              </Badge>

              <CardTitle className="mt-4 text-2xl">
                Apresente o Recanto Vila Rica em movimento
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="flex h-65 items-center justify-center rounded-[1.5rem] border border-dashed border-zinc-300 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800/60">
                <div className="text-center">
                  <PlayCircle className="mx-auto h-12 w-12 text-gold" />
                  <p className="mt-4 font-medium">Espaço para vídeo editado</p>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    Aqui você pode incorporar um vídeo do YouTube, Vimeo ou um
                    vídeo hospedado localmente.
                  </p>
                </div>
              </div>

              <div className="rounded-[1.5rem] bg-zinc-50 p-5 dark:bg-zinc-800/50">
                <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                  Use este espaço para mostrar os melhores ângulos do ambiente,
                  a estrutura disponível e a experiência que os convidados terão
                  ao celebrar no Recanto Vila Rica.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
