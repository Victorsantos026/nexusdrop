"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import TituloSecao from "@/componentes/TituloSecao";

const perguntas = [
  {
    p: "Preciso instalar algum aplicativo no dispositivo?",
    r:
      "Não. O dispositivo acessa a interface pelo navegador depois de escanear o QR Code exibido pelo NexusDrop.",
  },
  {
    p: "Preciso utilizar cabo USB?",
    r:
      "Não. A transferência é realizada pela rede local, sem a necessidade de cabos.",
  },
  {
    p: "O computador e o dispositivo precisam estar na mesma rede?",
    r:
      "Sim. O computador e o dispositivo precisam estar conectados à mesma rede local para que o navegador consiga acessar o NexusDrop.",
  },
  {
    p: "O NexusDrop funciona sem internet?",
    r:
      "Sim. O funcionamento básico não depende de serviços externos ou armazenamento em nuvem. O computador e o dispositivo precisam apenas conseguir se comunicar pela mesma rede local.",
  },
  {
    p: "Posso enviar vídeos grandes?",
    r:
      "Sim. É possível enviar vídeos e outros arquivos. O tempo da transferência depende do tamanho do arquivo e da qualidade da conexão local.",
  },
  {
    p: "Quais formatos de arquivo são aceitos?",
    r:
      "O NexusDrop permite transferir fotos, vídeos, documentos e outros tipos de arquivo.",
  },
  {
    p: "Meus arquivos são enviados para a nuvem?",
    r:
      "Não. Os arquivos são transferidos diretamente entre o computador e o dispositivo pela rede local, sem upload obrigatório para serviços de nuvem.",
  },
  {
    p: "Posso conectar mais de um dispositivo simultaneamente?",
    r:
      "A sessão é controlada para permitir um dispositivo autorizado por vez, reduzindo o risco de acessos simultâneos não reconhecidos.",
  },
  {
    p: "Como escolher a pasta onde os arquivos serão salvos?",
    r:
      "A pasta de recebimento pode ser escolhida diretamente no programa, pela opção de selecionar diretório.",
  },
];

export default function SecaoPerguntas() {
  const [aberta, setAberta] = useState<number | null>(0);

  function alternarPergunta(index: number) {
    setAberta((atual) => (atual === index ? null : index));
  }

  return (
    <section
      id="faq"
      className="bg-gradient-to-b from-transparent to-violeta-50/70 py-20 sm:py-28"
      aria-labelledby="titulo-faq"
    >
      <div className="container-site">
        <div id="titulo-faq">
          <TituloSecao titulo="Perguntas frequentes" />
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {perguntas.map((item, index) => {
            const ativa = aberta === index;
            const respostaId = `resposta-faq-${index}`;

            return (
              <div
                key={item.p}
                className="overflow-hidden rounded-2xl border border-violeta-100 bg-white shadow-[0_2px_20px_-10px_rgba(106,69,240,0.12)]"
              >
                <h3>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold text-tinta transition-colors hover:bg-violeta-50/50"
                    aria-expanded={ativa}
                    aria-controls={respostaId}
                    onClick={() => alternarPergunta(index)}
                  >
                    <span>{item.p}</span>

                    <ChevronDown
                      size={20}
                      strokeWidth={2}
                      className={`shrink-0 text-violeta-600 transition-transform duration-300 ${
                        ativa ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                <div
                  id={respostaId}
                  role="region"
                  aria-hidden={!ativa}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ${
                    ativa
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-tinta/70">
                      {item.r}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
