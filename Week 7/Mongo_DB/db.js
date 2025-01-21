const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User = new Schema({
  email: String,
  name: String,
  password: String,
});

const Todo = new Schema({
  title: String,
  done: Boolean,
  userId: ObjectId,
});
