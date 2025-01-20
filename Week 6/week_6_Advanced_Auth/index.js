const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const JWT_SECERT = "ilovemoney";

app.use(express.json());

const users = [];

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username: username,
    password: password,
  });
  res.send("You are sucessfully singup");
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = users.find(function (u) {
    if (u.username === username && u.password === password) {
      return true;
    } else {
      return false;
    }
  });

  if (user) {
    const token = jwt.sign(
      {
        username: username,
      },
      JWT_SECERT
    );
    res.send({
      token,
    });
  } else {
    res.status(403).send({
      message: "Invalid Username or Password",
    });
  }
});

app.get("/me", (req, res) => {
  const token = req.headers.token;
  const decodedInfromation = jwt.verify(token, JWT_SECERT);
  const username = decodedInfromation.username;
  const user = users.find((user) => user.username === username);

  if (user) {
    res.send({
      username: user.username,
      password: user.password,
    });
  } else {
    res.status(401).send({
      message: "Unauthorized",
    });
  }
});
app.listen(3000, (req, res) => {
  console.log("Server is listening to port 3000");
});
