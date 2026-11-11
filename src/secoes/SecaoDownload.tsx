import { Monitor, FileCode2, Tag, HardDrive, CalendarDays } from "lucide-react";
import BotaoDownload from "@/componentes/BotaoDownload";
import Revelar from "@/componentes/Revelar";
import { configuracaoSite as c } from "@/configuracao/site";

export default function SecaoDownload() {
  const dados = [
    { Icone: FileCode2, rotulo: "Formato", valor: "Executável .EXE" },
    { Icone: Monitor, rotulo: "Sistema", valor: "Windows" },
    { Icone: Tag, rotulo: "Versão", valor: c.versao },
    { Icone: HardDrive, rotulo: "Tamanho", valor: c.tamanhoArquivo },
    { Icone: CalendarDays, rotulo: "Atualizado em", valor: c.dataAtualizacao },
  ];

  return (
    <section id="download" className="relative overflow-hidden py-24 sm:py-32">
      {/* Fundo com gradiente estilizado */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/10 via-violeta-500/15 to-fuchsia-400/10" aria-hidden />
      
      <div className="container-site">
        <Revelar className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl text-tinta">
            Pronto para experimentar o NexusDrop?
          </h2>
          <p className="mt-4 text-lg text-tinta/70">
            Transfira seus arquivos de maneira simples, rápida e prática diretamente no seu desktop.
          </p>
        </Revelar>

        <Revelar atraso={0.1} className="vidro mx-auto mt-12 max-w-2xl rounded-[2.5rem] border border-violeta-100/80 bg-white/80 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
          
          {/* Grelha de Informações Técnicas */}
          <dl className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {dados.map(({ Icone, rotulo, valor }, index) => (
              <div 
                key={rotulo} 
                className={`group rounded-2xl border border-violeta-100/50 bg-white/90 p-4 transition-all duration-300 hover:border-violeta-300 hover:shadow-sm ${
                  index === 4 ? "col-span-2 sm:col-span-1" : ""
                }`}
              >
                <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-violeta-700/70">
                  <Icone size={14} className="text-violeta-600 transition-transform group-hover:scale-110" aria-hidden /> 
                  {rotulo}
                </dt>
                <dd className="mt-1.5 text-sm font-bold text-tinta">{valor}</dd>
              </div>
            ))}
          </dl>

          {/* Botão de Download Principal */}
          <div className="mt-8">
            <BotaoDownload 
              grande 
              rotulo="BAIXAR NEXUSDROP" 
              className="w-full shadow-lg shadow-violeta-600/20 transition-all duration-300 hover:shadow-xl hover:shadow-violeta-600/30" 
            />
          </div>

          {/* Rodapé de Informações Secundárias */}
          <div className="mt-6 flex items-center justify-center gap-2 text-center text-xs font-medium text-tinta/60">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Download gratuito </span>
          </div>

        </Revelar>
      </div>
    </section>
  );
}