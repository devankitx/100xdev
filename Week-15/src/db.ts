import mongoose from "mongoose";
const { Schema } = mongoose;

mongoose
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

const UserModel = mongoose.model("Users", UserSchema);
export default UserModel;
