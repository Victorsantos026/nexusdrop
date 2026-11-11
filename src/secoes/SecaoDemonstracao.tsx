import TituloSecao from "@/componentes/TituloSecao";
import Revelar from "@/componentes/Revelar";
import MockupComputador from "@/componentes/MockupComputador";

export default function SecaoDemonstracao() {
  return (
    <section id="demonstracao" className="py-20 sm:py-28">
      <div className="container-site">
        <TituloSecao 
          titulo="Conheça o NexusDrop por dentro." 
          texto="Captura real da interface do programa para Windows." 
        />
        
        {/* Renderiza apenas UMA tela centralizada */}
        <Revelar className="mx-auto mt-14 max-w-3xl">
          <MockupComputador 
            titulo="Visão geral do NexusDrop" 
            imagem="/assets/tela.png" 
          />
        </Revelar>
      </div>
    </section>
  );
}