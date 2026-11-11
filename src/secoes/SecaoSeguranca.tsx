import {
  Wifi,
  CloudOff,
  KeyRound,
  ShieldCheck,
  Smartphone,
  FolderTree,
  Network,
  RefreshCw,
  LockKeyhole,
  FileCheck2,
  Info,
} from "lucide-react";

import Revelar from "@/componentes/Revelar";

const itens = [
  {
    Icone: Wifi,
    texto:
      "Transferências realizadas diretamente entre o computador e o dispositivo pela rede local.",
  },
  {
    Icone: KeyRound,
    texto:
      "Token de acesso aleatório e temporário gerado para controlar a conexão.",
  },
  {
    Icone: ShieldCheck,
    texto:
      "Acesso liberado somente depois da validação da sessão iniciada pelo QR Code.",
  },
  {
    Icone: LockKeyhole,
    texto:
      "Cookie de autorização exclusivo para o dispositivo conectado durante a sessão.",
  },
  {
    Icone: Smartphone,
    texto:
      "Controle de sessão única para evitar o uso simultâneo por dispositivos não autorizados.",
  },
  {
    Icone: RefreshCw,
    texto:
      "Tokens e sessões anteriores são invalidados ao reiniciar ou reconectar o NexusDrop.",
  },
  {
    Icone: FolderTree,
    texto:
      "Arquivos recebidos e enviados são organizados em diretórios separados por dispositivo.",
  },
  {
    Icone: Network,
    texto:
      "Conhecer o endereço IP local não é suficiente para acessar os arquivos protegidos.",
  },
  {
    Icone: FileCheck2,
    texto:
      "As ações de transferência passam por validações contra requisições não autorizadas.",
  },
  {
    Icone: CloudOff,
    texto:
      "Os arquivos são transferidos localmente sem depender de armazenamento em nuvem.",
  },
];

export default function SecaoSeguranca() {
  return (
    <section
      id="seguranca"
      className="bg-tinta py-20 text-white sm:py-28"
      aria-labelledby="titulo-seguranca"
    >
      <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <Revelar>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-violeta-400/30 bg-violeta-500/10 px-3 py-1.5 text-xs font-semibold text-violeta-100">
            <ShieldCheck
              size={14}
              strokeWidth={2}
              aria-hidden="true"
            />

            Segurança e privacidade
          </span>

          <h2
            id="titulo-seguranca"
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Segurança em cada conexão.
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-white/70">
            O NexusDrop utiliza tokens temporários, sessões autorizadas e
            validações de requisição para controlar o acesso aos arquivos.
            Cada execução inicia um novo contexto de conexão.
          </p>

          <p className="mt-4 text-base leading-relaxed text-white/60">
            O endereço IP local, sozinho, não autoriza uma transferência. O
            dispositivo precisa possuir uma sessão válida e passar pelas
            verificações de segurança do NexusDrop.
          </p>

          <div className="mt-6 flex gap-3 rounded-2xl border border-white/15 bg-white/5 p-4">
            <Info
              size={19}
              className="mt-0.5 shrink-0 text-violeta-100"
              strokeWidth={2}
              aria-hidden="true"
            />

            <p className="text-sm leading-relaxed text-white/70">
              Os arquivos são transferidos diretamente entre o computador e o
              dispositivo, sem armazenamento obrigatório em serviços de nuvem.
              O acesso é controlado por uma sessão temporária autorizada.
            </p>
          </div>
        </Revelar>

        <ul className="grid gap-3 sm:grid-cols-2">
          {itens.map(({ Icone, texto }, index) => (
            <Revelar
              key={texto}
              atraso={index * 0.05}
            >
              <li className="flex h-full items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-violeta-400/40 hover:bg-white/10">
                <span className="gradiente-marca grid h-9 w-9 shrink-0 place-items-center rounded-xl">
                  <Icone
                    size={17}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </span>

                <span className="text-sm leading-relaxed text-white/85">
                  {texto}
                </span>
              </li>
            </Revelar>
          ))}
        </ul>
      </div>
    </section>
  );
}
