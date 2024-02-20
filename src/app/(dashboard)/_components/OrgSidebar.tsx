'use client'

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { LayoutDashboardIcon, StarIcon } from "lucide-react";
import { Poppins } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation";

const font = Poppins({
    subsets: ['latin'],
    weight: ['600']
});

export function OrgSidebar() {
    const searchParams = useSearchParams()
    const favorites = searchParams.get("favorites")

    return (
        <div className="hidden lg:flex flex-col w-[206px] pl-5 pt-5 space-y-6">
            <Link href='/'>
                <div className="flex items-center gap-x-2">
                    <Image
                        src='/logo.svg'
                        alt='Logo'
                        height={60}
                        width={60}
                    />

                    <span
                        className={cn("text-2xl font-semibold", font.className)}
                    >
                        MiroC
                    </span>
                </div>
            </Link>

            <OrganizationSwitcher
                hidePersonal
                appearance={{
                    elements: {
                        rootBox: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%"
                        },
                        organizationSwitcherTrigger: {
                            padding: "6px",
                            width: "100%",
                            borderRadius: "8px",
                            border: "1px solid #e5e7eb",
                            justifyContent: "space-between",
                            backgroundColor: "white"
                        }
                    }
                }}
            />

            <div className="w-full space-y-1">
                <Button
                    asChild
                    size='lg'
                    variant={favorites ? 'ghost' : 'secondary'}
                    className='font-normal justify-start w-full px-2'
                >
                    <Link href='/'>
                        <LayoutDashboardIcon className="h-4 w-4 mr-2" />

                        Quadros de equipe
                    </Link>
                </Button>

                <Button
                    asChild
                    size='lg'
                    variant={favorites ? 'secondary' : 'ghost'}
                    className='font-normal justify-start w-full px-2'
                >
                    <Link href={{
                        pathname: '/',
                        query: { favorites: true }
                    }}>
                        <StarIcon className="h-4 w-4 mr-2" />

                        Quadros favoritos
                    </Link>
                </Button>
            </div>
        </div>
    )
}
