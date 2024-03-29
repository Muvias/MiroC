"use client"

import { memo } from "react"
import { useStorage } from "../../../../../liveblocks.config"
import { LayerType } from "@/types/canvas"
import { Rectangle } from "./Layers/rectangle"
import { Ellipse } from "./Layers/ellipse"
import { Text } from "./Layers/text"
import { Note } from "./Layers/note"
import { Path } from "./Layers/path"
import { colorToCss } from "@/lib/utils"

interface LayerPreviewProps {
    id: string
    onLayerPointerDown: (e: React.PointerEvent, layerId: string) => void
    selectionColor?: string
}

export const LayerPreview = memo(({ id, onLayerPointerDown, selectionColor }: LayerPreviewProps) => {
    const layer = useStorage((root) => root.layers.get(id))

    if (!layer) return null

    switch (layer.type) {
        case LayerType.Rectangle:
            return (
                <Rectangle
                    id={id}
                    layer={layer}
                    onPointerDown={onLayerPointerDown}
                    selectionColor={selectionColor}
                />
            )
        case LayerType.Ellipse:
            return (
                <Ellipse
                    id={id}
                    layer={layer}
                    onPointerDown={onLayerPointerDown}
                    selectionColor={selectionColor}
                />
            )
        case LayerType.Text:
            return (
                <Text
                    id={id}
                    layer={layer}
                    onPointerDown={onLayerPointerDown}
                    selectionColor={selectionColor}
                />
            )
        case LayerType.Note:
            return (
                <Note
                    id={id}
                    layer={layer}
                    onPointerDown={onLayerPointerDown}
                    selectionColor={selectionColor}
                />
            )
        case LayerType.Path:
            return (
                <Path
                    key={id}
                    points={layer.points}
                    x={layer.x}
                    y={layer.y}
                    fill={layer.fill ? colorToCss(layer.fill) : "#000"}
                    onPointerDown={(e) => onLayerPointerDown(e, id)}
                    stroke={selectionColor}
                />
            )
        default:
            console.log("LayerType desconhecido")

            return null
    }
})

LayerPreview.displayName = "LayerPreview"
