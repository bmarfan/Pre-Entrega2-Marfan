
import productos from "../../data";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProdutosById } from "../../data";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ItemDetailContainer(){
    
       const [productos, setProductos] = useState(null)
       const {itemId} = useParams()

       useEffect(() => {
        getProdutosById(itemId)
        .then(response => {
            setProductos(response)
        })
        .catch(error => {
            console.error(error)
        })
       }, [itemId])

       return(
        <div className="ItemDetailContainer">
            <ItemDetail {...productos}/>
        </div>
       )

}

export default ItemDetailContainer;