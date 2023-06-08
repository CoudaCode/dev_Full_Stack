import {getPosts, insertPost} from './controllers' 
import express  from 'express'
 const router = express.Router()


 
 router.get('/', getPosts)
 router.post('/insert', insertPost)


 

export default router 