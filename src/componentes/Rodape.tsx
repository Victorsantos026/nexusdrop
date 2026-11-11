
import Image from "next/image";
import { Instagram } from "lucide-react";
import { configuracaoSite as c } from "@/configuracao/site";

export default function Rodape() {
  return (
    <footer className="border-t border-violeta-100 bg-white">
      <div className="container-site grid gap-10 py-12 md:grid-cols-[1.5fr_1fr_1fr]">

        {/* Identidade */}
        <div>
          <Image
            src="/assets/logo.png"
            alt={c.nome}
            width={160}
            height={52}
            className="h-auto w-40 object-contain object-left"
          />

          <p className="mt-4 max-w-sm text-sm leading-relaxed text-tinta/65">
            {c.slogan} Envie arquivos entre Windows e iPhone
            de forma segura.
          </p>

          <a
            href="https://www.instagram.com/victorsanttozz/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de Victor Santos"
            className="mt-5 inline-flex items-center gap-2 text-sm text-tinta/65 transition-colors hover:text-violeta-600"
          >
            <Instagram size={17} aria-hidden="true" />
            Desenvolvido por Victor Santos
          </a>
        </div>

        {/* Navegação */}
        <div>
          <p className="font-semibold text-tinta">Navegação</p>

          <ul className="mt-4 space-y-2 text-sm text-tinta/65">
            {c.navegacao.map((i) => (
              <li key={i.href}>
                <a
                  href={i.href}
                  className="transition-colors hover:text-violeta-600"
                >
                  {i.rotulo}
                </a>
              </li>
            ))}

            <li>
              <a
                href="#download"
                className="transition-colors hover:text-violeta-600"
              >
                Download
              </a>
            </li>
          </ul>
        </div>

        {/* Informações */}
        <div>
          <p className="font-semibold text-tinta">Informações</p>

          <p className="mt-4 text-sm text-tinta/65">
            Versão do software:{" "}
            <strong className="font-semibold text-tinta">
              {c.versao}
            </strong>
          </p>

          <p className="mt-2 text-sm text-tinta/65">
            Transferência rápida, simples e segura pela rede local.
          </p>
        </div>
      </div>

      {/* Direitos autorais */}
      <div className="border-t border-violeta-100 py-5 text-center text-xs text-tinta/55">
        © {new Date().getFullYear()} {c.nome}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
