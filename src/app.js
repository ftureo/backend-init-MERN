import express from 'express'
import morgan from 'morgan'
import authRouter from './routes/auth.routes.js'


const app = express()

app.use(morgan('dev'))

// Veamos qué pasa cuando esta línea está comentada
app.use(express.json())
app.use(authRouter)

export default app