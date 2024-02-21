import Image from "next/image";

export function EmptyFavorites() {
    return (
        <div className="h-full flex flex-col items-center justify-center">
            <Image
                src="/empty-favorites.svg"
                alt="Favoritos vazio"
                height={140}
                width={140}
            />
            <h2 className="text-2xl font-semibold mt-6">
                Nenhum quadro favoritado!
            </h2>

            <p className="text-muted-foreground text-sm mt-2">
                Tente favoritar algum quadro
            </p>
        </div>
    )
}
