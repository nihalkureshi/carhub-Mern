import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import carRoutes from "./routes/carRoutes.js";

dotenv.config();

const app = express();   // ✅ Initialize first

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/cars", carRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("CarHub API Running");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));