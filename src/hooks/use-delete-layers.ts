import { useMutation, useSelf } from "../../liveblocks.config";

export function useDeleteLayers() {
    const selection = useSelf((me) => me.presence.selection)

    return useMutation(({ storage, setMyPresence }) => {
        const liveLayers = storage.get("layers")
        const liveLayersId = storage.get("layerIds")

        for (const id of selection) {
            liveLayers.delete(id)

            const index = liveLayersId.indexOf(id)

            if (index !== -1) {
                liveLayersId.delete(index)
            }
        }

        setMyPresence({ selection: [] }, { addToHistory: true })
    }, [selection])
}