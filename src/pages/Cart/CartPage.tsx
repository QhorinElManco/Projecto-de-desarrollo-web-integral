import type React from "react"
import {Link} from "react-router-dom"
import "./CartPage.css"
import {useCartStore} from "@/stores/cart";
import {ItemCounter} from "@components/ItemCounter/ItemCounter.tsx";

export const CartPage: React.FC = () => {
    // const {items, updateQuantity, removeItem, getTotalPrice} = useCartStore()
    const {numberOfItems, updateProductQuantity, deleteProductFromCart, total, cart, subtotal, tax} = useCartStore()


    if (numberOfItems === 0) {
        return (
            <div className="cart">
                <div className="cart__container">
                    <h1 className="cart__title">My cart</h1>
                    <div className="cart__empty">
                        <p>Your cart is empty</p>
                        <Link to="/" className="cart__continue-shopping">
                            Continue shopping
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="cart">
            <div className="cart__container">
                <h1 className="cart__title">My cart</h1>

                <div className="cart__content">
                    <div className="cart__items">
                        {cart.map((item) => (
                            <div key={item.id} className="cart__item">
                                <div className="cart__item-image">
                                    <Link to={`/product/${item.id}`}>
                                        <img src={`/products/${item.image}`} alt={item.title}/>
                                    </Link>
                                </div>

                                <div className="cart__item-details">
                                    <h3 className="cart__item-name">{item.title}</h3>
                                    <p className="cart__item-size">Size: {item.size}</p>

                                    <div className="cart__item-controls">
                                        <div className="cart__item-quantity">
                                            <ItemCounter
                                                currentValue={item.quantity}
                                                onChangeQuantity={(quantity) => {
                                                    updateProductQuantity({...item, quantity});
                                                }}/>
                                        </div>
                                        <button className="cart__remove-btn"
                                                onClick={() => deleteProductFromCart(item)}>
                                            Remove
                                        </button>
                                    </div>
                                </div>

                                <div className="cart__item-price">${item.price}</div>
                            </div>
                        ))}
                    </div>

                    <div className="cart__summary">
                        <div className="cart__summary-card">
                            <h2 className="cart__summary-title">Order</h2>
                            <div className="cart__summary-row">
                                <span>No. Products</span>
                                <span>{numberOfItems}</span>
                            </div>

                            <div className="cart__summary-row">
                                <span>Subtotal</span>
                                <span>${subtotal}</span>
                            </div>

                            <div className="cart__summary-row">
                                <span>Taxation ({import.meta.env.VITE_TAX_RATE * 100} %)</span>
                                <span>${tax}</span>
                            </div>

                            <div className="cart__summary-row cart__summary-row--total">
                                <span>Total</span>
                                <span>${total}</span>
                            </div>

                            <Link to="/checkout" className="cart__checkout-btn">
                                Checkout
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
