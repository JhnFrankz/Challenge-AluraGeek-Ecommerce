
const listaUsuarios = () => {
    return fetch("http://localhost:3000/usuario").then((respuesta) => respuesta.json());
};

export const loginServices = {
    listaUsuarios
};