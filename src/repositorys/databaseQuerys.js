import { db } from "../databaseconnection/database.connection.js"
export const postPassangersQuery = async (data) => {
    try {
       await  db.query(`INSERT INTO passengers(firstName,lastName) VALUES ($1,$2)`,data)
        return true
    } catch (e) {
        return e
    }
} 