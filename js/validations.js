/*
export const validate = (input) => {
    const inputType = input.dataset.type;

    console.log();
    if (inputType.validity.valid) {
        console.log("true");
    } else {

    }
};

const expressions = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,50}$/, // Letras y espacios,
	message: /^[a-zA-ZÀ-ÿ\s]{1,300}$/
};
*/
const formulario = document.querySelector(".form__about-us");
const inputs = document.querySelectorAll(".form__about-us .form__input");
const botonEnviarAboutUs = document.querySelector(".form__about-us button");
botonEnviarAboutUs.disabled = true;

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,50}$/,
	mensaje: /^[a-zA-ZÀ-ÿ\s]{1,300}$/
}

const campos = {
	nombre: false,
    mensaje: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, "nombre");
            break;
		case "mensaje":
			validarCampo(expresiones.mensaje, e.target, "mensaje");
		    break;
	}
	
	validarBoton();
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove("form__caja-incorrecto");
		document.getElementById(`grupo__${campo}`).classList.add("form__caja-correcto");
		document.querySelector(`#grupo__${campo} .form__input-error`).classList.remove(".form__input-error-activo");
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add("form__caja-incorrecto");
		document.getElementById(`grupo__${campo}`).classList.remove("form__caja-correcto");
		document.querySelector(`#grupo__${campo} .form__input-error`).classList.add(".form__input-error-activo");
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener("blur", validarFormulario);
});

function validarBoton() {
	if(campos.nombre && campos.mensaje) {
		botonEnviarAboutUs.disabled = false;
	} else {
		botonEnviarAboutUs.disabled = true;
	}
}

botonEnviarAboutUs.addEventListener("click", enviarFormulario);

function enviarFormulario(event) {
	event.preventDefault();

	inputs.forEach(input => {
		input.value = "";
		input.parentElement.classList.remove("contacto__form__caja-correcto");
	});

	botonEnviarAboutUs.disabled = true;
}