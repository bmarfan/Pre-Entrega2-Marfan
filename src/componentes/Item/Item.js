import "./Item.css";
import { Link } from "react-router-dom";

function Item({id, nombre, precio, stock, img}) {

    return(
        <article className="CardItem card">
            <header className="CardHeader card-header">
                <h2 className="CardName card-header-title">
                    {nombre}
                </h2>
            </header>
            <div className="card-image">
                <picture className="picture">
                    <img src={img} alt={nombre} className="itemImg"/>
                </picture>
            </div>
            <section>
                <div className="ItemSection">
                    <b>Precio:</b> ${precio}
                </div>
                <div className="ItemSection">
                    <b>Stock disponible:</b> {stock}
                </div>
            </section>
            <footer className="ItemFooter card-footer">
            <Link to={`/item/${id}`} className="CardItemOption">Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item;