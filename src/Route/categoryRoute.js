import express from "express";
import categoryController from "./../Controller/categoryController";

const router = express.Router();

router.route("/createCat").post(categoryController.createCategory);
router.route("/getCat").get(categoryController.getCategory);
router.route("/fil/:cat").get(categoryController.filterCategory);


module.exports = router;