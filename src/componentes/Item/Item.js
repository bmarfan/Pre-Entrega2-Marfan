import "./Item.css";
import { Link } from "react-router-dom";

function Item({id, nombre, precio, stock, img}) {

    return(
        <article className="CardItem">
            <header className="CardHeader">
                <h2 className="CardName">
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={img} alt={nombre} className="itemImg"/>
            </picture>
            <section>
                <div className="ItemSection">
                    <b>Precio:</b> ${precio}
                </div>
            </section>
            <footer className="ItemFooter">
            <Link to={`/item/${id}`} className="CardItemOption">Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item;