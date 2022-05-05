import { productServices } from "../service/product-service.js";

const formulario = document.querySelector("[data-form]")
console.log(formulario);

const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if (id == null) {
        window.location.href = "error.html";
    }

    const nombre = document.querySelector("[data-form-nombre]");
    const precio = document.querySelector("[data-form-precio]");
    const descripcion = document.querySelector("[data-form-descripcion]");
    
    try {
        const producto = await productServices.detalleProducto(id);

        if (producto.nombre && producto.precio && producto.descripcion) {
            nombre.value = producto.nombre;
            precio.value = producto.precio;
            descripcion.value = producto.descripcion;
        } else {
            throw new Error();
        }
    } catch (error) {
        window.location.href = "error.html";
    }
}

obtenerInformacion();

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const nombre = document.querySelector("[data-form-nombre]").value;
    const precio = document.querySelector("[data-form-precio]").value;
    const descripcion = document.querySelector("[data-form-descripcion]").value;

    productServices.actualizarProducto(nombre, precio, descripcion, id).then(() => {
        /*Pendiente - a veces no redirecciona a la url */
        window.location.href = "products-list.html";
    }).catch(error => console.log("Error : ", error));
});

