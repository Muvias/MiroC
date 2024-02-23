import { cn } from "@/lib/utils"
import { StarIcon } from "lucide-react"

interface FooterProps {
    title: string
    authorLabel: string
    createdAtLabel: string
    onClick: () => void
    isFavorite: boolean
    disabled: boolean
}

export function Footer({ title, authorLabel, createdAtLabel, disabled, isFavorite, onClick }: FooterProps) {

    return (
        <div className="relative p-3 bg-white">
            <p className="text-[13px] truncate max-w-[calc(100%-20px)]">
                {title}
            </p>

            <p className="text-[11px] text-muted-foreground truncate opacity-0 group-hover:opacity-100 transition-opacity">
                {authorLabel}, {createdAtLabel}
            </p>

            <button
                disabled={disabled}
                onClick={onClick}
                className={cn("absolute top-3 right-3 text-muted-foreground hover:text-blue-600 opacity-0 group-hover:opacity-100 transition",
                    disabled && "cursor-not-allowed opacity-75"
                )}
            >
                <StarIcon
                    className={cn("h-4 w-4", isFavorite && "fill-blue-600 text-blue-600")}
                />
            </button>
        </div>
    )
}
