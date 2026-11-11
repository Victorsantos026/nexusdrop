"use client";

import { motion } from "framer-motion";
import {
  Wifi,
  QrCode,
  Unplug,
  MonitorSmartphone,
} from "lucide-react";

import IlustracaoTransferencia from "@/componentes/IlustracaoTransferencia";

const indicadores = [
  {
    Icone: Wifi,
    texto: "Transferência via Wi-Fi local",
  },
  {
    Icone: QrCode,
    texto: "Conexão rápida por QR Code",
  },
  {
    Icone: Unplug,
    texto: "Sem necessidade de cabos",
  },
  {
    Icone: MonitorSmartphone,
    texto: "Compatível com dispositivos móveis e Windows",
  },
];

export default function SecaoInicio() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pb-20 pt-32 sm:pt-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/15 via-violeta-500/15 to-fuchsia-400/15 blur-3xl"
      />

      <div className="container-site relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          <span className="mb-5 inline-flex rounded-full bg-violeta-100 px-4 py-2 text-sm font-semibold text-violeta-700">
            Transferência simples e segura
          </span>

          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-tinta sm:text-5xl lg:text-6xl">
          Transfira sem limites e{" "}
            <span className="texto-gradiente">sem complicação.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-tinta/70">
            Transfira fotos, vídeos, documentos e qualquer tipo de arquivo
            entre o computador e dispositivos móveis utilizando sua própria
            rede Wi-Fi. Sem cabos, sem nuvem e sem complicações.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#download"
              className="botao-primario inline-flex items-center justify-center"
            >
              Baixar NexusDrop
            </a>

            <a
              href="#funcionalidades"
              className="botao-secundario inline-flex items-center justify-center"
            >
              Conhecer funcionalidades
            </a>
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {indicadores.map(({ Icone, texto }) => (
              <li
                key={texto}
                className="flex items-center gap-3 text-sm font-medium text-tinta/75"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-violeta-100 text-violeta-600">
                  <Icone
                    size={17}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </span>

                <span>{texto}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: "easeOut",
          }}
        >
          <IlustracaoTransferencia />
        </motion.div>
      </div>
    </section>
  );
}
