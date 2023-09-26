import express from 'express'
import userRoute from './Route/userRoute.js'
import categoryRoute from './Route/categoryRoute.js'
import productRoute from './Route/productRoute.js'
import errorMiddleware from './ErrorHandler/error.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
const app=express()
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use('/api/v1',userRoute)
app.use('/api/v1',categoryRoute)
app.use('/api/v1',productRoute)
app.use(errorMiddleware)
export default app