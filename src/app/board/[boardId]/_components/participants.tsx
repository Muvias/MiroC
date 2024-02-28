'use client'

import { connectionIdToColor } from "@/lib/utils";
import { useOthers, useSelf } from "../../../../../liveblocks.config"
import { UserAvatar } from "./userAvatar"

const MAX_SHOWN_USERS = 1;

export function Participants() {
    const users = useOthers()
    const currentUser = useSelf()

    const hasMoreUsers = users.length > MAX_SHOWN_USERS

    return (
        <div className="absolute flex items-center top-2 right-2 h-12 px-1.5 rounded-md shadow-md bg-white">
            <div className="flex gap-x-2">
                {users.slice(0, MAX_SHOWN_USERS)
                    .map(({ connectionId, info }) => {
                        return (
                            <UserAvatar
                                key={connectionId}
                                src={info?.picture}
                                name={info?.name}
                                fallback={info?.name?.[0] || "A"}
                                borderColor={connectionIdToColor(connectionId)}
                            />
                        )
                    })
                }

                {currentUser && (
                    <UserAvatar
                        src={currentUser.info?.picture}
                        name={`${currentUser.info?.name} (Você)`}
                        fallback={currentUser.info?.name?.[0]}
                        borderColor={connectionIdToColor(currentUser.connectionId)}
                    />
                )}

                {hasMoreUsers && (
                    <UserAvatar
                        name={`Mais ${users.length - MAX_SHOWN_USERS}`}
                        fallback={`+${users.length - MAX_SHOWN_USERS}`}
                    />
                )}
            </div>
        </div>
    )
}

export function ParticipantsSkeleton() {
    return (
        <div className="absolute flex items-center top-2 right-2 w-24 h-12 px-1.5 rounded-md shadow-md bg-white" />
    )
}