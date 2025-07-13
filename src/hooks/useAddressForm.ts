import {useNavigate} from "react-router-dom";
import {hasLength, useForm} from "@mantine/form";
import {toast} from "react-toastify";
import {useCartStore} from "../stores/cart";
import type {IShippingAddress} from "../types/cart.ts";
import {cookieHelper} from "../utils/cookieHelper.ts";

export const useAddressForm = () => {
    const navigate = useNavigate();
    const updateShippingAddress = useCartStore(state => state.updateShippingAddress);

    const form = useForm<IShippingAddress>({
        validateInputOnChange: true,
        initialValues: cookieHelper.getAddressFromCookies(),

        validate: {
            firstName: hasLength({min: 2}, 'First name must be at least 2 characters long'),
            lastName: hasLength({min: 2}, 'Last name must be at least 2 characters long'),
            address: hasLength({min: 1}, 'Address is required'),
            country: hasLength({min: 2}, 'Select a country'),
            postalCode: hasLength({min: 5}, 'Postal code is required'),
        },
    });

    const handleSubmit = async (values: IShippingAddress) => {
        cookieHelper.saveAddressToCookies(values);
        updateShippingAddress(values);
        navigate('/checkout/summary');
    };

    const handleError = () =>
        toast.error("Be sure to fill out the form")

    return {form, handleSubmit, handleError};
};
