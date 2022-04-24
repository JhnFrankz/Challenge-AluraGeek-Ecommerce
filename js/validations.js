
export const validate = (input) => {
    const inputType = input.dataset.type;

    console.log();
    if (inputType.validity.valid) {
        console.log("true");
    } else {

    }
};

const expressions = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,50}$/, // Letras y espacios, pueden llevar acentos.
	//correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	//asunto: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	mensaje: /^[a-zA-ZÀ-ÿ\s]{1,300}$/
};