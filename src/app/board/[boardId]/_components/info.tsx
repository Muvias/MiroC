'use client'

import { useQuery } from "convex/react"
import { api } from "../../../../../convex/_generated/api"
import { Id } from "../../../../../convex/_generated/dataModel"
import { Poppins } from "next/font/google"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Hint } from "@/components/Hint"
import { useRenameModal } from "@/store/use-rename-modal"
import { Actions } from "@/components/Actions"
import { MenuIcon } from "lucide-react"

interface InfoProps {
    boardId: string
}

const font = Poppins({
    subsets: ['latin'],
    weight: ['600']
})

function TabSeparator() {
    return (
        <span className="text-neutral-300 px-1.5">|</span>
    )
}

export function Info({ boardId }: InfoProps) {
    const { onOpen } = useRenameModal()

    const data = useQuery(api.board.get, {
        id: boardId as Id<"boards">
    })

    if (!data) return <InfoSkeleton />

    return (
        <div className="absolute flex items-center top-2 left-2 h-12 px-1.5 rounded-md shadow-md bg-white">
            <Hint label="Voltar para Quadros" side="bottom" sideOffset={10}>
                <Button
                    variant="board"
                    className="px-2"
                    asChild
                >
                    <Link href="/">
                        <Image
                            src="/logo.svg"
                            alt="Logo do Quadro"
                            width={40}
                            height={40}
                        />

                        <span className={cn("font-semibold text-xl ml-2 text-black", font.className)}>
                            MiroC
                        </span>
                    </Link>
                </Button>
            </Hint>

            <TabSeparator />

            <Hint label="Editar Título" side="bottom" sideOffset={10}>
                <Button
                    variant="board"
                    className="text-base font-medium px-2"
                    onClick={() => onOpen(data._id, data.title)}
                >
                    {data.title}
                </Button>
            </Hint>

            <TabSeparator />

            <Actions
                id={data._id}
                title={data.title}
                side="bottom"
                sideOffset={10}
            >
                <div>
                    <Hint label="Menu principal" side="bottom" sideOffset={10}>
                        <Button
                            size="icon"
                            variant="board"
                        >
                            <MenuIcon />
                        </Button>
                    </Hint>
                </div>
            </Actions>
        </div>
    )
}

export function InfoSkeleton() {
    return (
        <div className="absolute flex items-center top-2 left-2 w-[300px] h-12 px-1.5 rounded-md shadow-md bg-white" />
    )
}
