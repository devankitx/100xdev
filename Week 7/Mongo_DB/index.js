const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { UserModel, TodoModel } = require("./db");

const app = express();
const JWT_SECRET = "s3cret"; // Keep this secret in .env file in production!

app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/todoApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Database connection error:", err));

// Signup Route
app.post("/signup", async (req, res) => {
  const { email, password, name } = req.body;

  try {
    // Check if user already exists
    const userExists = await UserModel.findOne({ email });
    if (userExists) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Create new user
    const newUser = await UserModel.create({ email, password, name });
    res.status(201).json({ message: "You are signed up", user: newUser });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ error: "Error signing up the user" });
  }
});

// Signin Route
app.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email, password });
    if (!user) {
      return res.status(403).json({ error: "Incorrect credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
    res.json({ message: "Signin successful", token });
  } catch (error) {
    console.error("Error during signin:", error);
    res.status(500).json({ error: "Error signing in the user" });
  }
});

// Add Todo Route
app.post("/todo", async (req, res) => {
  const { token, title, done } = req.body;

  try {
    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET);
    const todo = await TodoModel.create({
      userId: decoded.id,
      title,
      done: done || false,
    });

    res.status(201).json({ message: "Todo added", todo });
  } catch (error) {
    console.error("Error adding todo:", error);
    res.status(500).json({ error: "Error adding the todo" });
  }
});

// Get Todos Route
app.get("/todos", async (req, res) => {
  const { token } = req.headers;

  try {
    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET);
    const todos = await TodoModel.find({ userId: decoded.id });

    res.json({ todos });
  } catch (error) {
    console.error("Error fetching todos:", error);
    res.status(500).json({ error: "Error fetching todos" });
  }
});

// Start the Server
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
