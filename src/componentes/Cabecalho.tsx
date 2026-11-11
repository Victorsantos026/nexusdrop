"use client";
import { useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { configuracaoSite as c } from "@/configuracao/site";

export default function Cabecalho() {
  const [aberto, setAberto] = useState(false);
  
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-violeta-100/70 bg-white/75 backdrop-blur-xl">
      <div className="container-site flex h-16 items-center justify-between">
        {/* Apenas a imagem da logo */}
        <a href="#inicio" aria-label="NexusDrop — início" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/assets/logo.png" 
            alt="NexusDrop Logo" 
            className="h-10 w-auto object-contain" 
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {c.navegacao.map((i) => (
            <a key={i.href} href={i.href} className="text-sm font-medium text-tinta/70 transition hover:text-violeta-600">
              {i.rotulo}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#download" className="botao-primario !px-4 !py-2 text-sm">
            <Download size={16} aria-hidden /> 
            <span className="hidden sm:inline">Baixar para Windows</span>
            <span className="sm:hidden">Baixar</span>
          </a>
          <button 
            className="grid h-10 w-10 place-items-center rounded-lg md:hidden" 
            onClick={() => setAberto(!aberto)} 
            aria-label="Abrir menu" 
            aria-expanded={aberto}
          >
            {aberto ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {aberto && (
        <nav className="border-t border-violeta-100 bg-white px-5 py-3 md:hidden" aria-label="Mobile">
          {c.navegacao.map((i) => (
            <a 
              key={i.href} 
              href={i.href} 
              onClick={() => setAberto(false)} 
              className="block rounded-lg px-3 py-3 font-medium hover:bg-violeta-50"
            >
              {i.rotulo}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}