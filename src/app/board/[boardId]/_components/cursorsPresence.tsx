'use client'

import { shallow } from "@liveblocks/client"
import { memo } from "react"
import { useOthersConnectionIds, useOthersMapped } from "../../../../../liveblocks.config"
import { Path } from "./Layers/path"
import { Cursor } from "./cursor"
import { colorToCss } from "@/lib/utils"

function Cursors() {
    const ids = useOthersConnectionIds()

    return (
        <>
            {ids.map((connectionId) => (
                <Cursor
                    key={connectionId}
                    connectionId={connectionId}
                />
            ))}
        </>
    )
}

function Drafts() {
    const others = useOthersMapped((other) => ({
        pencilDraft: other.presence.pencilDraft,
        penColor: other.presence.penColor
    }), shallow)

    return (
        <>
            {others.map(([key, other]) => {
                if (other.pencilDraft) {
                    return (
                        <Path
                            key={key}
                            points={other.pencilDraft}
                            fill={other.penColor ? colorToCss(other.penColor) : "#000"}
                            x={0}
                            y={0}
                        />
                    )
                }

                return null;
            })}
        </>
    )
}

export const CursorsPresence = memo(() => {
    return (
        <>
            <Drafts />
            <Cursors />
        </>
    )
})

CursorsPresence.displayName = "CursorsPresence"
