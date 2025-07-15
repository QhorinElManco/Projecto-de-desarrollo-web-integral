import './App.css'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {ToastContainer} from "react-toastify";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from "./components/UI/header/Header.tsx";
import {HomePage} from "./pages/home/HomePage.tsx";
import {ProductDetailPage} from "./pages/product-detail/ProductDetailPage.tsx";
import {CartPage} from "./pages/cart/CartPage.tsx";
import {CheckoutAddressPage} from "./pages/checkout/address/CheckoutAddressPage.tsx";
import {SearchResultPage} from "./pages/Search/SearchResultPage.tsx";

const queryClient = new QueryClient()

function App() {

    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false}/>
            <ToastContainer/>
            <BrowserRouter>
                <div className="app">
                    <Header/>
                    <main className="app__main">
                        <Routes>
                            <Route path="/" element={<HomePage/>}/>
                            <Route path="/product/:id" element={<ProductDetailPage/>}/>
                            <Route path="/cart" element={<CartPage/>}/>
                            <Route path="/checkout/address" element={<CheckoutAddressPage/>}/>
                            <Route path="/search" element={<SearchResultPage/>}/>
                        </Routes>
                    </main>
                </div>
            </BrowserRouter>
        </QueryClientProvider>
    )
}

export default App
