
import mongoose from "mongoose";
let student = new mongoose.Schema({
    id: {
      type: Number,
      unique: true
    },
    name: {
      type: String,
      unique: true,
    },
    department: {
      type: String,
    },
    image: {
      type: String,
    },
    email: {
      type: String,
    },
    age: {
      type: Number,
    },
    phone :{
      type: String
    }
   
  });
  export default mongoose.model("student", student);