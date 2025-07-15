import "./CheckoutAddressPage.css";
import {useAddressForm} from "../../../hooks/useAddressForm.ts";

export const CheckoutAddressPage = () => {
    const {handleSubmit, handleError, form} = useAddressForm();

    return (
        <div className="checkout">
            <div className="checkout__container">
                <h1 className="checkout__title">Dirección</h1>

                <form onSubmit={form.onSubmit(handleSubmit, handleError)} className="checkout__form">
                    <div className="checkout__field">
                        <label className="checkout__label">
                            Nombre <span className="checkout__required">*</span>
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            {...form.getInputProps('firstName')}
                            className="checkout__input"
                            required
                        />
                    </div>

                    <div className="checkout__field">
                        <label className="checkout__label">
                            Apellido <span className="checkout__required">*</span>
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            {...form.getInputProps('lastName')}
                            className="checkout__input"
                            required
                        />
                    </div>

                    <div className="checkout__field">
                        <label className="checkout__label">
                            Dirección <span className="checkout__required">*</span>
                        </label>
                        <input
                            type="text"
                            name="address"
                            {...form.getInputProps('address')}
                            className="checkout__input"
                            required
                        />
                    </div>

                    <div className="checkout__field">
                        <label className="checkout__label">Dirección 2 (Opcional)</label>
                        <input
                            type="text"
                            name="address2"
                            {...form.getInputProps('address2')}
                            className="checkout__input"
                        />
                    </div>

                    <div className="checkout__field">
                        <label className="checkout__label">
                            País <span className="checkout__required">*</span>
                        </label>
                        <select
                            name="country"
                            {...form.getInputProps('country')}
                            className="checkout__select"
                            required
                        >
                            <option value="">Select a country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="MX">Mexico</option>
                            <option value="ES">Spain</option>
                            <option value="FR">France</option>
                        </select>
                    </div>

                    <div className="checkout__field">
                        <label className="checkout__label">
                            Código postal <span className="checkout__required">*</span>
                        </label>
                        <input
                            type="text"
                            name="postalCode"
                            {...form.getInputProps('postalCode')}
                            className="checkout__input"
                            required
                        />
                    </div>

                    <div className="checkout__field">
                        <label className="checkout__label">
                            Número telefónico <span className="checkout__required">*</span>
                        </label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            {...form.getInputProps('phoneNumber')}
                            className="checkout__input"
                            required
                        />
                    </div>

                    <button type="submit" className="checkout__submit-btn">
                        Verificar de pedido
                    </button>
                </form>
            </div>
        </div>
    );
};