import { Room } from "@/components/Room";
import { Canvas } from "./_components/canvas";
import { Loading } from "./_components/loading";

interface PageProps {
    params: {
        boardId: string
    }
}

export default function Page({ params }: PageProps) {
    return (
        <Room roomId={params.boardId} fallback={<Loading />}>
            <Canvas boardId={params.boardId} />
        </Room>
    )
}
