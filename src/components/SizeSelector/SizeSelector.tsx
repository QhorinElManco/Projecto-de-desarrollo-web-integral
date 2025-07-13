import {type IProductSize} from "@/types/IProduct.ts";
import type {FC} from "react";
import {isValidProductSize} from "@utils/typeValidations.ts";
import {ValidationError} from "@utils/errors.ts";
import "./SizeSelector.css";

interface Props {
    selectedSize?: IProductSize;
    sizes: IProductSize[];
    onSelectedSize: (size: IProductSize) => void;
}

export const SizeSelector: FC<Props> = ({
                                            selectedSize,
                                            sizes,
                                            onSelectedSize,
                                        }) => {
    const onChange = (value: string) => {
        if (!isValidProductSize(value)) {
            throw new ValidationError(`Invalid size: ${value}`);
        }
        onSelectedSize(value);
    };

    return (
        <div className="product-detail__size-options">
            {
                sizes.map((size) => (
                    <button
                        key={size}
                        className={`product-detail__size-option ${
                            selectedSize === size ? "product-detail__size-option--selected" : ""
                        }`}
                        onClick={() => onChange(size)}
                    >
                        {size}
                    </button>
                ))
            }
        </div>

    );
};