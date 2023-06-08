import express from "express";
import doten from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import routes from "./routes";
const app = express();
const PORT = 3000;
app.use(cors());

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
