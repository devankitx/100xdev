import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


const userSchema = new Schema({
  email: String,
  name: String,
  password: String,
});

const todoSchema = new Schema({
  userId: ObjectId,
  title: String,
  done: Boolean,
});

const UserModel = mongoose.model("user", userSchema);
const TodoModel = mongoose.model("todo", todoSchema);
export default{
  UserModel,
  TodoModel,
};
