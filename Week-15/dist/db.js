"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
mongoose_1.default
    .connect("mongodb://127.0.0.1:27017/secondbrain-cohort")
    .then(() => {
    console.log("Connected to MongoDB successfully");
})
    .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    console.log("Server will continue to run without database functionality");
});
const UserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});
const UserModel = mongoose_1.default.model("Users", UserSchema);
exports.default = UserModel;
