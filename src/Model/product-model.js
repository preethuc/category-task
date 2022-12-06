import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    product_name: {
      type: String,
    },
    product_image: {
      type: String,
    },
  },
  { versionKey: false }
);
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
