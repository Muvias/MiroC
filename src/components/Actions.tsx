"use client"

import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "./ui/dropdown-menu"
import { Link2, Link2Icon, PencilIcon, Trash2Icon } from "lucide-react"
import { toast } from "sonner"
import { useApiMutation } from "@/hooks/use-api-mutation"
import { api } from "../../convex/_generated/api"
import { ConfirmModal } from "./ConfirmModal"
import { Button } from "./ui/button"
import { useRenameModal } from "@/store/use-rename-modal"

interface ActionsProps {
    children: React.ReactNode
    id: string
    title: string
    side?: DropdownMenuContentProps["side"]
    sideOffset?: DropdownMenuContentProps["sideOffset"]
}

export function Actions({ children, side, sideOffset, id, title }: ActionsProps) {
    const { onOpen } = useRenameModal()
    const { mutate: deleteBoard, pending } = useApiMutation(api.board.remove)

    function onCopyLink() {
        navigator.clipboard.writeText(
            `${window.location.origin}/board/${id}`
        )
            .then(() => toast.success("Link copiado!"))
            .catch(() => toast.error("Falha ao copiar o link"))
    }

    function onDelete() {
        deleteBoard({ id })
            .then(() => toast.success("Quadro deletado!"))
            .catch(() => toast.error("Falha ao deletar o Quadro"))
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {children}
            </DropdownMenuTrigger>

            <DropdownMenuContent
                onClick={(e) => e.stopPropagation()}
                side={side}
                sideOffset={sideOffset}
                className="w-60"
            >
                <DropdownMenuItem
                    onClick={onCopyLink}
                    className="p-3 cursor-pointer"
                >
                    <Link2Icon className="h-4 w-4 mr-2" />
                    Copiar Link
                </DropdownMenuItem>

                <DropdownMenuItem
                    onClick={() => onOpen(id, title)}
                    className="p-3 cursor-pointer"
                >
                    <PencilIcon className="h-4 w-4 mr-2" />
                    Renomear
                </DropdownMenuItem>

                <ConfirmModal
                    header="Deletar Quadro?"
                    description="Isso deletará o quadro e todo o seu conteúdo para sempre."
                    disabled={pending}
                    onConfirm={onDelete}
                >
                    <Button
                        variant="ghost"
                        className="justify-start w-full p-3 text-sm font-normal"
                    >
                        <Trash2Icon className="h-4 w-4 mr-2" />
                        Deletar
                    </Button>
                </ConfirmModal>
            </DropdownMenuContent>
        </DropdownMenu >
    )
}
