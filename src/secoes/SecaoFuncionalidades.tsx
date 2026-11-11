import {
  Monitor,
  Smartphone,
  QrCode,
  CloudOff,
  ShieldCheck,
  History,
  Files,
  Activity,
} from "lucide-react";

import TituloSecao from "@/componentes/TituloSecao";
import Revelar from "@/componentes/Revelar";

const funcionalidades = [
  {
    Icone: Monitor,
    titulo: "PC para dispositivo",
    texto:
      "Envie arquivos do computador diretamente para o dispositivo móvel e faça o download pelo navegador.",
  },
  {
    Icone: Smartphone,
    titulo: "Dispositivo para PC",
    texto:
      "Envie fotos, vídeos, documentos e outros arquivos diretamente para o computador.",
  },
  {
    Icone: QrCode,
    titulo: "Conexão por QR Code",
    texto:
      "Escaneie o código com a câmera do dispositivo e conecte-se rapidamente ao NexusDrop.",
  },
  {
    Icone: CloudOff,
    titulo: "Sem nuvem",
    texto:
      "Os arquivos são transferidos diretamente pela rede Wi-Fi local, sem depender de serviços externos.",
  },
  {
    Icone: ShieldCheck,
    titulo: "Segurança por sessão",
    texto:
      "Acesso protegido por token temporário, sessão autorizada e validação do dispositivo conectado.",
  },
  {
    Icone: History,
    titulo: "Histórico de transferências",
    texto:
      "Consulte registros de conexões, arquivos recebidos e atividades realizadas no programa.",
  },
  {
    Icone: Files,
    titulo: "Transferência de vários arquivos",
    texto:
      "Selecione fotos, vídeos, documentos e vários arquivos de uma só vez.",
  },
  {
    Icone: Activity,
    titulo: "Monitoramento da conexão",
    texto:
      "Acompanhe o estado do servidor, da rede local e da conexão diretamente no NexusDrop.",
  },
];

export default function SecaoFuncionalidades() {
  return (
    <section
      id="funcionalidades"
      className="py-20 sm:py-28"
      aria-labelledby="titulo-funcionalidades"
    >
      <div className="container-site">
        <div id="titulo-funcionalidades">
          <TituloSecao titulo="Tudo o que você precisa para transferir arquivos." />
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {funcionalidades.map(({ Icone, titulo, texto }, index) => (
            <Revelar
              key={titulo}
              atraso={(index % 4) * 0.06}
            >
              <article className="group h-full rounded-3xl border border-violeta-100 bg-white p-6 shadow-[0_2px_20px_-8px_rgba(106,69,240,0.15)] transition duration-300 hover:-translate-y-1 hover:border-violeta-500/30 hover:shadow-suave">
                <span
                  className="gradiente-marca grid h-12 w-12 place-items-center rounded-2xl text-white transition-transform duration-300 group-hover:scale-105"
                  aria-hidden="true"
                >
                  <Icone
                    size={22}
                    strokeWidth={2}
                  />
                </span>

                <h3 className="mt-5 text-lg font-semibold text-tinta">
                  {titulo}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-tinta/65">
                  {texto}
                </p>
              </article>
            </Revelar>
          ))}
        </div>
      </div>
    </section>
  );
}
