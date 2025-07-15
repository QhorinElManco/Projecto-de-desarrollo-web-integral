import {type FC, useEffect} from "react"
import {useSearchParams} from "react-router-dom"
import {useQuery} from "@tanstack/react-query"
import {useSearchStore} from "../../stores/search/search.store.ts";
import {SearchEmpty} from "../../components/products/product-search/SearchEmpty.tsx";

import "./SearchResultPage.css"
import {SearchLoading} from "../../components/products/product-search/SearchLoading.tsx";
import {SearchError} from "../../components/products/product-search/SearchError.tsx";
import {SearchResults} from "../../components/products/product-search/SearchResults.tsx";
import {searchProducts} from "../../services/productService.ts";


export const SearchResultPage: FC = () => {
    const [searchParams] = useSearchParams()
    const queryParam = searchParams.get("q") || ""
    const {searchTerm, setSearchTerm} = useSearchStore()

    useEffect(() => {
        if (queryParam && queryParam !== searchTerm) {
            setSearchTerm(queryParam)
        }
    }, [queryParam, searchTerm, setSearchTerm])

    const {
        data: products,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["search", searchTerm],
        queryFn: () => searchProducts(searchTerm),
        enabled: !!searchTerm,
    })

    if (!searchTerm) return <SearchEmpty/>
    if (isLoading) return <SearchLoading searchTerm={searchTerm}/>
    if (error) return <SearchError/>

    return (
        <SearchResults searchTerm={searchTerm} products={products || []}/>
    )
}
