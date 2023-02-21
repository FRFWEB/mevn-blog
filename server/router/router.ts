import express from 'express'
//IMPORT CONTROLLERS
import {all} from '../controller/post'

//ENABLE ROUTER
const router = express.Router()

//ROUTERS
router.get('/post', all)

export default router