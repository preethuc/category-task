import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    category: {
      type: String,
    },

    sub_category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubCategory",
    },

    product_file: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  },
  { versionKey: false }
);
const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
