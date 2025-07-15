import type {FC} from "react";

export const SearchError: FC = () => (
    <div className="search-results">
        <div className="search-results__container">
            <h1 className="search-results__title">Resultados de la búsqueda</h1>
            <div className="search-results__error">Error a buscar productos</div>
        </div>
    </div>
);