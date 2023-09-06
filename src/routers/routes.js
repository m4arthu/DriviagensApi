import express from "express"
import { postPassangers } from "../controllers/controllers.js"
import { validateSchema } from "../middleweres/validateSchema.js"
import { passengersSchema } from "../schemas/schemas.js"

const app = express()
 app.post("/",validateSchema(passengersSchema),postPassangers)
export const router = app
