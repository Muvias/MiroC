'use client'

import { useRenameModal } from "@/store/use-rename-modal"
import {
    Dialog,
    DialogContent,
    DialogClose,
    DialogDescription,
    DialogFooter,
    DialogTitle,
    DialogHeader
} from "../ui/dialog"

export function RenameModal() {
    const { isOpen, onClose, initialValues } = useRenameModal()

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Editar títudo do Quadro
                    </DialogTitle>
                </DialogHeader>

                <DialogDescription>
                    Insira um novo nome para este Quadro
                </DialogDescription>
            </DialogContent>
        </Dialog>
    )
}
