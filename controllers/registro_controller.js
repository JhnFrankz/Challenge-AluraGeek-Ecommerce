import { productServices } from "../service/product-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.querySelector("[data-form-nombre]").value;
    const precio = document.querySelector("[data-form-precio]").value;
    const descripcion = document.querySelector("[data-form-descripcion]").value;

    productServices.crearCliente(nombre, precio, descripcion).then(respuesta => {
        window.location.href = "/Challenges/Front%20End/ChallengeSem7-8-Ecommerce/all-products.html";
    }).catch(error => console.log("Error: ", error));
});



