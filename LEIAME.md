# NexusDrop — Site oficial

Next.js (App Router) + TypeScript + Tailwind CSS + Lucide + Framer Motion.

## Rodar
    npm install
    npm run dev

## Configurar o download (arquivo único)
Edite `src/configuracao/site.ts` (versão, tamanho, data) e defina o link real em
`NEXT_PUBLIC_LINK_DOWNLOAD` (`.env.local` ou variáveis da Vercel). Sem link, o botão mostra "em breve".

## Screenshots reais
Coloque as imagens em `public/telas/` e preencha o campo `imagem` em `telas` no mesmo arquivo de configuração.

## Estrutura
- `src/app/` — layout, página e estilos globais
- `src/secoes/` — cada seção/tela do site (SecaoInicio, SecaoDownload, ...)
- `src/componentes/` — peças reutilizáveis (Cabecalho, Rodape, MockupComputador, ...)
- `src/configuracao/site.ts` — configuração central

## Deploy
Importe o repositório na Vercel (preset Next.js) e defina `NEXT_PUBLIC_LINK_DOWNLOAD`.
