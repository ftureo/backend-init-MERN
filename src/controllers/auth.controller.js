export const registerController = (request, response) => {
    console.log("Veamos la request en el controlador", request.body)
    response.send("Ya te registraste desde el controlador")
}

export const loginController = () => {}

// export default {
//     registerController,
//     loginController
// }