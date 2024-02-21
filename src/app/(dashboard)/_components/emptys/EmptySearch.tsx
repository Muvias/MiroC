import Image from "next/image";

export function EmptySearch() {
    return (
        <div className="h-full flex flex-col items-center justify-center">
            <Image
                src="/empty-search.svg"
                alt="Resultado da pesquisa vazio"
                height={140}
                width={140}
            />
            <h2 className="text-2xl font-semibold mt-6">
                Nenhum resultado encontrado!
            </h2>

            <p className="text-muted-foreground text-sm mt-2">
                Tente pesquisar outra coisa
            </p>
        </div>
    )
}
