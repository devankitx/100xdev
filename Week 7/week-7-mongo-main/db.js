import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// User Schema
const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

// Todo Schema
const todoSchema = new Schema({
  userId: { type: ObjectId, ref: "users", required: true },
  title: { type: String, required: true },
  done: { type: Boolean, default: false },
});

// Models
const UserModel = mongoose.model("users", userSchema);
const TodoModel = mongoose.model("todos", todoSchema);

export { UserModel, TodoModel };
