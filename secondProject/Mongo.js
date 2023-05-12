import mongoose from "mongoose";

export default async () => {
  const connection = await mongoose.connect(
    "mongodb://localhost:27017/studentInformation",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  return connection.connection.db;
};
