import type {IProduct} from "../../../types/IProduct.ts";
import type {FC} from "react";
import {ProductList} from "../product-list/ProductList.tsx";
import {Link} from "react-router-dom";

interface SearchResultsProps {
    searchTerm: string;
    products: IProduct[];
}

export const SearchResults: FC<SearchResultsProps> = ({searchTerm, products}) => (
    <div className="search-results">
        <div className="search-results__container">
            <h1 className="search-results__title">Resultados de búsqueda para "{searchTerm}"</h1>
            {products.length > 0 ? (
                <>
                    <p className="search-results__count">
                        Se encontrado {products.length} producto{products.length !== 1 ? "s" : ""}
                    </p>
                    <ProductList products={products}/>
                </>
            ) : (
                <div className="search-results__no-results">
                    <p>No se encuentran productos para "{searchTerm}"</p>
                    <p className="search-results__suggestion">
                        Intente buscar con diferentes palabras clave o navegar productos.
                    </p>
                    <Link to="/">Ir al inicio</Link>
                </div>
            )}
        </div>
    </div>
);