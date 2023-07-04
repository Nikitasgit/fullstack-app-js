const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port = 5000;
const cors = require("cors");

//connexion à la DB
connectDB();

const app = express();
//Authorisation CORS
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

//Middleware qui permet de traiter les données de la request.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post.routes"));
//Lancer le serveur
app.listen(port, () => console.log("Le serveur a démarré au port " + port));
