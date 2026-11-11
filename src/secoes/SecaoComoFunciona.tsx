import {
  Monitor,
  Wifi,
  ScanLine,
  ArrowLeftRight,
  QrCode,
  Smartphone,
  Files,
} from "lucide-react";

import TituloSecao from "@/componentes/TituloSecao";
import Revelar from "@/componentes/Revelar";

const etapas = [
  {
    titulo: "Abra o NexusDrop no computador.",
    Icones: [Monitor],
    detalhe:
      "O programa inicia o servidor local e exibe um QR Code exclusivo para a conexão.",
  },
  {
    titulo: "Conecte o dispositivo à mesma rede local.",
    Icones: [Wifi, Smartphone],
    detalhe:
      "O computador e o dispositivo precisam estar na mesma rede local para que possam se comunicar diretamente.",
  },
  {
    titulo: "Escaneie o QR Code.",
    Icones: [QrCode, ScanLine],
    detalhe:
      "Use a câmera do dispositivo para escanear o código exibido pelo NexusDrop. A página de transferência será aberta no navegador, sem instalar nada.",
  },
  {
    titulo: "Escolha os arquivos e transfira.",
    Icones: [Files, ArrowLeftRight, Smartphone],
    detalhe:
      "Envie fotos, vídeos e documentos do computador para o dispositivo ou do dispositivo para o computador.",
  },
];

export default function SecaoComoFunciona() {
  return (
    <section
      id="como-funciona"
      className="bg-gradient-to-b from-violeta-50/70 to-transparent py-20 sm:py-28"
      aria-labelledby="titulo-como-funciona"
    >
      <div className="container-site">
        <div id="titulo-como-funciona">
          <TituloSecao titulo="Como funciona o NexusDrop?" />
        </div>

        <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-tinta/65">
          O NexusDrop conecta o computador e o dispositivo diretamente pela
          rede local. Não é necessário usar cabos, criar uma conta ou enviar
          seus arquivos para a nuvem.
        </p>

        <div className="mx-auto mt-6 flex max-w-2xl items-center justify-center gap-3 rounded-2xl border border-violeta-100 bg-white/80 px-5 py-4 text-center shadow-[0_2px_20px_-8px_rgba(106,69,240,0.12)]">
          <Wifi
            size={20}
            className="shrink-0 text-violeta-600"
            aria-hidden="true"
          />

          <p className="text-sm font-medium leading-relaxed text-tinta/75">
            O dispositivo precisa estar conectado à mesma rede local do
            computador para acessar o NexusDrop e realizar as transferências.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {etapas.map(({ titulo, Icones, detalhe }, index) => (
            <Revelar
              key={titulo}
              atraso={index * 0.1}
            >
              <li className="group h-full rounded-3xl border border-violeta-100 bg-white p-7 shadow-[0_2px_20px_-8px_rgba(106,69,240,0.12)] transition duration-300 hover:-translate-y-1 hover:border-violeta-500/30 hover:shadow-suave">
                <div className="relative grid h-28 place-items-center rounded-2xl bg-gradient-to-br from-violeta-50 to-indigo-500/10">
                  <div className="flex items-center gap-3 text-violeta-600 transition-transform duration-300 group-hover:scale-105">
                    {Icones.map((Icone, iconIndex) => (
                      <Icone
                        key={`${titulo}-${iconIndex}`}
                        size={34}
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  <span className="absolute right-3 top-3 grid h-7 w-7 place-items-center rounded-full bg-violeta-600 text-xs font-bold text-white">
                    {index + 1}
                  </span>
                </div>

                <p className="mt-6 text-sm font-semibold text-violeta-600">
                  Etapa {index + 1}
                </p>

                <h3 className="mt-1 text-lg font-semibold leading-snug text-tinta">
                  {titulo}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-tinta/65">
                  {detalhe}
                </p>
              </li>
            </Revelar>
          ))}
        </ol>
      </div>
    </section>
  );
}
