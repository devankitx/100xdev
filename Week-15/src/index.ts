import express from "express";
import mongoose from "mongoose";
import UserModel from "./db";

const port = 3000;
const app = express();
app.use(express.json());

// Connect to MongoDB with error handling

app.post("/api/v1/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  //zod validation , password hashing
  UserModel.create({
    username: username,
    password: password,
  });
  res.json({
    message: "User created successfully",
  });
});
app.post("/api/v1/signin", (req, res) => {});
app.post("/api/v1/content", (req, res) => {});
app.post("/api/v1/content", (req, res) => {});
app.get("/api/v1/content", (req, res) => {});
app.delete("/api/v1/content", (req, res) => {});
app.post("/api/v1/brain/share", (req, res) => {});
app.get("/api/v1/brain/:shareLink", (req, res) => {});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
