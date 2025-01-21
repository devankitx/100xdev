// const express = require("express");
import express from "express";
const app = express();
import UserModel from "./db.js";


import jwt from "jsonwebtoken";

app.use(express.json());

app.post("/signup", async (req, res) => {
  const email = req.body.email;
  const name = req.body.name;
  const password = req.body.password;

  await UserModel.create({
    email: email,
    password: password,
    name: name,
  });

  res.json({
    message: "You are successfully SignedUP",
  });
});

app.post("/signin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const response = await UserModel.findOne({
    email,
    password,
  });

  if (response) {
    const token = jwt.sign({
      id: response._id.toString(),
    });
    res.json({
      token,
    });
  } else {
    res.json({
      message: "Invalid email or password",
    });
  }
});
app.post("/todo", (req, res) => {});
app.get("/todos", (req, res) => {});

app.listen(3000, (req, res) => {
  console.log("Server is listening on port 3000");
});
