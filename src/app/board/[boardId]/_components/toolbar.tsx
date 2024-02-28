import { CircleIcon, MousePointer2, PencilIcon, Redo2Icon, SquareIcon, StickyNoteIcon, TypeIcon, Undo2Icon } from "lucide-react";
import { ToolButton } from "./toolButton";

export function Toolbar() {
    return (
        <div className="absolute flex flex-col top-1/2 -translate-y-1/2 left-2 gap-y-4">
            <div className="flex flex-col items-center p-1.5 gap-y-1 rounded-md shadow-md bg-white">
                <ToolButton
                    label="Selecionar"
                    icon={MousePointer2}
                    isActive={true}
                    onClick={() => { }}
                />

                <ToolButton
                    label="Notas Adesivas"
                    icon={StickyNoteIcon}
                    isActive={false}
                    onClick={() => { }}
                />

                <ToolButton
                    label="Pincel"
                    icon={PencilIcon}
                    isActive={false}
                    onClick={() => { }}
                />

                <ToolButton
                    label="Texto"
                    icon={TypeIcon}
                    isActive={false}
                    onClick={() => { }}
                />

                <ToolButton
                    label="Retângulo"
                    icon={SquareIcon}
                    isActive={false}
                    onClick={() => { }}
                />

                <ToolButton
                    label="Círculo"
                    icon={CircleIcon}
                    isActive={false}
                    onClick={() => { }}
                />
            </div>

            <div className="flex flex-col items-center p-1.5 rounded-md shadow-md bg-white">
                <ToolButton
                    label="Desfazer"
                    icon={Undo2Icon}
                    isDisabled={true}
                    onClick={() => { }}
                />

                <ToolButton
                    label="Refazer"
                    icon={Redo2Icon}
                    isDisabled={true}
                    onClick={() => { }}
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
