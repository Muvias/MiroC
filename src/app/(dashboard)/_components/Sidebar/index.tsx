import { NewButton } from "./NewButton";
import { List } from "./list";

export function Sidebar() {
    return (
        <aside className="fixed flex flex-col h-full w-[60px] left-0 p-3 gap-y-4 z-[1] bg-blue-950 text-white">
            <List />
            <NewButton />
        </aside>
    )
}
