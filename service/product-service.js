
const listaProductos = () => {
    return fetch("http://localhost:3000/producto").then((respuesta) => respuesta.json());
};

const crearCliente = (nombre, precio, descripcion) => {
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


export const productServices = {
    listaProductos,
    crearCliente
};