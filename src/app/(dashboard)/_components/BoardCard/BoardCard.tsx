'use client'

import { Actions } from "@/components/Actions"
import { Skeleton } from "@/components/ui/skeleton"
import { useAuth } from "@clerk/nextjs"
import { formatDistanceToNow } from "date-fns"
import { MoreHorizontalIcon } from "lucide-react"

import Image from "next/image"
import Link from "next/link"

import { useApiMutation } from "@/hooks/use-api-mutation"
import { toast } from "sonner"
import { api } from "../../../../../convex/_generated/api"
import { Footer } from "./Footer"
import { Overlay } from "./Overlay"

interface BoardCardProps {
    id: string
    title: string
    imageUrl: string
    authorId: string
    authorName: string
    createdAt: number
    orgId: string
    isFavorite: boolean
}

export function BoardCard({ authorId, authorName, createdAt, id, imageUrl, isFavorite, orgId, title }: BoardCardProps) {
    const { userId } = useAuth()

    const { mutate: onFavorite, pending: pendingFavorite } = useApiMutation(api.board.favorite)
    const { mutate: onUnfavorite, pending: pendingUnfavorite } = useApiMutation(api.board.unfavorite)

    const authorLabel = userId === authorId ? "Você" : authorName
    const createdAtLabel = formatDistanceToNow(createdAt, {
        addSuffix: true
    })

    function toogleFavorite() {
        if (isFavorite) {
            onUnfavorite({ id })
                .catch(() => toast.error("Falha ao remover de favoritos."))
        } else {
            onFavorite({ id, orgId })
                .catch(() => toast.error("Falha ao favoritar."))
        }
    }

    return (
        <Link
            href={`/board/${id}`}
        >
            <div className="group flex flex-col justify-between aspect-[100/127] border rounded-lg overflow-hidden">
                <div className="relative flex-1 bg-amber-50">
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-fit"
                    />

                    <Overlay />

                    <Actions
                        id={id}
                        title={title}
                        side="right"
                    >
                        <button
                            className="absolute top-1 right-1 px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity outline-none"
                        >
                            <MoreHorizontalIcon className="text-white opacity-75 hover:opacity-100 transition-opacity" />
                        </button>
                    </Actions>
                </div>

                <Footer
                    isFavorite={isFavorite}
                    title={title}
                    authorLabel={authorLabel}
                    createdAtLabel={createdAtLabel}
                    onClick={toogleFavorite}
                    disabled={pendingFavorite || pendingUnfavorite}
                />
            </div>
        </Link>
    )
}

BoardCard.Skeleton = function BoardCardSkeleton() {
    return (
        <div className="aspect-[100/127] rounded-lg overflow-hidden">
            <Skeleton className="h-full w-full" />
        </div>
    )
}
