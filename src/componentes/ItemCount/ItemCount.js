import { useState } from "react";
import "./ItemCount.css";

function ItemCount ({stock, initial, onAdd}){
    const [quantity, setQuantity] = useState(1)

    const incremento = () => {
        if(quantity < stock){
            setQuantity(quantity + 1)
        }
    }
    const reduccion = () => {
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    }

    return(
        <div className="contador-container">
            <div className="controles">
                <button className="button" onClick={reduccion}> - </button>
                <h4 className="contador-numero">{quantity}</h4>
                <button className="button" onClick={incremento}> + </button>
                <div>
                    <button className='button-cart' onClick={() => onAdd(quantity)} disabled={!stock} >
                        Agregar al carrito
                    </button>
                </div> 
            </div>
        </div>
    )
}
export default ItemCount;
