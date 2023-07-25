
import ItemCount from "../../componentes/ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({id, nombre, categoria, descripcion, precio, stock}) => {
    return(
        <article className="card CardDetail">
            <header className="card-header">
                <h2 className="card-header-title">
                    {nombre}
                </h2>
            </header>
                <section className="card-content">
                    <div className="DetailSection">
                        <b>Precio:</b> ${precio}
                    </div>
                    <div className="DetailSection">
                        <b>Categoría:</b> ${categoria}
                    </div>
                    <div className="DetailSection">
                        <b>Descripción:</b> ${descripcion}
                    </div>
                </section>
                <footer className="card-footer">
                <ItemCount initial={1} stock={stock} onAdd={(cantidad) => console.log('Cantidad agregada', cantidad)}/>
                </footer>
            
        </article>
    )
}
export default ItemDetail;