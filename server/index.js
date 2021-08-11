import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = 8000;

const URL = process.env.MONGO_DB_URL;

const connection = async () => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error", error.message);
  }
};

connection();

app.listen(PORT, () =>
  console.log(`Server is successfully running on PORT ${PORT}`)
);
