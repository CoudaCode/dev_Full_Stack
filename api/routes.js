import db from './controllers.js' 
import express  from 'express'
 const router = express.Router()


 
 router.get('/', db.getPosts)
 router.post('/insert', db.insertPost)


 

export default router 