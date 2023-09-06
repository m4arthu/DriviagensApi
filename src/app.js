import express, {json} from "express"
import dotenv from "dotenv"
import cors from "cors"
import { router } from "./routers/routes.js"


const  app = express()
app.use(cors())
app.use(json())
app.use(router)
dotenv.config()

const port  = process.env.PORT

app.listen(port,()=>console.log("listening on port",port))