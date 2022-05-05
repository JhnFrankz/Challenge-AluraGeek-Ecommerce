
const listaProductos = () => {
    return fetch("http://localhost:3000/producto").then((respuesta) => respuesta.json());
};

/*          para add-products.html */
const crearProducto = (nombre, precio, descripcion) => {
    return fetch("http://localhost:3000/producto", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nombre,
            precio,
            descripcion,
            id: uuid.v4()
        })
    });
};

/*      Para el CRUD        */
const detalleProducto = (id) => {
    return fetch(`http://localhost:3000/producto/${id}`).then(respuesta => respuesta.json());
};

const actualizarProducto = (nombre, precio, descripcion, id) => {
    return fetch(`http://localhost:3000/producto/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nombre,
            precio,
            descripcion
        })
    }).then(respuesta => respuesta).catch(error => console.log("error"));
};


export const productServices = {
    listaProductos,
    crearProducto,
    detalleProducto,
    actualizarProducto
};