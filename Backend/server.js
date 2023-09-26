import app from "./app.js";
import dotenv from 'dotenv'
import connectDatabase from "./config/connectDatabase.js";
dotenv.config({path:"Backend/config/config.env"})
connectDatabase()
app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})