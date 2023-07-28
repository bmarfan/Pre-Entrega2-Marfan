import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../config/firebase";


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
        ? query(collection(db, 'items'), where('categoria', '==', categoryId))
        : collection(db, 'items')

        getDocs(collectionRef)
            .then(response => {
                const productAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                //lo guardamos en el esado
                setProducts(productAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
        }, [categoryId])

        return (
            <div>
                <h1>{greeting}</h1>
                {loading ? (
        <p>Cargando...</p>
      ) : (
        <ItemList products={filteredProducts.length > 0 ? filteredProducts : products} />
      )}
            </div>
        )
    }
    
    export default ItemListContainer;