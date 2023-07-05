
import ItemCount from "../../componentes/ItemCount/ItemCount";


const ItemDetail = ({id, nombre, categoria, descripcion, precio, stock}) => {
    return(
        <article>
            <header>
                <h2>
                    {nombre}
                </h2>
                <section>
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
                <footer>
                <ItemCount initial={1} stock={stock} onAdd={(cantidad) => console.log('Cantidad agregada', cantidad)}/>
                </footer>
            </header>
        </article>
    )
}
export default ItemDetail;