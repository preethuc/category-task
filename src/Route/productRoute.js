import express from "express";
import productController from "./../Controller/productController";
import upload from "./../utils/multer"

const router = express.Router();

router.route("/create").post(productController.createProduct);

router
  .route("/dynamicImg")
  .post(upload.single("product_img"), productController.createDynamicImage);
//   version + "/upload_files_dynamic",
//   multer.upload.single("file_name"),
//   file_upload_dynamic_folder
// );
router.route("/get").get(productController.getProduct);

module.exports = router;
