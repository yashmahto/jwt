import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./db/connect.js";
import authRoutes from "./routes/auth.js";

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);


app.get("/", (req, res) => {
  res.send("JWT Authentication ");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

