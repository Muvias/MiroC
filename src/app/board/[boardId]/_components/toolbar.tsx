import { CircleIcon, PencilIcon, RedoIcon, SquareIcon, UndoIcon } from "lucide-react";

export function Toolbar() {
    return (
        <div className="absolute flex flex-col top-1/2 -translate-y-1/2 left-2 gap-y-4">
            <div className="flex flex-col items-center p-1.5 gap-y-1 rounded-md shadow-md bg-white">
                <div>
                    <PencilIcon />
                </div>

                <div>
                    <CircleIcon />
                </div>

                <div>
                    <SquareIcon />
                </div>
            </div>

            <div className="flex flex-col items-center p-1.5 rounded-md shadow-md bg-white">
                <div>
                    <UndoIcon />
                </div>

                <div>
                    <RedoIcon />
                </div>
            </div>
        </div>
    )
}

Toolbar.Skeleton = function ToolbarSkeleton() {
    return (
        <div className="absolute flex flex-col top-1/2 -translate-y-1/2 left-2 h-[360px] w-[52px] gap-y-4 shadow-md rounded-md bg-white" />
    )
}
