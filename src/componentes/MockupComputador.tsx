import { ImagePlus } from "lucide-react";

type Props = { 
  titulo: string; 
  imagem?: string; 
  className?: string 
};

/** Moldura de computador com ajuste para exibir a imagem inteira sem cortes. */
export default function MockupComputador({ 
  titulo, 
  imagem = "/assets/tela.png", 
  className = "" 
}: Props) {
  return (
    <figure className={className}>
      <div className="rounded-2xl bg-tinta p-2 shadow-tela">
        <div className="mb-1.5 flex gap-1.5 px-2 pt-1" aria-hidden>
          <span className="h-2 w-2 rounded-full bg-white/30" />
          <span className="h-2 w-2 rounded-full bg-white/30" />
          <span className="h-2 w-2 rounded-full bg-white/30" />
        </div>
        <div className="aspect-[16/10] overflow-hidden rounded-lg bg-violeta-50 flex items-center justify-center">
          {imagem ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img 
              src={imagem} 
              alt={`Captura de tela: ${titulo}`} 
              className="h-full w-full object-contain" 
              loading="lazy" 
            />
          ) : (
            <div className="grid h-full place-items-center border-2 border-dashed border-violeta-500/30 p-4 text-center text-violeta-700">
              <div>
                <ImagePlus className="mx-auto" size={28} aria-hidden />
                <p className="mt-2 text-sm font-semibold">[ Placeholder ]</p>
                <p className="text-xs opacity-80">Inserir captura real: {titulo}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="mx-auto h-3 w-1/3 rounded-b-xl bg-gradient-to-b from-slate-300 to-slate-200" aria-hidden />
      <figcaption className="mt-3 text-center text-sm font-medium text-tinta/70">{titulo}</figcaption>
    </figure>
  );
}