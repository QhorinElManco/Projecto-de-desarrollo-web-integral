import React, {useMemo, useState} from "react"
import {Link} from "react-router-dom"
import "./ProductCard.css"
import type {IProduct} from "@/types/IProduct.ts";

interface ProductCardProps {
    product: IProduct
}

export const ProductCard: React.FC<ProductCardProps> = ({product}) => {
    const [isHovered, setIsHovered] = useState(false);

    const productImage = useMemo(
        () => (isHovered ? `/products/${product.images[1]}` : `/products/${product.images[0]}`),
        [isHovered, product.images]
    );

    return (
        <Link
            to={`/product/${product.id}`}
            className="product-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="product-card__image">
                <img src={productImage} alt={product.title}/>
            </div>
            <div className="product-card__content">
                <h3 className="product-card__title">{product.title}</h3>
                <p className="product-card__price">${product.price}</p>
            </div>
        </Link>
    )
}
