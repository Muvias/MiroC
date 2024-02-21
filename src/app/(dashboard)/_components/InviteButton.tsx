import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { OrganizationProfile } from "@clerk/nextjs"
import { PlusIcon } from "lucide-react"

export function InviteButton() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant='outline'>
                    <PlusIcon className="w-4 h-4 mr-2" />
                    Convidar membros
                </Button>
            </DialogTrigger>

            <DialogContent className="max-w-[880px] p-0 bg-transparent border-none">
                <OrganizationProfile />
            </DialogContent>
        </Dialog>
    )
}
