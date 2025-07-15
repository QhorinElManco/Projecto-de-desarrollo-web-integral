import {useState, useEffect} from 'react'
import {useQuery} from "@tanstack/react-query"
import {useNavigate} from "react-router-dom";
import {useCartStore} from "../stores/cart";
import type {ICartProduct} from "../types/cart.ts";
import type {IProductSize} from "../types/IProduct.ts";
import {fetchProductById} from "../services/productService.ts";

export const useProductDetails = (id: string | undefined) => {
    const navigate = useNavigate();
    const [tempCartProduct, setTempCartProduct] = useState<ICartProduct | null>(null);
    const addProductToCart = useCartStore(state => state.addProductToCart);

    const {data} = useQuery({
        queryKey: ["product", id],
        queryFn: () => fetchProductById(parseInt(id!, 10)),
        enabled: !!id,
    });

    useEffect(() => {
        if (!data) return
        setTempCartProduct({
            id: data.id,
            image: data.images[0],
            price: data.price,
            size: undefined,
            slug: data.slug,
            title: data.title,
            gender: data.gender,
            quantity: 1,
        })
    }, [data]);

    const handleSizeChange = (size: IProductSize) => {
        if (!tempCartProduct) return
        setTempCartProduct({
            ...tempCartProduct,
            size
        })
    }

    const handleQuantityChange = (quantity: number) => {
        if (!tempCartProduct) return
        setTempCartProduct({
            ...tempCartProduct,
            quantity
        })
    }

    const handleAddToCart = () => {
        if (!tempCartProduct || !tempCartProduct?.size) return
        addProductToCart(tempCartProduct)
        navigate('/cart')
    }

    return {
        tempCartProduct,
        handleSizeChange,
        handleQuantityChange,
        handleAddToCart
    }
}