import express from "express";
import categoryController from "./../Controller/categoryController";

const router = express.Router();

router.route("/createCat").post(categoryController.createCategory);
router.route("/getCat").get(categoryController.getCategory);
router.route("/fil/:cat").get(categoryController.filterCategory);
router.route("/List").get(categoryController.CategoryListName);
router.route("/catId/:id").get(categoryController.getCategoryById);
router.route("/:id").put(categoryController.updateCategoryList);



module.exports = router;
