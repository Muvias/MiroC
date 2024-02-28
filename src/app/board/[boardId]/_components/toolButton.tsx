"use client"

import { Hint } from "@/components/Hint"
import { Button } from "@/components/ui/button"
import { LucideIcon } from "lucide-react"

interface ToolButtonProps {
    label: string
    icon: LucideIcon
    isActive?: boolean
    isDisabled?: boolean
    onClick: () => void
}

export function ToolButton({ label, icon: Icon, isDisabled, isActive, onClick }: ToolButtonProps) {
    return (
        <Hint label={label} side="right" sideOffset={14}>
            <Button
                size="icon"
                variant={isActive ? "boardActive" : "board"}
                disabled={isDisabled}
                onClick={onClick}
            >
                <Icon />
            </Button>
        </Hint>
    )
}
