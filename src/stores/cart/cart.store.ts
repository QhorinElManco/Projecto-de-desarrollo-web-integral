import {create} from "zustand/react";
import Cookies from 'js-cookie'
import type {CartStore, IGetter, ISetter} from "./types";
import type {ICartProduct, IShippingAddress} from "../../types/cart.ts";
import {InvalidShippingAddress} from "../../utils/errors.ts";
import {cookieHelper} from "../../utils/cookieHelper.ts";

export const useCartStore = create<CartStore>()((set, get) => ({
    addProductToCart: addProductToCart(get, set),
    cart: [],
    isLoaded: false,
    loadCart: loadCart(get, set),
    numberOfItems: 0,
    shippingAddress: undefined,
    subtotal: 0,
    tax: 0,
    total: 0,
    updateOrderSummary: updateOrderSummary(get, set),
    createOrder: createOrder(get, set),
    deleteProductFromCart: deleteProductFromCart(get, set),
    loadShippingAddress: loadShippingAddress(set),
    updateProductQuantity: updateProductQuantity(get, set),
    updateShippingAddress: updateShippingAddress(set),

}));

// Inicialización automática
if (typeof window !== 'undefined') {
    useCartStore.getState().loadCart();
    useCartStore.getState().loadShippingAddress();
}

function addProductToCart(get: IGetter, set: ISetter) {
    return (product: ICartProduct) => {
        const {cart} = get();
        const isProductInCart = cart.find(p => p.id === product.id);

        if (!isProductInCart) {
            set({cart: [...cart, product]});
            Cookies.set('cart', JSON.stringify([...cart, product]));
            get().updateOrderSummary();
            return;
        }

        const productInCartSameSize = cart.find(p => p.id === product.id && p.size === product.size);

        if (productInCartSameSize) {
            const updatedCart = cart.map((productInCart) => {
                if (productInCart.id === product.id && productInCart.size === product.size) {
                    return {
                        ...productInCart,
                        quantity: productInCart.quantity + product.quantity,
                    };
                }
                return productInCart;
            });
            set({cart: updatedCart});
            Cookies.set('cart', JSON.stringify(updatedCart));
            get().updateOrderSummary();
            return;
        }
        set({cart: [...cart, product]});
        Cookies.set('cart', JSON.stringify([...cart, product]));
        get().updateOrderSummary();
    };
}

function updateOrderSummary(get: IGetter, set: ISetter) {
    return () => {
        const {cart} = get();
        const taxRate = Number(import.meta.env.VITE_TAX_RATE || 0);
        const numberOfItems = cart.reduce((prev, current) => current.quantity + prev, 0);
        const subtotal = cart.reduce(
            (prev, current) => current.price * current.quantity + prev,
            0
        );

        set({
            numberOfItems,
            subtotal,
            tax: subtotal * taxRate,
            total: subtotal * (1 + taxRate),
        });
    };
}

function loadCart(get: IGetter, set: ISetter) {
    return () => {
        const cookiesProducts = Cookies.get('cart');
        const products: ICartProduct[] = cookiesProducts ? JSON.parse(cookiesProducts) : [];
        set({cart: products, isLoaded: true});
        get().updateOrderSummary();
    };
}

function createOrder(get: IGetter, set: ISetter) {
    return async () => {
        // const {shippingAddress, numberOfItems, cart, subtotal, tax, total} = get();
        const {shippingAddress} = get();


        if (!shippingAddress) {
            throw new InvalidShippingAddress('Shipping address is not defined');
        }

        // const body: IOrder = {
        //     isPaid: false,
        //     numberOfItems,
        //     orderItems: cart.map((product) => ({...product, size: product.size})),
        //     shippingAddress,
        //     subtotal,
        //     tax,
        //     total,
        //     paymentResult: 'pending',
        // };

        // TODO: Hacer queryMutation con TanStack Query
        // try {
        //     const {data} = await tesloAPI.post<IOrder>('/orders', body);
        set({
            cart: [],
            numberOfItems: 0,
            subtotal: 0,
            tax: 0,
            total: 0,
        });
        //     Cookies.set('cart', JSON.stringify([]));
        //     return {
        //         hasError: false,
        //         message: data.id!,
        //     };
        // } catch (error) {
        //     if (axios.isAxiosError(error)) {
        //         return {
        //             hasError: true,
        //             message: error.response?.data?.message,
        //         };
        //     }
        //     return {
        //         hasError: true,
        //         message: 'Error not handled, please contact the administrator',
        //     };
        // }
        return {
            hasError: true,
            message: 'Order ',
        };
    };
}

function deleteProductFromCart(get: IGetter, set: ISetter) {
    return (product: ICartProduct) => {
        const {cart} = get();
        const updatedCart = cart.filter(
            (p) => !(p.id === product.id && p.size === product.size)
        );

        set({cart: updatedCart});
        Cookies.set('cart', JSON.stringify(updatedCart));
        get().updateOrderSummary();
    };
}

function loadShippingAddress(set: ISetter) {
    return () => {
        const shippingAddress = cookieHelper.getAddressFromCookies();
        set({shippingAddress});
    };
}

function updateProductQuantity(get: IGetter, set: ISetter) {
    return (product: ICartProduct) => {
        const {cart} = get();
        const updatedCart = cart.map((p) => {
            if (p.id === product.id && p.size === product.size) {
                return product;
            }
            return p;
        });

        set({cart: updatedCart});
        Cookies.set('cart', JSON.stringify(updatedCart));
        get().updateOrderSummary();
    };
}

function updateShippingAddress(set: ISetter) {
    return (address: IShippingAddress) => {
        cookieHelper.saveAddressToCookies(address);
        set({shippingAddress: address});
    };
}