'use client'

import { UserButton } from "@clerk/nextjs"

interface NavbarProps { }

export function Navbar({ }: NavbarProps) {
    return (
        <div className="flex items-center p-5 gap-x-4">
            <div className="hidden lg:flex lg:flex-1">
                {/* searchbar */}
            </div>

            <UserButton />
        </div>
    )
}
