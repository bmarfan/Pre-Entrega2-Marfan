import "./ItemDetail.css";
import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../../componentes/ItemCount/ItemCount";
import { Link } from "react-router-dom";


const ItemDetail = ({id, nombre, categoria, descripcion, precio, img, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = { id, nombre, precio}

        addItem(item, quantity)
    }

    return(
        <article className="card CardDetail">
            <header className="card-header">
                <h2 className="card-header-title">
                    {nombre}
                </h2>
            </header>
                <section className="card-content">
                    <div className="DetailSection">
                        <img src={img} alt={nombre}/>
                    </div>
                    <div className="card-text">
                        <div className="car-flex">
                            <div className="DetailSection peque">
                                <b>Precio:</b> ${precio}
                            </div>
                            <div className="DetailSection peque">
                                <b>Categoría:</b> {categoria}
                            </div>
                        </div>
                        <div className="DetailSection grande">
                            <b>Descripción:</b> {descripcion}
                        </div>
                        <footer className="card-footer">

                    {
                        quantityAdded > 0 ? (
                            <Link to='/cart' className="OptionDetail">Terminar compra</Link>
                        ) : (
                            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                        )
                    }
                </footer>
                    </div>
                    
                </section>
                
            
        </article>
    )
}
export default ItemDetail;