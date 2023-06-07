import {getPosts, insertPost} from './handlers' 

modules.exports = (app)=>{
    app.get('/', getPosts)
    app.post('/insert', insertPost)
}