const productos = [
    {
        id: "1",
        nombre: "Cosplay personalizado",
        precio: 5.000,
        categoria: "personalizado",
        stock: 1,
        img: "https://images2.imgbox.com/10/a8/mUYhYg8i_o.png",
        desripcion: `No dude en enviarnos un mensaje si desea encargar un artículo, envíe imágenes detalladas de lo que desea para que podamos darle un precio, si hay un momento específico para el que lo necesita y si tiene un presupuesto específico, para que podamos ajustar el precio lo mejor que podamos.
        ¡No trabajamos con tamaños específicos! ¡Hacemos todo a sus medidas! Así que, por favor, ten en cuenta que tendrás que medirte a ti mismo.
        
        Tampoco hacemos atrezzo ni pelucas, solo podemos hacer la ropa.`,
    },
    {
        id: "2",
        nombre: "Raiden Shogun Cosplay",
        precio: 120.000,
        categoria: "genshin",
        stock: 2,
        img: "https://images2.imgbox.com/10/a8/mUYhYg8i_o.png",
        descripcion: `Incluye:
        -Kimono exterior
        -Mangas negras
        -Pantalones cortos
        -Capa inferior/falda blanca
        -Visión eléctrica frontal y trasera
        -Medias altas hasta la rodilla
        -Pieza de cuello`,
    }
    ,
    {
        id: "3" ,
        nombre: "Yae Miko Cosplay",
        precio: 110.000,
        categoria: "genshin",
        stock: 2,
        img: "https://images2.imgbox.com/10/a8/mUYhYg8i_o.png",
        descripcion: `Incluye: 
        -Piezas de hombro
        -Collar
        -Top blanco y marrón
        -Debajo de la falda
        -Mangas
        -Obi + falda`,
    }
    ,
    {
        id: "4",
        nombre: "Patron Keqing Genshin Impact",
        precio: 20.000,
        categoria: "patrones",
        stock: 10,
        img: "https://images2.imgbox.com/10/a8/mUYhYg8i_o.png",
        descripcion: `Patrones digitales del cosplay de Keqing de Genshin Impact.` ,
    }
    ,
    {
        id: "5",
        nombre: "Patron Raiden Shogun Genshin Impact",
        precio: 20.000,
        categoria: "patrones",
        stock: 10,
        img: "https://images2.imgbox.com/10/a8/mUYhYg8i_o.png",
        descripcion: `Patrones digitales del cosplay de Raiden Shogun de Genshin Impact.`,
    }
]

export default productos;
export const getProdutsByCategory = (productoCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.filter(prod => prod.categoria === productoCategory))
        }, 500)
    })
}
export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 500)
    })
}
export const getProdutosById = (productoId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === productoId))
        }, 500)
    })
}
