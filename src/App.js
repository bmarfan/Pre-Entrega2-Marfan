import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import NavBar from "./componentes/navbar/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "bulma/css/bulma.css";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";


function App(){
    return (
        <div className="App">
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path='/category/:categoryId' element={<ItemListContainer />} />
                <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
                <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
            </Routes>
        </BrowserRouter>
    </div>
    )
}

export default App;