import pg from "pg"
import dotenv from  "dotenv"
dotenv.config()
const  {Pool} = pg

const connectionConfig = {
    connectionString:process.env.DATABASE_URL
}

process.env.NODE_ENV = 'producion' ? connectionConfig.ssl =true : connectionConfig.ssl =false

export const db = new Pool(connectionConfig)