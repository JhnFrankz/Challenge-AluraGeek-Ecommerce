import { productServices } from "../service/product-service.js";

const crearSeccionProducto = (nombre, precio, descripcion, id) => {
    const contenido = `
        <div class="product__description__img">
            <img src="img/pag-product1.png" alt="Imagen del producto">
        </div>

        <div class="product__description__info">
            <h2>${nombre}</h2>
            <p class="product__precio">$${precio}</p>
            <p>${descripcion}</p>
        </div>`;

    const producto = document.createElement("div");
    producto.classList.add("product__description");
    producto.innerHTML = contenido;
    
    return producto;
};


const obtenerInformacion = () => {
    const url = new URL(window.location);
    const idUrl = url.searchParams.get("id");
    const producto = document.querySelector("[data-producto]");

    productServices.detalleProducto(idUrl).then(({nombre, precio, descripcion, id}) => {
        const infoProducto = crearSeccionProducto(nombre, precio, descripcion, id);
        producto.appendChild(infoProducto);
    });
}

obtenerInformacion();



