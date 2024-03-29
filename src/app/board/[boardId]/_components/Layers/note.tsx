import { cn, colorToCss, getContrastingTextColor } from "@/lib/utils"
import { NoteLayer } from "@/types/canvas"
import { Kalam } from "next/font/google"
import ContentEditable, { ContentEditableEvent } from "react-contenteditable"
import { useMutation } from "../../../../../../liveblocks.config"

const font = Kalam({
    subsets: ["latin"],
    weight: ["400"]
})

function calculateFontSize(width: number, height: number) {
    const maxFontSize = 96
    const scaleFactor = 0.20
    const fontSizeBasedOnHeight = height * scaleFactor
    const fonSizeBasedOnWidth = width * scaleFactor

    return Math.min(fontSizeBasedOnHeight, fonSizeBasedOnWidth, maxFontSize)
}

interface NoteProps {
    id: string
    layer: NoteLayer
    onPointerDown: (e: React.PointerEvent, layerId: string) => void
    selectionColor?: string
}

export function Note({ id, layer, onPointerDown, selectionColor }: NoteProps) {
    const { x, y, width, height, fill, value } = layer

    const updateValue = useMutation(({ storage }, newValue: string) => {
        const liveLayers = storage.get("layers")

        liveLayers.get(id)?.set("value", newValue)
    }, [])

    function handleContentChange(e: ContentEditableEvent) {
        updateValue(e.target.value)
    }

    return (
        <foreignObject
            x={x}
            y={y}
            width={width}
            height={height}
            onPointerDown={(e) => onPointerDown(e, id)}
            className="shadow-md drop-shadow-lg"
            style={{
                fontSize: calculateFontSize(width, height),
                outline: selectionColor ? `1px solid ${selectionColor}` : "none",
                backgroundColor: fill ? colorToCss(fill) : "#000"
            }}
        >
            <ContentEditable
                html={value || "Text"}
                onChange={handleContentChange}
                className={cn("flex justify-center items-center h-full w-full outline-none text-center", font.className)}
                style={{
                    color: fill ? getContrastingTextColor(fill) : "#CCC"
                }}
            />
        </foreignObject>
    )
}

