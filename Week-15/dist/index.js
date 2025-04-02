"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./db"));
const port = 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Connect to MongoDB with error handling
app.post("/api/v1/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    //zod validation , password hashing
    db_1.default.create({
        username: username,
        password: password,
    });
    res.json({
        message: "User created successfully",
    });
});
app.post("/api/v1/signin", (req, res) => { });
app.post("/api/v1/content", (req, res) => { });
app.post("/api/v1/content", (req, res) => { });
app.get("/api/v1/content", (req, res) => { });
app.delete("/api/v1/content", (req, res) => { });
app.post("/api/v1/brain/share", (req, res) => { });
app.get("/api/v1/brain/:shareLink", (req, res) => { });
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
