import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { UserModel } from "./db.js";
import { auth, JWT_SECRET } from "./auth.js";
import bcrypt from "bcrypt";
import { z } from "zod";

dotenv.config();
const MONGO_URI = process.env.MONGO_URI;

// MongoDB Connection
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

// Initialize Express App
const app = express();
app.use(express.json());

// User Signup
app.post("/signup", async (req, res) => {
  const requiredBody = z.object({
    email: z.string(),
    name: z.string(),
    password: z.string(),
  });

  const { email, password, name } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);

  try {
    await UserModel.create({ email, password: hashedPassword, name });
    res.json({ message: "You are signed up" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error signing up, user might already exist." });
  }
});

// User Signin
app.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      res.status(403).json({
        message: "User Does not exit ! / Try Signup first",
      });
      return;
    }

    const matchUser = await bcrypt.compare(password, user.password);

    if (matchUser) {
      const token = jwt.sign({ id: user._id.toString() }, JWT_SECRET);
      res.json({ token });
    } else {
      res.status(403).json({ message: "Incorrect credentials" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error signing in" });
  }
});

// Placeholder Endpoints
app.post("/todo", (req, res) => {
  res.json({ message: "TODO endpoint is not implemented" });
});

app.get("/todos", (req, res) => {
  res.json({ message: "GET /todos is not implemented" });
});

// Start Server
app.listen(3000, () => console.log("Server is listening on port 3000"));
