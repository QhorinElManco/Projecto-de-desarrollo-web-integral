export interface SearchStore {
    searchTerm: string
    setSearchTerm: (term: string) => void
    clearSearch: () => void
}