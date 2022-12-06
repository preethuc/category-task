import express from "express";
import {
  createCategory,
  getCategory,
  filterCategory,
  categoryListName,
  getCategoryById,
  updateCategoryList,
} from "../Controller/category-controller";

const router = express.Router();

router.route("/createCat").post(createCategory);
router.route("/getCat").get(getCategory);
router.route("/fil/:cat").get(filterCategory);
router.route("/List").get(categoryListName);
router.route("/catId/:id").get(getCategoryById);
router.route("/:id").put(updateCategoryList);

module.exports = router;
