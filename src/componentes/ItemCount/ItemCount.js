import { useState } from "react";
import "./ItemCount.css";

function ItemCount ({stock, initial, onAdd}){
    const [cantidad, setCantidad] = useState(initial)

    const incremento = () => {
        if(cantidad < stock){
            setCantidad(cantidad + 1)
        }
    }
    const reduccion = () => {
        if(cantidad > 1){
            setCantidad(cantidad - 1)
        }
    }

    return(
        <div className="contador-container">
            <div className="controles">
                <button className="button" onClick={reduccion}> - </button>
                <h4 className="contador-numero">{cantidad}</h4>
                <button className="button" onClick={incremento}> + </button>
            </div>
        </div>
    )
}
export default ItemCount;