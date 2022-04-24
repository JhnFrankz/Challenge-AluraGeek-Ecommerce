
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