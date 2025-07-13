import type React from "react"
import {useQuery} from "@tanstack/react-query"
import {ProductCard} from "../../components/ProductCard/ProductCard.tsx";
import {fetchProducts} from "../../data.ts";
import "./HomePage.css"

export const HomePage: React.FC = () => {
    const {
        data,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts,
    })

    if (isLoading) return <div className="home__loading">Loading products...</div>
    if (error) return <div className="home__error">Error loading products</div>

    return (
        <div className="home">
            <div className="home__container">
                <h1 className="home__title">All products</h1>
                <div className="home__grid">
                    {data?.map((product) => (
                        <ProductCard key={product.id} product={product}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
