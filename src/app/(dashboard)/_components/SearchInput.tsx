'use client'

import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import qs from "query-string"
import { ChangeEvent, useEffect, useState } from "react"
import { useDebounceValue } from "usehooks-ts"

export function SearchInput() {
    const router = useRouter()
    const [value, setValue] = useState("")
    const debouncedValue = useDebounceValue(value, 500)

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value)
    }

    useEffect(() => {
        const url = qs.stringifyUrl({
            url: "/",
            query: {
                search: debouncedValue[0]
            }
        }, { skipEmptyString: true, skipNull: true })

        router.push(url)
    }, [debouncedValue, router])


    return (
        <div className="w-full relative">
            <SearchIcon className="absolute top-1/2 -translate-y-1/2 left-3 h-4 w-4 transform text-muted-foreground" />

            <Input
                className="w-full max-w-lg pl-9"
                placeholder="Procurar quadro"
                onChange={handleChange}
                value={value}
            />
        </div>
    )
}
