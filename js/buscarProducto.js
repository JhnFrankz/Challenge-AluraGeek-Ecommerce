
{
    const input = document.querySelector("[data-form-buscar]");
    const botonBuscar = document.querySelector(".header__search button");

    botonBuscar.addEventListener("click", (e) => {
        e.preventDefault();
        const valor = input.value;
        console.log(valor);

    });

}




