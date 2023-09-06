import {postPassangersQuery} from "../repositorys/databaseQuerys.js"
import httpStatus from "http-status"
export const postPassangers  = async (req,res) =>{
    const {firstName,lastName} = req.body
    let toPost =  await postPassangersQuery([firstName,lastName])
    if(toPost === true){
        res.sendStatus(httpStatus.CREATED)
    } else{
        res.status(500).send(toPost)
    }
}