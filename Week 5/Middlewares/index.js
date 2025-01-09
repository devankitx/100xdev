// const express = require("express");

// const app = express();

// let requestcount = 0;

// function requestIncreaser(req, res, next) {
//   requestcount = requestcount + 1;
//   console.log(`Total number of requests ${requestcount}`);

//   next();
// }

// app.get("/sum", requestIncreaser, function (req, res) {
//   const a = parseInt(req.query.a);
//   const b = parseInt(req.query.b);

//   res.json({
//     ans: a + b,
//   });
// });

// app.get("/multiply", requestIncreaser, function (req, res) {
//   const a = req.query.a;
//   const b = req.query.b;
//   res.json({
//     ans: a * b,
//   });
// });

// app.listen(3000, () => {
//   console.log("server is listening on port 3000");
// });

const express = require("express");

const app = express();
// log method , url , timestmap
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.originalUrl;

  console.log(`[${timestamp}] ${method} ${url}`);
  next();
});
app.get("/sum", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    ans: a + b,
  });
});

app.get("/multiply", function (req, res) {
  const a = req.query.a;
  const b = req.query.b;
  res.json({
    ans: a * b,
  });
});

app.get("/divide", function (req, res) {
  const a = req.query.a;
  const b = req.query.b;
  res.json({
    ans: a / b,
  });
});

app.get("/subtract", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.json({
    ans: a - b,
  });
});

app.listen(3000);
