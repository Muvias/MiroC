'use client'

import { useApiMutation } from "@/hooks/use-api-mutation"
import { useRenameModal } from "@/store/use-rename-modal"
import { FormEventHandler, useEffect, useState } from "react"
import { toast } from "sonner"
import { api } from "../../../convex/_generated/api"
import { Button } from "../ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "../ui/dialog"
import { Input } from "../ui/input"

export function RenameModal() {
    const { mutate: renomear, pending } = useApiMutation(api.board.update)

    const { isOpen, onClose, initialValues } = useRenameModal()

    const [title, setTitle] = useState(initialValues.title)

    useEffect(() => {
        setTitle(initialValues.title)
    }, [initialValues.title])

    const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()

        renomear({
            id: initialValues.id,
            title,
        })
            .then(() => {
                toast.success("Quadro renomeado!")

                onClose()
            })
            .catch(() => toast.error("Falha ao renomear o Quadro"))
    }

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

                <form
                    onSubmit={onSubmit}
                    className="space-y-4"
                >
                    <Input
                        value={title}
                        placeholder="Título do Quadro"
                        required
                        maxLength={60}
                        disabled={pending}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline" type="button">
                                Fechar
                            </Button>
                        </DialogClose>

                        <Button disabled={pending} type="submit">
                            Salvar
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
