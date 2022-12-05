import express from "express";
import productController from "./../Controller/productController";
// import upload from "./../utils/multer";
const router = express.Router();
router.route("/create").post(productController.createProduct);
router.route("/get").get(productController.getProduct);

router.route("/img").post(productController.imageUpload);


module.exports = router;
