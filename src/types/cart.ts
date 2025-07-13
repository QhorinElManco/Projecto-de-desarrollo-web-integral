import type {IProduct, IProductSize} from './IProduct.ts';

export type ICartProduct = Pick<IProduct, 'id' | 'gender' | 'price' | 'slug' | 'title'> & {
    image: string;
    quantity: number;
    size?: IProductSize;
}

export interface IShippingAddress {
    firstName: string;
    lastName: string;
    address: string;
    address2: string;
    country: string;
    postalCode: string;
    phoneNumber: string;
}
