import { Check } from "lucide-react";

import TituloSecao from "@/componentes/TituloSecao";
import { configuracaoSite as c } from "@/configuracao/site";

export default function SecaoRequisitos() {
  return (
    <section
      id="requisitos"
      className="py-20 sm:py-24"
      aria-labelledby="titulo-requisitos"
    >
      <div className="container-site">
        <div id="titulo-requisitos">
          <TituloSecao titulo="Requisitos do sistema" />
        </div>

        <ul className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
          {c.requisitos.map((requisito) => (
            <li
              key={requisito}
              className="flex items-center gap-3 rounded-2xl border border-violeta-100 bg-white p-4 text-sm font-medium text-tinta shadow-[0_2px_20px_-10px_rgba(106,69,240,0.12)] transition duration-300 hover:-translate-y-0.5 hover:border-violeta-500/30 hover:shadow-suave"
            >
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-violeta-100 text-violeta-600">
                <Check
                  size={15}
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
              </span>

              <span>{requisito}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
