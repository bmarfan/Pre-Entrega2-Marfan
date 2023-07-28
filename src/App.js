import "bulma/css/bulma.css";
import "./assets/css/app.css";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import NavBar from "./componentes/navbar/Navbar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import Checkout from "./componentes/Chekout/Chekout";
import Cart from "./componentes/Cart/Cart";
import Header from "./componentes/Header/Header";


function App(){
    return (
        <div className="App">
        <BrowserRouter>
            <CartProvider>
                <Header/>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<ItemListContainer/>}/>
                    <Route path='/category/:categoryId' element={<ItemListContainer />} />
                    <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='/checkout' element={<Checkout />} />
                    <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
                </Routes>
            </CartProvider>
        </BrowserRouter>
    </div>
    )
}

export default App;