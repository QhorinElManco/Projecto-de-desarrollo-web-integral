import Cookies from "js-cookie";
import type { IShippingAddress } from "../types/cart";

const getCookieValue = (cookieName: string): string => {
    const value = Cookies.get(cookieName);
    return typeof value === 'string' ? value : '';
};

const getAddressFromCookies = (): IShippingAddress => ({
    firstName: getCookieValue('firstName'),
    lastName: getCookieValue('lastName'),
    address: getCookieValue('address'),
    address2: getCookieValue('address2'),
    country: getCookieValue('country'),
    postalCode: getCookieValue('postalCode'),
    phoneNumber: getCookieValue('phoneNumber'),
});

const saveAddressToCookies = (address: IShippingAddress) => {
    Cookies.set('firstName', address.firstName);
    Cookies.set('lastName', address.lastName);
    Cookies.set('address', address.address);
    Cookies.set('address2', address.address2);
    Cookies.set('country', address.country);
    Cookies.set('postalCode', address.postalCode);
    Cookies.set('phoneNumber', address.phoneNumber);
};

export const cookieHelper = {
    getCookieValue,
    getAddressFromCookies,
    saveAddressToCookies
};