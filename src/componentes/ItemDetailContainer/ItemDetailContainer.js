
import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//se usa DOC y no DOCS porque buscamos un solo documeno
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase";

function ItemDetailContainer(){
    
       const [product, setProducts] = useState(null)
       const [loading, setLoading] = useState(true)

       const { itemId } = useParams()

       useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'items', itemId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productAdapted = { id: response.id, ...data }
                setProducts(productAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })

       }, [itemId])

       return(
        <div className="ItemDetailContainer">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ItemDetail {...product}/>
            )}
           
        </div>
       )

}

export default ItemDetailContainer; 