import mongoose from "mongoose";

const subCategorySchema = new mongoose.Schema(
  {
    sub_categeory_type: {
      type: String,
    },
    product: 
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    
  },
  { versionKey: false }
);
const SubCategory = mongoose.model("SubCategory", subCategorySchema);

module.exports = SubCategory;
