import {Link} from "react-router-dom";
import "./Header.css"
import {useCartStore} from "@/stores/cart";

export const Header = () => {
    const numberOfItems = useCartStore(state => state.numberOfItems)
    return (
        <header className="header">
            <div className="header__container">
                <Link to="/" className="header__logo">
                    <div className="header__logo-icon">uS</div>
                    <span className="header__logo-text">uShop</span>
                </Link>

                <div className="header__search">
                    <input type="text" placeholder="Search" className="header__search-input"/>
                </div>

                <Link to="/cart" className="header__cart">
                    <div className="header__cart-icon">🛒</div>
                    {numberOfItems > 0 && <span className="header__cart-badge">{numberOfItems}</span>}
                </Link>
            </div>
        </header>
    );
};