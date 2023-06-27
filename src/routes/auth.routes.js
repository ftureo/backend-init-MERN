import { Router } from "express";
import { registerController, loginController } from "../controllers/auth.controller.js";

const router = Router(); 


// router.get('/perrito', (request, response) => {
//     response
//         .status(202)
//         .send('Respuesta de /perrito')
// })

// router.get('/gatito', (request, response) => {
//     response
//         .status(202)
//         .send('Respuesta de /gatito')
// })


// router.delete('/primer-post', (request, response) => {
//     // console.log(request)
//     console.log("A VER QUE VIENE EN EL BODY DE LA REQUEST", request.body)
//     response.send("Ya borramos el usuario solicitado")
// })

// router.HTTPVerb('path route', callback)

router.post('/register', registerController)
router.post('/login', loginController)

export default router;