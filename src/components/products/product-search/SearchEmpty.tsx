import type {FC} from "react";

export const SearchEmpty: FC = () => (
    <div className="search-results">
        <div className="search-results__container">
            <h1 className="search-results__title">Resultados de la búsqueda</h1>
            <p className="search-results__empty">Ingrese un término de búsqueda para encontrar productos.</p>
        </div>
    </div>
);