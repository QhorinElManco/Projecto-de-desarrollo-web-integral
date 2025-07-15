import React, {useEffect} from "react"
import {Link, useNavigate} from "react-router-dom"
import {useCartStore} from "../../../stores/cart";
import {toast} from "react-toastify";
import Cookies from "js-cookie";

import "./CheckoutSummaryPage.css"

export const CheckoutSummaryPage: React.FC = () => {
    const navigate = useNavigate();
    const cart = useCartStore(state => state.cart);
    const total = useCartStore(state => state.total);
    const numberOfItems = useCartStore(state => state.numberOfItems);
    const shippingAddress = useCartStore(state => state.shippingAddress);
    const subtotal = useCartStore(state => state.subtotal);
    const tax = useCartStore(state => state.tax);

    const handleConfirmOrder = async () => {
        toast.success('Pedido confirmado');
    }

    useEffect(() => {
        if (!Cookies.get('firstName')) {
            navigate('/checkout/address');
        }
    }, [navigate]);

    if (cart.length === 0) {
        return (
            <div className="order-summary">
                <div className="order-summary__container">
                    <h1 className="order-summary__title">Resumen de pedido</h1>
                    <div className="order-summary__empty">
                        <p>No hay artículos en su pedido</p>
                        <Link to="/" className="order-summary__continue-shopping">
                            Continuar comprando
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="order-summary">
            <div className="order-summary__container">
                <h1 className="order-summary__title">Resumen de pedido</h1>

                <div className="order-summary__content">
                    <div className="order-summary__items">
                        {cart.map((item) => (
                            <div key={item.id} className="order-summary__item">
                                <div className="order-summary__item-image">
                                    <img src={`/products/${item.image}`} alt={item.title}/>
                                </div>

                                <div className="order-summary__item-details">
                                    <h3 className="order-summary__item-name">{item.title}</h3>
                                    <p className="order-summary__item-size">Size: {item.size}</p>
                                    <p className="order-summary__item-quantity">
                                        {item.quantity} product{item.quantity > 1 ? "s" : ""}
                                    </p>
                                </div>

                                <div className="order-summary__item-price">${item.price}</div>
                            </div>
                        ))}
                    </div>

                    <div className="order-summary__summary">
                        <div className="order-summary__summary-card">
                            <h2 className="order-summary__summary-title">
                                Resumen ({numberOfItems} producto{numberOfItems > 1 ? "s" : ""})
                            </h2>

                            <div className="order-summary__delivery">
                                <div className="order-summary__delivery-header">
                                    <h3 className="order-summary__delivery-title">Dirección de entrega</h3>
                                    <Link to="/checkout/address" className="order-summary__edit-btn">
                                        Editar
                                    </Link>
                                </div>

                                <div className="order-summary__address">
                                    <p className="order-summary__address-line">
                                        {`${shippingAddress?.firstName} ${shippingAddress?.lastName}`}
                                    </p>
                                    <p className="order-summary__address-line">
                                        {`${shippingAddress?.address}`}
                                    </p>
                                    <p className="order-summary__address-line">{
                                        `${shippingAddress?.address2} ${shippingAddress?.postalCode}`}
                                    </p>
                                    <p className="order-summary__address-line">
                                        {shippingAddress?.country}
                                    </p>
                                    <p className="order-summary__address-line">
                                        {shippingAddress?.phoneNumber}
                                    </p>
                                </div>
                            </div>

                            <div className="order-summary__pricing">
                                <div className="order-summary__delivery-header">
                                    <h3 className="order-summary__delivery-title"></h3>
                                    <Link to="/cart" className="order-summary__edit-btn">
                                        Editar
                                    </Link>
                                </div>
                                <div className="order-summary__pricing-row">
                                    <span>No. Productos</span>
                                    <span>
                                    {numberOfItems} artículo{numberOfItems > 1 ? "s" : ""}
                                    </span>
                                </div>

                                <div className="order-summary__pricing-row">
                                    <span>Subtotal</span>
                                    <span>$ {subtotal}</span>
                                </div>

                                <div className="order-summary__pricing-row">
                                    <span>Impuestos ({import.meta.env.VITE_TAX_RATE * 100} %)</span>
                                    <span>$ {tax}</span>
                                </div>

                                <div className="order-summary__pricing-row order-summary__pricing-row--total">
                                    <span>Total</span>
                                    <span>$ {total}</span>
                                </div>
                            </div>

                            <button onClick={handleConfirmOrder} className="order-summary__confirm-btn">
                                Confirmar orden
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
