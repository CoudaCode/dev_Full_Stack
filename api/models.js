import { Schema, model } from "mongoose";

const Blog = new Schema(
  {
    title: {
      type: String,
      required: true,
      description: true,
    },
    body: {
      type: String,
      required: true,
      description: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Blog", Blog);
