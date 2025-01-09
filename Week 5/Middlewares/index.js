const express = require("express");

const app = express();

let requestcount = 0;

function requestIncreaser(req, res, next) {
  requestcount = requestcount + 1;
  console.log(`Total number of requests ${requestcount}`);

  next();
}

app.get("/sum", requestIncreaser, function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    ans: a + b,
  });
});

app.get("/multiply", requestIncreaser, function (req, res) {
  const a = req.query.a; 
  const b = req.query.b;
  res.json({
    ans: a * b,
  });
});

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
