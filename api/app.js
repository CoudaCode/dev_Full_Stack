import express from "express";
import doten from "dotenv";
import cors from "cors";
import { fileURLToPath } from "url";
import { connectDB } from "./db.js";
import routes from "./routes.js";
import path from "path";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
doten.config();
const app = express();
const PORT = 3000;
app.use(cors());

app.use(express.static("dist"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// SI le ficher .env est a la racine

if (process.env.NODE_ENV === "production") {
  app.get("/*", (_, res) => {
    res.sendFile(path.join(__dirname, "../dist/index.html"));
  });
}

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`bien connecté sur le port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
app.use("/post", routes);
