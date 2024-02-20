'use client'

import { Hint } from "@/components/Hint"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { CreateOrganization } from "@clerk/nextjs"
import { PlusIcon } from "lucide-react"

export function NewButton() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="aspect-square">
                    <Hint
                        label="Criar Organização"
                        side="right"
                        align="start"
                        sideOffset={18}
                    >
                        <button className="flex items-center justify-center w-full h-full rounded-md bg-white/25 opacity-60 hover:opacity-100 transition">
                            <PlusIcon className="text-white" />
                        </button>
                    </Hint>
                </div>
            </DialogTrigger>

            <DialogContent className="max-w-[480px] p-0 border-none bg-transparent">
                <CreateOrganization />
            </DialogContent>
        </Dialog>
    )
}
