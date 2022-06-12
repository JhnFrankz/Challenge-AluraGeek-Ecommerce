import { productServices } from "../service/product-service.js";

const btnBuscar = document.querySelector("[data-form-btn-search]");

btnBuscar.addEventListener("click", (e) => {
    e.preventDefault();
    const text = document.querySelector("[data-form-input-search]").value;

    window.location = `products-search.html?text=${text}`;
    /*
    if(text.trim() != "") {
        window.location = `products-search.html?text=${text}`;
        inputSearch = "";
    }
    */
});
/*
btnBuscar.addEventListener("input", evento => {
    btnBuscar.addEventListener("keydown", (e) => {
        e.preventDefault();
        const text = document.querySelector("[data-form-input-search]").value;
        console.log("aaaaaaaaaaaaa")
    
        if (e.key === "Enter") {
            window.location = `products-search.html?text=${text}`;
          }
    });
});
*/
