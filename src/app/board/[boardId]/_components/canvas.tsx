"use client"

import { useCanRedo, useCanUndo, useHistory, useMutation } from "@/../liveblocks.config"
import { pointerEventToCanvasPoint } from "@/lib/utils"
import { Camera, CanvasMode, CanvasState } from "@/types/canvas"
import { useCallback, useState } from "react"
import { CursorsPresence } from "./cursorsPresence"
import { Info } from "./info"
import { Participants } from "./participants"
import { Toolbar } from "./toolbar"

interface CanvasProps {
    boardId: string
}

export function Canvas({ boardId }: CanvasProps) {
    const [canvasState, setCanvasState] = useState<CanvasState>({
        mode: CanvasMode.None
    })
    const [camera, setCamera] = useState<Camera>({ x: 0, y: 0 })

    const history = useHistory()
    const canUndo = useCanUndo()
    const canRedo = useCanRedo()

    const onWheel = useCallback((e: React.WheelEvent) => {
        setCamera((camera) => ({
            x: camera.x - e.deltaX,
            y: camera.y - e.deltaY
        }))
    }, [])

    const onPointerMove = useMutation(({ setMyPresence }, e: React.PointerEvent) => {
        e.preventDefault()

        const current = pointerEventToCanvasPoint(e, camera);

        setMyPresence({ cursor: current })
    }, [])

    return (
        <main className="w-full h-full relative bg-neutral-100 touch-none">
            <Info boardId={boardId} />

            <Participants />

            <Toolbar
                canvasState={canvasState}
                setCanvasState={setCanvasState}
                canUndo={canUndo}
                canRedo={canRedo}
                undo={history.undo}
                redo={history.redo}
            />

            <svg
                onWheel={onWheel}
                onPointerMove={onPointerMove}
                className="h-screen w-screen"
            >
                <g>
                    <CursorsPresence />
                </g>
            </svg>
        </main>
    )
}
