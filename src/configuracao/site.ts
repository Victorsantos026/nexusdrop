/**
 * Configuração central do site NexusDrop.
 *
 * Para publicar uma nova versão:
 * 1. Crie uma nova GitHub Release.
 * 2. Anexe o arquivo com o nome NexusDrop.exe.
 * 3. Atualize a versão, o tamanho e a data neste arquivo.
 *
 * Também é possível substituir o link usando:
 * NEXT_PUBLIC_LINK_DOWNLOAD
 */

export const configuracaoSite = {
  nome: "NexusDrop",

  icone: "/icone2.png",

  slogan: "Transferência simples, local e segura.",

  descricao:
    "Transfira fotos, vídeos, documentos e outros arquivos entre o Windows e dispositivos móveis pela rede local. Sem cabos e sem armazenamento obrigatório em nuvem.",

  url: "https://nexusdrop.vercel.app",

  // Download
  versao: "1.0.0",

  tamanhoArquivo: "54,48 MB",

  dataAtualizacao: "11 de novembro de 2026",

  nomeArquivo: "NexusDrop.exe",

  linkDownload:
    process.env.NEXT_PUBLIC_LINK_DOWNLOAD?.trim() ||
    "https://github.com/Victorsantos026/nexusdrop-download/releases/latest/download/NexusDrop.exe",

  contato: "contato@seudominio.com",

  requisitos: [
    "Windows 10 ou superior",
    "Uma rede local disponível",
    "Navegador atualizado no dispositivo móvel",
    "Computador e dispositivo conectados à mesma rede local",
  ],

  navegacao: [
    {
      rotulo: "Início",
      href: "#inicio",
    },
    {
      rotulo: "Funcionalidades",
      href: "#funcionalidades",
    },
    {
      rotulo: "Como funciona",
      href: "#como-funciona",
    },
    {
      rotulo: "Segurança",
      href: "#seguranca",
    },
    {
      rotulo: "Perguntas frequentes",
      href: "#faq",
    },
  ],

  telas: [
    {
      titulo: "Tela inicial",
      imagem: "/assets/tela.png",
    },
  ],
};
