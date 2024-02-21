import { EmptyBoards } from "./emptys/EmptyBoards";
import { EmptyFavorites } from "./emptys/EmptyFavorites";
import { EmptySearch } from "./emptys/EmptySearch";

interface BoardListProps {
    orgId: string
    query: {
        search?: string
        favorites?: string
    }
}

export function BoardList({ orgId, query }: BoardListProps) {
    const data = [];

    if (!data.length && query.search) return <EmptySearch />

    if (!data.length && query.favorites) return <EmptyFavorites />

    if (!data.length) return <EmptyBoards />

    return (
        <div>

        </div>
    )
}
