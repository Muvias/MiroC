import { LoaderIcon } from "lucide-react";
import { Info } from "./info";
import { Participants } from "./participants";
import { Toolbar } from "./toolbar";

export function Loading() {
    return (
        <main className="flex items-center justify-center w-full h-full relative bg-neutral-100 touch-none">
            <LoaderIcon className="h-6 w-6 text-muted-foreground animate-spin" />

            <Info.Skeleton />
            <Participants.Skeleton />
            <Toolbar.Skeleton />
        </main>
    )
}
