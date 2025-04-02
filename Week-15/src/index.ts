import express from "express";
const port = 3000;
const app = express();

app.post("/api/v1/signup", (req, res) => {});
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
