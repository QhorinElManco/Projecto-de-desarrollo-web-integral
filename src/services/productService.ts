import type {IProduct} from "../types/IProduct.ts";
import {mockProducts} from "../data.ts";

export const fetchProducts = async (): Promise<IProduct[]> => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    return mockProducts
}
export const fetchProductById = async (id: IProduct["id"]): Promise<IProduct | undefined> => {
    await new Promise((resolve) => setTimeout(resolve, 300))
    return mockProducts.find((product) => product.id === id)
}
export const searchProducts = async (searchTerm: string): Promise<IProduct[]> => {
    await new Promise((resolve) => setTimeout(resolve, 300))

    if (!searchTerm.trim()) {
        return mockProducts
    }

    const lowercaseSearch = searchTerm.toLowerCase()
    return mockProducts.filter(
        (product) =>
            product.title.toLowerCase().includes(lowercaseSearch) ||
            product.description.toLowerCase().includes(lowercaseSearch),
    )
}