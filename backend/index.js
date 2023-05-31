import express, { response } from 'express';
import { Db, MongoClient, ServerApiVersion } from 'mongodb'
import doten from "dotenv"
const app = express();


// SI le ficher .env est a la racine
doten.config()

const uri = process.env.STRING_URI



// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
    await client.connect();
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
}

run().then().catch(console.dir);
// le methodes Get avec mongoDB
app.get('/', async (req, res)=>{
  const datas = await client.db("blog").collection('post').find().toArray();
  console.log('datas : ', datas)
  res.status(200).send(datas)
})

// La methodes Post
app.post('/insert', async (req, res)=>{
  const datas = await client.db("blog").collection('post').insertOne({_id: "is person",
  title: "diara",
  container: "zj;efkzehlvfaeivlfalifze"})
  console.log("data" , datas)
  res.status(200).send(datas)
})


app.listen(4000, ()=>{
      console.log('connecter au port 400000')
})
