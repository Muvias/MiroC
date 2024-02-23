'use client'

import { Actions } from "@/components/Actions"
import { Skeleton } from "@/components/ui/skeleton"
import { useAuth } from "@clerk/nextjs"
import { formatDistanceToNow } from "date-fns"
import { MoreHorizontalIcon } from "lucide-react"

import Image from "next/image"
import Link from "next/link"

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

    const authorLabel = userId === authorId ? "Você" : authorName
    const createdAtLabel = formatDistanceToNow(createdAt, {
        addSuffix: true
    })

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
                    onClick={() => { }}
                    disabled={false}
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
