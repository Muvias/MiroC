"use cilent"

import { useApiMutation } from "@/hooks/use-api-mutation"
import { cn } from "@/lib/utils"
import { PlusIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { api } from "../../../../convex/_generated/api"

interface NewBoardButtonProps {
    orgId: string
    disabled?: boolean
}

export function NewBoardButton({ orgId, disabled }: NewBoardButtonProps) {
    const router = useRouter()

    const { mutate: create, pending } = useApiMutation(api.board.create)

    function onClick() {
        create({
            orgId,
            title: "Untitled"
        })
            .then((id) => {
                toast.success("Quadro criado!")

                router.push(`/board/${id}`)
            })
            .catch(() => toast.error("Falha ao criar o Quadro"))
    }

    return (
        <button
            onClick={onClick}
            disabled={pending || disabled}
            className={cn("flex flex-col items-center justify-center py-6 col-span-1 aspect-[100/127] rounded-lg bg-blue-600 hover:bg-blue-800 transition-colors",
                (pending || disabled) && "opacity-75 hover:bg-blue-600 cursor-not-allowed"
            )}
        >
            <div />
            <PlusIcon className="w-12 h-12 text-white stroke-1" />

            <p className="text-sm font-light text-white">
                Novo Quadro
            </p>
        </button>
    )
}
