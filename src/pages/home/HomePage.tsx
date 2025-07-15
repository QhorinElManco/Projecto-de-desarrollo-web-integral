import type React from "react"
import {useQuery} from "@tanstack/react-query"
import "./HomePage.css"
import {ProductList} from "../../components/products/product-list/ProductList.tsx";
import {fetchProducts} from "../../services/productService.ts";

export const HomePage: React.FC = () => {
    const {
        data,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts,
    })

    if (isLoading) return <div className="home__loading">Cargando productos...</div>
    if (error) return <div className="home__error">Error de carga de productos</div>

    return (
        <div className="home">
            <div className="home__container">
                <h1 className="home__title">Todos los productos</h1>
                <ProductList products={data || []}/>
            </div>
        </div>
    )
}
