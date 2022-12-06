import express from "express";
import {
  createSubCaegory,
  getSubCategory,
  filterSubCategory,
  subCategoryList,
  updateSubCategoryList,
} from "../Controller/subcategory-controller";

const router = express.Router();

router.route("/createSub").post(createSubCaegory);
router.route("/getsub").get(getSubCategory);
router.route("/filter/:sub").get(filterSubCategory);
router.route("/subList").get(subCategoryList);
router.route("/:id").put(updateSubCategoryList);

module.exports = router;
