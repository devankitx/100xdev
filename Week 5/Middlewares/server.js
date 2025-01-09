const express = require("express");
const app = express();

app.use(express.json());

app.post("/sum", (req, res) => {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);
  res.json({
    result: a + b,
  });
});

app.listen(3000, (req, res) => {
  console.log("Server is listening on port 3000");
});
