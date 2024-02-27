export function Info() {
    return (
        <div className="absolute flex items-center top-2 left-2 h-12 px-1.5 rounded-md shadow-md bg-white">
            informações sobre o quadro
        </div>
    )
}

Info.Skeleton = function infoSkeleton() {
    return (
        <div className="absolute flex items-center top-2 left-2 w-[300px] h-12 px-1.5 rounded-md shadow-md bg-white" />
    )
}
