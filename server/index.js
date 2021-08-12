import express from "express";
import connection from "./database/db.js";
import DefaultData from "./default.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const PORT = 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

connection(username, password);

app.listen(PORT, () =>
  console.log(`Server is successfully running on PORT ${PORT}`)
);


//default data to database
DefaultData();