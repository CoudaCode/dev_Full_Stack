import express from "express";
import doten from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import routes from "./routes";
import path from "path"

const app = express();
const PORT = 3000;
app.use(cors());

app.use(express.static('dist'))

// SI le ficher .env est a la racine
doten.config();

const uri = process.env.STRING_URI;

app.use("/", routes);

mongoose
  .connect(`${uri}`)
  .then(() => {
    console.log("connecté a MongoDB");
    app.listen(PORT, () => {
      console.log(`bien connecté sur le port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

  if(process.env.NODE_ENV === "production"){
      app.get('/*', (_, res)=>{
          res.sendFile(path.join(__dirname,'../dist/index.html'))
      })
  }