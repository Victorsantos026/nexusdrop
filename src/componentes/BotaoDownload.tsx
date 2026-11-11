import { Download } from "lucide-react";

import { configuracaoSite as c } from "@/configuracao/site";

type Props = {
  grande?: boolean;
  rotulo?: string;
  className?: string;
};

const LINK_DOWNLOAD =
  "https://github.com/Victorsantos026/nexusdrop-download/releases/latest/download/NexusDrop.exe";

export default function BotaoDownload({
  grande = false,
  rotulo = "Baixar NexusDrop",
  className = "",
}: Props) {
  const tamanho = grande ? "px-10 py-5 text-lg" : "";
  const nomeArquivo = c.nomeArquivo || "NexusDrop.exe";
  const linkDownload = c.linkDownload?.trim() || LINK_DOWNLOAD;

  return (
    <a
      href={linkDownload}
      className={`botao-primario inline-flex items-center justify-center gap-2 ${tamanho} ${className}`}
      aria-label={`${rotulo} para Windows`}
    >
      <Download
        size={grande ? 24 : 20}
        aria-hidden="true"
      />

      {rotulo}
    </a>
  );
}
