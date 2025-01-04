const express = require("express");
const app = express();

app.use(express.json());
const users = [
  {
    name: "John",
    kidneys: [{ healthy: false }],
  },
];

app.get("/", (req, res) => {
  let johnKidneys = users[0].kidneys;
  let numberOfKidneys = johnKidneys.length;
  let numberofHealthyKidneys = 0;
  for (const kidney of johnKidneys) {
    if (kidney.healthy) {
      numberofHealthyKidneys++;
    }
  }
  let numberofUnhealthyKidneys = numberOfKidneys - numberofHealthyKidneys;
  res.json({
    numberOfKidneys,
    numberofHealthyKidneys,
    numberofUnhealthyKidneys,
  });
});
app.post("/", (req, res) => {
  const ishealthy = req.body.ishealthy;
  users[0].kidneys.push({ healthy: ishealthy });
  res.json({
    msg: "Done",
  });
});
app.put("/", (req, res) => {});
app.delete("/", (req, res) => {});

app.listen(3000, () => {
  console.log("Server listening at http://localhost:3000/");
});
