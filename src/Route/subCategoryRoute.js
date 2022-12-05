import express from "express";
import subCategoryController from "./../Controller/subCategorycontroller";

const router = express.Router();

router.route("/createSub").post(subCategoryController.createSubCaegory);
router.route("/getsub").get(subCategoryController.getSubCategory);
router.route("/filter/:sub").get(subCategoryController.filterSubCategory);



module.exports = router;
