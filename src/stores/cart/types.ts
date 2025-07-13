import type {ICartProduct, IShippingAddress} from "../../types/cart.ts";

export interface CartStore {
    addProductToCart: (product: ICartProduct) => void;
    cart: ICartProduct[];
    createOrder: () => Promise<{ hasError: boolean; message: string }>;
    deleteProductFromCart: (product: ICartProduct) => void;
    isLoaded: boolean;
    loadCart: () => void;
    loadShippingAddress: () => void;
    numberOfItems: number;
    shippingAddress?: IShippingAddress;
    subtotal: number;
    tax: number;
    total: number;
    updateOrderSummary: () => void;
    updateProductQuantity: (product: ICartProduct) => void;
    updateShippingAddress: (address: IShippingAddress) => void;
}

export interface IGetter {
    (): CartStore;
}

export interface ISetter {
    (partial: CartStore | Partial<CartStore> | {
        (state: CartStore): (CartStore | Partial<CartStore>)
    }, replace?: false | undefined): void;

    (state: CartStore | { (state: CartStore): CartStore }, replace: true): void;
}