export default function TituloSecao({ titulo, texto, centralizado = true }: { titulo: string; texto?: string; centralizado?: boolean }) {
  return (
    <div className={centralizado ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{titulo}</h2>
      {texto && <p className="mt-4 text-lg leading-relaxed text-tinta/65">{texto}</p>}
    </div>
  );
}
