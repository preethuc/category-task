import express from "express";
import productController from "./../Controller/productController";

const router = express.Router();

router.route("/create").post(productController.createProduct);
router.route("/get").get(productController.getProduct);

module.exports = router;
