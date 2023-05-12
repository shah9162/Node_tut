import mongoose from "mongoose";
let studentMembership = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  name: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
  },
  membershipDep: {
    type: String,
  },
  accountNo: {
    type: Number,
  },
});
export default mongoose.model("studentMembership", studentMembership);