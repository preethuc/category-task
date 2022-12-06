import express from "express";
import {
  createProduct,
  getProduct,
  imageUpload,
} from "./../Controller/product-controller";
// import upload from "./../utils/multer";
const router = express.Router();
router.route("/create").post(createProduct);
router.route("/get").get(getProduct);
router.route("/img").post(imageUpload);

module.exports = router;
