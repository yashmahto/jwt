import "dotenv/config";
import express from "express";
import connectDB from "./db/connect.js";

const app = express();
connectDB();


app.get("/", (req, res) => {
  res.send("JWT Authentication ");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

