"use client"

import { useDeleteLayers } from "@/hooks/use-delete-layers"
import { useSelectionBounds } from "@/hooks/use-selection-bounds"
import { Camera, Color } from "@/types/canvas"
import { memo } from "react"
import { useMutation, useSelf } from "../../../../../liveblocks.config"
import { ColorPicker } from "./ColorPicker"
import { Button } from "@/components/ui/button"
import { Hint } from "@/components/Hint"
import { BringToFrontIcon, SendToBackIcon, Trash2Icon } from "lucide-react"

interface SelectionToolsProps {
    camera: Camera
    setLastUsedColor: (color: Color) => void
}

export const SelectionTools = memo(({ camera, setLastUsedColor }: SelectionToolsProps) => {
    const selection = useSelf((me) => me.presence.selection)

    const deleteLayers = useDeleteLayers()

    const moveToFront = useMutation(({ storage }) => {
        const liveLayerIds = storage.get("layerIds")
        const indices: number[] = []

        const arr = liveLayerIds.toImmutable()

        for (let i = 0; i < arr.length; i++) {
            if (selection.includes(arr[i])) {
                indices.push(i)
            }
        }

        for (let i = indices.length - 1; i >= 0; i--) {
            liveLayerIds.move(indices[i], arr.length - 1 - (indices.length - 1 - i))
        }

    }, [selection])

    const moveToBack = useMutation(({ storage }) => {
        const liveLayerIds = storage.get("layerIds")
        const indices: number[] = []

        const arr = liveLayerIds.toImmutable()

        for (let i = 0; i < arr.length; i++) {
            if (selection.includes(arr[i])) {
                indices.push(i)
            }
        }

        for (let i = 0; i < indices.length; i++) {
            liveLayerIds.move(indices[i], i)
        }

    }, [selection])

    const setFill = useMutation(({ storage }, fill: Color) => {
        const liveLayers = storage.get("layers")

        setLastUsedColor(fill)
        selection.forEach((id) => {
            liveLayers.get(id)?.set("fill", fill)
        })
    }, [selection, setLastUsedColor])

    const selectionBounds = useSelectionBounds()

    if (!selectionBounds) return null;

    const x = selectionBounds.width / 2 + selectionBounds.x + camera.x
    const y = selectionBounds.y + camera.y

    return (
        <div
            className="absolute flex p-3 rounded-xl border shadow-sm select-none bg-white"
            style={{
                transform: `translate(
                    calc(${x}px - 50%),
                    calc(${y - 16}px - 100%)
                )`
            }}
        >
            <ColorPicker
                onChange={setFill}
            />

            <div className="flex flex-col gap-y-0.5">
                <Hint label="Mover para frente">
                    <Button variant="board" size="icon" onClick={moveToFront}>
                        <BringToFrontIcon />
                    </Button>
                </Hint>

                <Hint label="Mover para trás" side="bottom">
                    <Button variant="board" size="icon" onClick={moveToBack}>
                        <SendToBackIcon />
                    </Button>
                </Hint>
            </div>

            <div className="flex items-center pl-2 ml-2 border-l border-neutral-200">
                <Hint label="Deletar">
                    <Button variant="board" size="icon" onClick={deleteLayers}>
                        <Trash2Icon />
                    </Button>
                </Hint>
            </div>
        </div>
    )
})

SelectionTools.displayName = "SelectionTools"
