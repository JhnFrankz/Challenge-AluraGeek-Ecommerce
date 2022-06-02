const fileInput = document.getElementById("image");
const dragZone = document.getElementById("result__image");
const img = document.getElementById("img__result");

//al hacer click en el campo, que actue como un input file
dragZone.addEventListener("click", () => fileInput.click()
);

//al arrastar una imagen por el campo haga..
dragZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dragZone.classList.add("form__file__result--active");
});

//al quitar una imagen por el campo haga..
dragZone.addEventListener("dragleave", (e) => {
    e.preventDefault();
    dragZone.classList.remove("form__file__result--active");
});

//Al sortar una imagen en el campo no abrir en una pestaña nueva
dragZone.addEventListener("drop", (e) => {
    e.preventDefault();
});
