import { CanvasMode, CanvasState, LayerType } from "@/types/canvas";

import { CircleIcon, MousePointer2, PencilIcon, Redo2Icon, SquareIcon, StickyNoteIcon, TypeIcon, Undo2Icon } from "lucide-react";
import { ToolButton } from "./toolButton";

interface ToolbarProps {
    canvasState: CanvasState
    setCanvasState: (newState: CanvasState) => void
    undo: () => void
    redo: () => void
    canUndo: boolean
    canRedo: boolean
}

export function Toolbar({ canvasState, setCanvasState, redo, undo, canRedo, canUndo }: ToolbarProps) {
    return (
        <div className="absolute flex flex-col top-1/2 -translate-y-1/2 left-2 gap-y-4">
            <div className="flex flex-col items-center p-1.5 gap-y-1 rounded-md shadow-md bg-white">
                <ToolButton
                    label="Selecionar"
                    icon={MousePointer2}
                    isActive={
                        canvasState.mode === CanvasMode.None ||
                        canvasState.mode === CanvasMode.Translating ||
                        canvasState.mode === CanvasMode.SelectionNet ||
                        canvasState.mode === CanvasMode.Pressing ||
                        canvasState.mode === CanvasMode.Resizing
                    }
                    onClick={() => setCanvasState({ mode: CanvasMode.None })}
                />

                <ToolButton
                    label="Notas Adesivas"
                    icon={StickyNoteIcon}
                    isActive={
                        canvasState.mode === CanvasMode.Inserting &&
                        canvasState.layerType === LayerType.Note
                    }
                    onClick={() => setCanvasState({
                        mode: CanvasMode.Inserting,
                        layerType: LayerType.Note
                    })}
                />

                <ToolButton
                    label="Pincel"
                    icon={PencilIcon}
                    isActive={canvasState.mode === CanvasMode.Pencil}
                    onClick={() => setCanvasState({ mode: CanvasMode.Pencil })}
                />

                <ToolButton
                    label="Texto"
                    icon={TypeIcon}
                    isActive={
                        canvasState.mode === CanvasMode.Inserting &&
                        canvasState.layerType === LayerType.Text
                    }
                    onClick={() => setCanvasState({
                        mode: CanvasMode.Inserting,
                        layerType: LayerType.Text
                    })}
                />

                <ToolButton
                    label="Retângulo"
                    icon={SquareIcon}
                    isActive={
                        canvasState.mode === CanvasMode.Inserting &&
                        canvasState.layerType === LayerType.Rectangle
                    }
                    onClick={() => setCanvasState({
                        mode: CanvasMode.Inserting,
                        layerType: LayerType.Rectangle
                    })}
                />

                <ToolButton
                    label="Círculo"
                    icon={CircleIcon}
                    isActive={
                        canvasState.mode === CanvasMode.Inserting &&
                        canvasState.layerType === LayerType.Ellipse
                    }
                    onClick={() => setCanvasState({
                        mode: CanvasMode.Inserting,
                        layerType: LayerType.Ellipse
                    })}
                />
            </div>

            <div className="flex flex-col items-center p-1.5 rounded-md shadow-md bg-white">
                <ToolButton
                    label="Desfazer"
                    icon={Undo2Icon}
                    isDisabled={!canUndo}
                    onClick={undo}
                />

                <ToolButton
                    label="Refazer"
                    icon={Redo2Icon}
                    isDisabled={!canRedo}
                    onClick={redo}
                />
            </div>
        </div>
    )
}

export function ToolbarSkeleton() {
    return (
        <div className="absolute flex flex-col top-1/2 -translate-y-1/2 left-2 h-[360px] w-[52px] gap-y-4 shadow-md rounded-md bg-white" />
    )
}
