import {type IProductSize, validSizes} from "@/types/IProduct.ts";

export const isValidProductSize = (value: string): value is IProductSize => {
    const checker: Set<string> = new Set(validSizes);
    return checker.has(value);
};
