import mongoose from "mongoose";
let studentList = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  name: {
    type: String,
    unique: true,
  },
  department: {
    type: String,
  },
  email: {
    type: String,
  },
  age: {
    type: Number,
  },
});
export default mongoose.model("studentList", studentList);
