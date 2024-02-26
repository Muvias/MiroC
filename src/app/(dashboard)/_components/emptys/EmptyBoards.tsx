'use client'

import { Button } from "@/components/ui/button";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { useOrganization } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/router";
import { toast } from "sonner";
import { api } from "../../../../../convex/_generated/api";

export function EmptyBoards() {
    const { organization } = useOrganization()

    const { mutate: create, pending } = useApiMutation(api.board.create)

    const router = useRouter()

    function onClick() {
        if (!organization) return;

        create({
            orgId: organization.id,
            title: "Untitled",
        }).then((id) => {
            toast.success("Quadro criado")

            router.push(`/board/${id}`)
        }).catch(() => {
            toast.error("Falha ao criar o Quadro")
        })
    }

    return (
        <div className="h-full flex flex-col items-center justify-center">
            <Image
                src="/note.svg"
                alt="Bloco de notas"
                height={110}
                width={110}
            />
            <h2 className="text-2xl font-semibold mt-6">
                Crie seu primeiro Quadro!
            </h2>

            <p className="text-muted-foreground text-sm mt-2">
                Comece criando um quadro para sua organização
            </p>

            <div className="mt-6">
                <Button
                    size="lg"
                    onClick={onClick}
                    disabled={pending}
                >
                    Criar Quadro
                </Button>
            </div>
        </div>
    )
}
