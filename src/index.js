import app from './app.js'
import { connectDB } from './database.js'

connectDB()

const PORT = 4040 // TODO: Colocar una variable de entorno ¿qué es esoooooooo?

app.listen(PORT, () => {
    console.log(`El server está corriendo en el puerto ${PORT}.`)
})