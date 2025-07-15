import React from "react"
import {useParams} from "react-router-dom"
import {useQuery} from "@tanstack/react-query"
import "./ProductDetailPage.css"
import {useProductDetails} from "../../hooks/useProductDetails.ts";
import {Carousel} from "../../components/UI/carousel/Carousel.tsx";
import {SizeSelector} from "../../components/products/size-selector/SizeSelector.tsx";
import {ItemCounter} from "../../components/UI/item-counter/ItemCounter.tsx";
import {fetchProductById} from "../../services/productService.ts";

export const ProductDetailPage: React.FC = () => {
    const {id} = useParams<{ id: string }>()
    const {
        tempCartProduct,
        handleSizeChange,
        handleQuantityChange,
        handleAddToCart
    } = useProductDetails(id)

    const {
        data,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["product", id],
        queryFn: () => fetchProductById(parseInt(id!, 10)),
        enabled: !!id,
    })

    if (isLoading) return <div className="product-detail__loading">Cargando...</div>
    if (error || !data || !tempCartProduct) return <div className="product-detail__error">Producto no encontrado</div>

    return (
        <div className="product-detail">
            <div className="product-detail__container">
                <div className="product-detail__image">
                    <Carousel images={data.images}/>
                </div>

                <div className="product-detail__info">
                    <h1 className="product-detail__title">{data.title}</h1>
                    <p className="product-detail__price">${data.price}</p>

                    <div className="product-detail__size">
                        <h3 className="product-detail__size-title">Size</h3>
                        <SizeSelector
                            selectedSize={tempCartProduct.size}
                            sizes={data.sizes}
                            onSelectedSize={handleSizeChange}
                        />
                    </div>

                    <div className="product-detail__quantity">
                        <h3 className="product-detail__quantity-title">Cantidad</h3>
                        <ItemCounter
                            maxValue={data.inStock}
                            currentValue={tempCartProduct.quantity}
                            onChangeQuantity={handleQuantityChange}
                        />
                    </div>

                    {data.inStock > 0 ? (
                        <button onClick={handleAddToCart} className="product-detail__add-btn">
                            {tempCartProduct.size ? "Add to cart" : "Select a size"}
                        </button>
                    ) : (
                        <button className={"product-detail__add-btn product-detail__add-btn--disabled"}>
                            No disponible
                        </button>
                    )}
                    <div className="product-detail__description">
                        <h3 className="product-detail__description-title">Descripción</h3>
                        <p className="product-detail__description-text">{data.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
