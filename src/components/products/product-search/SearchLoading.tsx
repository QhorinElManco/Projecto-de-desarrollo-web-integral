import type {FC} from "react";

interface SearchLoadingProps {
    searchTerm: string;
}

export const SearchLoading: FC<SearchLoadingProps> = ({searchTerm}) => (
    <div className="search-results">
        <div className="search-results__container">
            <h1 className="search-results__title">Buscando...</h1>
            <div className="search-results__loading">Cargando resultados para "{searchTerm}" ...</div>
        </div>
    </div>
);