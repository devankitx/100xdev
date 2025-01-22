import express from "express";
import { UserModel, TodoModel } from "./db.js";
import { auth, JWT_SECRET } from "./auth.js";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());

// Signup Route
app.post("/signup", async (req, res) => {
  try {
    const { email, password, name } = req.body;

    // Check if user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new user
    const user = await UserModel.create({ email, password, name });
    res.json({ message: "You are signed up", user });
  } catch (err) {
    res.status(500).json({ message: "Error signing up", error: err.message });
  }
});

// Signin Route
app.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email, password });
    if (!user) {
      return res.status(403).json({ message: "Incorrect credentials" });
    }

    // Create a token
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: "Error signing in", error: err.message });
  }
});

// Protected Route Example
app.post("/todo", auth, async (req, res) => {
  try {
    const { title, done } = req.body;
    const userId = req.userId;

    const todo = await TodoModel.create({ userId, title, done });
    res.json({ message: "Todo created successfully", todo });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating todo", error: err.message });
  }
});

// Get Todos
app.get("/todos", auth, async (req, res) => {
  try {
    const userId = req.userId;
    const todos = await TodoModel.find({ userId });
    res.json({ todos });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching todos", error: err.message });
  }
});

// Start Server
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
