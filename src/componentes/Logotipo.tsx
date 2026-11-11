import { ArrowLeftRight } from "lucide-react";

export default function Logotipo({ tamanho = "md" }: { tamanho?: "md" | "lg" }) {
  const caixa = tamanho === "lg" ? "h-14 w-14 rounded-2xl" : "h-9 w-9 rounded-xl";
  const icone = tamanho === "lg" ? 28 : 18;
  return (
    <span className="inline-flex items-center gap-2.5">
      <span className={`gradiente-marca grid place-items-center text-white shadow-suave ${caixa}`}>
        <ArrowLeftRight size={icone} strokeWidth={2.5} aria-hidden />
      </span>
      <span className={`font-bold tracking-tight ${tamanho === "lg" ? "text-2xl" : "text-lg"}`}>NexusDrop</span>
    </span>
  );
}
