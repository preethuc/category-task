import express from "express";
import productController from "./../Controller/productController";
// import upload from "./../utils/multer";
const router = express.Router();
router.route("/create").post(productController.createProduct);
router.route("/get").get(productController.getProduct);

router.route("/img").post(productController.imageUpload);

// router.route("/dynamicImg")
// // .post(productController.createDynamicImage);
// .post(upload.single("product_img"), productController.createDynamicImage);
// router.route("/dynamicImg").post(async (req, res) => {
//   try {
//     console.log(req.files);
//     const newImage = await new Product(req.body);
//     // newImage.save();

//     const filename = Date.now() + "__" + req.files.product_image.name;
//     const file = req.files.product_image;

//     let folderPath = req.body.folderPath;
//     folderPath = `./${folderPath}`;
//     if (!fs.existsSync(folderPath)) {
//       fs.mkdirSync(folderPath + filename, {
//         recursive: true,
//       });
//     }
//     file.mv(folderPath);
//     //send response
//     res.send({
//       status: "success",
//       message: "File is uploaded",
//       data: {
//         product_image: newImage.product_image,
//       },
//     });
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

module.exports = router;
