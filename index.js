import express from "express";
import connectDB from "./db/connect.js";

const app = express();
connectDB();


app.get("/", (req, res) => {
  res.send("JWT Authentication ");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

