
const listaProductos = () => {
    return fetch("https://ejemplo-json.herokuapp.com/producto").then((respuesta) => respuesta.json());
};

/*          para add-products.html */
const crearProducto = (nombre, precio, descripcion) => {
    return fetch("https://ejemplo-json.herokuapp.com/producto", {
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
    return fetch(`https://ejemplo-json.herokuapp.com/producto/${id}`).then(respuesta => respuesta.json());
};

const actualizarProducto = (nombre, precio, descripcion, id) => {
    return fetch(`https://ejemplo-json.herokuapp.com/producto/${id}`, {
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

const eliminarProducto = (id) => {
    return fetch(`https://ejemplo-json.herokuapp.com/producto/${id}`, {
        method: "DELETE"
    });
};

export const productServices = {
    listaProductos,
    crearProducto,
    detalleProducto,
    actualizarProducto,
    eliminarProducto
};