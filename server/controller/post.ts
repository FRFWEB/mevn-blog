import {Request, Response} from 'express';
import { findAll } from "../servicie/posts" 

const all = (__req: Request, res: Response) =>{
    const getAllData = findAll()
    res.status(200).send(getAllData)
}

export {all} 