"use client"

import { ClientSideSuspense } from "@liveblocks/react"
import { RoomProvider } from "../../liveblocks.config"

interface RoomProps {
    children: React.ReactNode
    roomId: string
    fallback: NonNullable<React.ReactNode> | null
}

export function Room({ children, roomId, fallback }: RoomProps) {
    return (
        <RoomProvider id={roomId} initialPresence={{ cursor: null }}>
            <ClientSideSuspense fallback={fallback}>
                {() => children}
            </ClientSideSuspense>
        </RoomProvider>
    )
}
