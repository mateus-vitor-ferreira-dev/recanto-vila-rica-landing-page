import instagramIcon from "@/assets/icons/instagram.svg";
import whatsappIcon from "@/assets/icons/whatsapp.svg";
import { MapPin, Phone } from "lucide-react";

const WHATSAPP_URL = "https://wa.link/afae2s";
const INSTAGRAM_URL = "https://instagram.com/recanto.vilarica";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Rua+Bernardino+Ant%C3%B4nio+Tom%C3%A1s,+21,+Jardim+Vila+Rica,+Lavras,+MG";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white px-6 py-12 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="text-lg font-bold tracking-wide text-zinc-950 dark:text-white">
            Recanto Vila Rica
          </p>

          <p className="mt-4 max-w-md text-sm leading-7 text-zinc-600 dark:text-zinc-400">
            Um espaço pensado para celebrar momentos especiais com conforto,
            acolhimento e uma experiência memorável para você e seus convidados.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500">
            Contato
          </p>

          <div className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 transition hover:text-gold"
            >
              <img
                src={whatsappIcon}
                alt="WhatsApp"
                aria-hidden="true"
                className="h-4 w-4"
              />
              WhatsApp
            </a>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 transition hover:text-gold"
            >
              <img
                src={instagramIcon}
                alt="Instagram"
                aria-hidden="true"
                className="h-4 w-4"
              />
              Instagram
            </a>

            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4" />
              <span>(35) 99971-8824</span>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500">
            Localização
          </p>

          <div className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>
                Rua Bernardino Antônio Tomás, 21
                <br />
                Jardim Vila Rica
                <br />
                Lavras - MG
              </span>
            </div>

            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-gold"
            >
              Ver no mapa
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-zinc-200 pt-6 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
        © {new Date().getFullYear()} Recanto Vila Rica. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
