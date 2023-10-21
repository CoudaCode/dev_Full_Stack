import { connect } from "mongoose";
export const connectDB = async () => {
  const MONGO_URI = process.env.STRING_URI;
  if (!MONGO_URI) throw new Error("env variables : MONGO_URI is required");
  await connect(MONGO_URI, {
    dbName: "test",
  });
};
