import './App.css'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from "./components/Header/Header.tsx";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {HomePage} from "./pages/Home/HomePage.tsx";
import {ProductDetailPage} from "@/pages/ProductDetail/ProductDetailPage.tsx";
import {CartPage} from "@/pages/Cart/CartPage.tsx";

const queryClient = new QueryClient()

function App() {

    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false}/>
            <BrowserRouter>
                <div className="app">
                    <Header/>
                    <main className="app__main">
                        <Routes>
                            <Route path="/" element={<HomePage/>}/>
                            <Route path="/product/:id" element={<ProductDetailPage/>}/>
                            <Route path="/cart" element={<CartPage/>}/>
                            {/*<Route path="/checkout" element={<Checkout/>}/>*/}
                        </Routes>
                    </main>
                </div>
            </BrowserRouter>
        </QueryClientProvider>
    )
}

export default App
