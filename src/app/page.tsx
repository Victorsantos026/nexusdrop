import Cabecalho from "@/componentes/Cabecalho";
import Rodape from "@/componentes/Rodape";
import SecaoInicio from "@/secoes/SecaoInicio";
import SecaoFuncionalidades from "@/secoes/SecaoFuncionalidades";
import SecaoComoFunciona from "@/secoes/SecaoComoFunciona";
import SecaoDemonstracao from "@/secoes/SecaoDemonstracao";
import SecaoSeguranca from "@/secoes/SecaoSeguranca";
import SecaoDownload from "@/secoes/SecaoDownload";
import SecaoRequisitos from "@/secoes/SecaoRequisitos";
import SecaoPerguntas from "@/secoes/SecaoPerguntas";

export default function PaginaInicial() {
  return (
    <>
      <Cabecalho />
      <main>
        <SecaoInicio />
        <SecaoFuncionalidades />
        <SecaoComoFunciona />
        <SecaoDemonstracao />
        <SecaoSeguranca />
        <SecaoDownload />
        <SecaoRequisitos />
        <SecaoPerguntas />
      </main>
      <Rodape />
    </>
  );
}
