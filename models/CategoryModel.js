import mongoose from "mongoose";
const categoryScema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: true,
  },
  slug: {
    type: String,
    lowercase: true,
  },
});

export default mongoose.model("Category", categoryScema);
