import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";
import Image from "next/image";

export function EmptyOrg() {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <Image
                src="/elements.svg"
                alt="Página de Quadros vazia"
                height={200}
                width={200}
            />

            <h2 className="text-2xl font-semibold mt-6">
                Bem vindo aos Quadros
            </h2>

            <p className="text-sm mt-2 text-muted-foreground">
                Crie uma organização para começar
            </p>

            <div className="mt-6">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button size='lg'>
                            Criar organização
                        </Button>
                    </DialogTrigger>

                    <DialogContent className="max-w-[480px] p-0 border-none bg-transparent">
                        <CreateOrganization />
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}
