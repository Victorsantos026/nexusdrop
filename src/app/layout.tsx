import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { configuracaoSite as c } from "@/configuracao/site";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--fonte-inter", 
  display: "swap" 
});

export const metadata: Metadata = {
  metadataBase: new URL(c.url),
  title: { 
    default: c.nome, 
    template: `%s | ${c.nome}` 
  },
  description: c.descricao,
  keywords: [
    "transferir arquivos iPhone PC", 
    "Wi-Fi local", 
    "NexusDrop", 
    "transferência sem cabo", 
    "QR Code"
  ],
  // Adiciona o ícone da aba do navegador automaticamente
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: { 
    title: c.nome, 
    description: c.descricao, 
    type: "website", 
    locale: "pt_BR", 
    siteName: c.nome 
  },
  twitter: { 
    card: "summary_large_image", 
    title: c.nome, 
    description: c.descricao 
  },
  robots: { 
    index: true, 
    follow: true 
  },
};

export const viewport: Viewport = { 
  themeColor: "#6A45F0", 
  width: "device-width", 
  initialScale: 1 
};

export default function LayoutRaiz({ children }: { children: React.ReactNode }) {
  const dadosEstruturados = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: c.nome,
    operatingSystem: "Windows 10+",
    applicationCategory: "UtilitiesApplication",
    softwareVersion: c.versao,
    description: c.descricao,
    offers: { 
      "@type": "Offer", 
      price: "0", 
      priceCurrency: "BRL" 
    },
  };

  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-sans antialiased">
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dadosEstruturados) }} 
        />
        {children}
      </body>
    </html>
  );
}