import {create} from "zustand"
import type {SearchStore} from "./types.ts";


export const useSearchStore = create<SearchStore>((set) => ({
    searchTerm: "",
    setSearchTerm: (term) => set({searchTerm: term}),
    clearSearch: () => set({searchTerm: ""}),
}))
