"use client";
import { motion } from "framer-motion";
import { Monitor, Smartphone, FileText, Image as Imagem, Film, Wifi } from "lucide-react";

const arquivos = [
  { Icone: Imagem, atraso: 0, rota: "ida" },
  { Icone: Film, atraso: 1.1, rota: "volta" },
  { Icone: FileText, atraso: 2.2, rota: "ida" },
] as const;

/** Composição: computador ⇄ iPhone com arquivos em trânsito. */
export default function IlustracaoTransferencia() {
  return (
    <div className="relative mx-auto aspect-[1/0.9] w-full max-w-xl" aria-hidden>
      <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-indigo-500/15 via-violeta-500/10 to-fuchsia-400/15 blur-2xl" />
      {/* Computador */}
      <div className="vidro absolute left-0 top-[14%] w-[58%] rounded-2xl p-3 shadow-tela">
        <div className="flex aspect-[16/10] flex-col items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-tinta to-[#2b2470] text-white">
          <Monitor size={34} />
          <span className="text-xs font-semibold tracking-wide">NexusDrop</span>
          <span className="flex items-center gap-1 text-[10px] text-white/70"><Wifi size={11} /> Servidor ativo</span>
        </div>
        <div className="mx-auto mt-2 h-1.5 w-1/3 rounded-full bg-tinta/15" />
      </div>
      {/* iPhone */}
      <div className="vidro absolute bottom-[6%] right-[4%] w-[26%] rounded-[1.6rem] p-2 shadow-tela">
        <div className="flex aspect-[9/17] flex-col items-center justify-center gap-2 rounded-[1.2rem] bg-gradient-to-b from-white to-violeta-100 text-violeta-700">
          <Smartphone size={26} />
          <span className="text-[10px] font-semibold">Conectado</span>
        </div>
      </div>
      {/* Caminho de transferência */}
      <div className="absolute left-[44%] top-[44%] h-[2px] w-[34%] rotate-[22deg] origin-left bg-gradient-to-r from-indigo-500/60 to-violeta-500/10" />
      {arquivos.map(({ Icone, atraso, rota }, i) => (
        <motion.span
          key={i}
          className="gradiente-marca absolute left-[46%] top-[40%] grid h-9 w-9 place-items-center rounded-xl text-white shadow-suave"
          initial={{ x: rota === "ida" ? 0 : 190, y: rota === "ida" ? 0 : 88, opacity: 0, scale: 0.6 }}
          animate={{ x: rota === "ida" ? [0, 190] : [190, 0], y: rota === "ida" ? [0, 88] : [88, 0], opacity: [0, 1, 1, 0], scale: [0.6, 1, 1, 0.6] }}
          transition={{ duration: 3.2, delay: atraso, repeat: Infinity, ease: "easeInOut" }}
        >
          <Icone size={18} />
        </motion.span>
      ))}
      {/* Partículas */}
      {[12, 30, 52, 70, 86].map((p, i) => (
        <motion.span key={p} className="absolute h-1.5 w-1.5 rounded-full bg-violeta-500/50" style={{ left: `${p}%`, top: `${8 + (i % 3) * 6}%` }}
          animate={{ y: [0, -10, 0], opacity: [0.3, 0.9, 0.3] }} transition={{ duration: 3 + i * 0.4, repeat: Infinity, delay: i * 0.3 }} />
      ))}
    </div>
  );
}
