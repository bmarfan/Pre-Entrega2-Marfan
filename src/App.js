import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import NavBar from "./componentes/navbar/Navbar";
import "bulma/css/bulma.css";


function App(){
    return (
        <div className="App">
            <NavBar />
            <ItemListContainer titulo="Tienda de cosplay"/>
        </div>
    )
}

export default App;