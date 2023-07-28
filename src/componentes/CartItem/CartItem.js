import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartItem.css"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const CartItem = ({id, nombre, precio, quantity}) => {
    const { removeItem } = useContext(CartContext)
    const subtotal = precio * quantity
    const handleRemoveItem = () => {
        removeItem(id)
    }

    return(
        <div className="CartItem">
            <p className="cartname">{nombre}</p>
            <p>Precio: ${precio}</p>
            <p>Cantidad: {quantity}</p>
            <p>Subtotal: ${subtotal}</p>
            <p onClick={handleRemoveItem} className="removeItem">
                <FontAwesomeIcon icon={faTrash} />
            </p>
        </div>
    )
}

export default CartItem;