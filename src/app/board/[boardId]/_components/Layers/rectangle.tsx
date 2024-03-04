import { colorToCss } from "@/lib/utils"
import { RectangleLayer } from "@/types/canvas"

interface RectangleProps {
    id: string
    layer: RectangleLayer
    onPointerDown: (e: React.PointerEvent, id: string) => void
    selectionColor?: string
}

export function Rectangle({ id, layer, onPointerDown, selectionColor }: RectangleProps) {
    const { x, y, width, height, fill } = layer

    return (
        <rect
            onPointerDown={(e) => onPointerDown(e, id)}
            className="drop-shadow-md"
            style={{
                transform: `translate(${x}px, ${y}px)`
            }}
            x={0}
            y={0}
            width={width}
            height={height}
            strokeWidth={1}
            fill={fill ? colorToCss(fill) : "#CCC"}
            stroke={selectionColor || "transparent"}
        />
    )
}
