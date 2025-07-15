import type {FC} from "react";
import type {IProduct} from "../../../types/IProduct.ts";
import {ProductCard} from "../product-card/ProductCard.tsx";

import "./ProductList.css";

interface ProductListProps {
    products: IProduct[];
}

export const ProductList: FC<ProductListProps> = ({products}) => {
    return (
        <div className="product-list__grid">
            {products?.map((product) => (
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    );
};