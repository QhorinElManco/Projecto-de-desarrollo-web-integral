import type {IProduct, IProductSize} from "./IProduct.ts";
import type {IShippingAddress} from "./cart.ts";

export type IOrderItem = Pick<IProduct, 'id' | 'title' | 'slug' | 'price'> & {
    image: string;
    quantity: number;
    size?: IProductSize;
}

export interface IOrder {
    id?: number;
    isPaid: boolean;
    orderItems: IOrderItem[];
    numberOfItems: number;
    paidAt?: string;
    paymentResult: string;
    shippingAddress: IShippingAddress;
    subtotal: number;
    tax: number;
    total: number;
    transactionId?: string;
}