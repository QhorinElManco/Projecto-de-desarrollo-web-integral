import {Link, useNavigate} from "react-router-dom";
import "./Header.css"
import {useCartStore} from "../../../stores/cart";
import {type ChangeEvent, type FormEvent, type KeyboardEvent, useState} from "react";
import {useSearchStore} from "../../../stores/search";
import {IconSearch, IconShoppingCartFilled} from "@tabler/icons-react";

export const Header = () => {
    const numberOfItems = useCartStore(state => state.numberOfItems)
    const [localSearchTerm, setLocalSearchTerm] = useState("")
    const setSearchTerm = useSearchStore((state) => state.setSearchTerm)
    const navigate = useNavigate()

    const handleSearch = (e: FormEvent) => {
        e.preventDefault()
        if (localSearchTerm.trim()) {
            setSearchTerm(localSearchTerm.trim())
            navigate(`/search?q=${encodeURIComponent(localSearchTerm.trim())}`)
        }
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalSearchTerm(e.target.value)
    }

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSearch(e as FormEvent)
        }
    }

    return (
        <header className="header">
            <div className="header__container">
                <Link to="/" className="header__logo">
                    <div className="header__logo-icon">uS</div>
                    <span className="header__logo-text">uShop</span>
                </Link>

                <form onSubmit={handleSearch} className="header__search-form">
                    <div className="header__search">
                        <input
                            type="text"
                            placeholder="Buscar..."
                            className="header__search-input"
                            value={localSearchTerm}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyPress}
                        />
                        <button type="submit" className="header__search-btn">
                            <IconSearch size={16} color={"#e5e5e5"}/>
                        </button>
                    </div>
                </form>

                <Link to="/cart" className="header__cart">
                    <div className="header__cart-icon"><IconShoppingCartFilled/></div>
                    {numberOfItems > 0 && <span className="header__cart-badge">{numberOfItems}</span>}
                </Link>
            </div>
        </header>
    );
};