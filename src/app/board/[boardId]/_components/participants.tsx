export function Participants() {
    return (
        <div className="absolute flex items-center top-2 right-2 h-12 px-1.5 rounded-md shadow-md bg-white">
            Lista de usuários
        </div>
    )
}

Participants.Skeleton = function ParticipantsSkeleton() {
    return (
        <div className="absolute flex items-center top-2 right-2 w-24 h-12 px-1.5 rounded-md shadow-md bg-white" />
    )
}