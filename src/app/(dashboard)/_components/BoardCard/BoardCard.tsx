'use client'

import Image from "next/image"
import Link from "next/link"
import { Overlay } from "./Overlay"
import { formatDistanceToNow } from "date-fns"
import { useAuth } from "@clerk/nextjs"
import { Footer } from "./Footer"

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
