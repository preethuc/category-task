// //dynamic-image upload
// exports.createDynamicImage = async (req, res) => {
//   try {
//     const newImage = await new Product(req.body);
//     console.log(req.file);
//     if (req.file) {
//       console.log(req.file);
//       newImage.product_image = req.file.path;
//     }
//     newImage.save();

//     res.status(201).json({
//       status: "success",
//       message: "successfully created",
//       image: newImage.product_image,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
//dynamic-image upload
// exports.createDynamicImage = async (req, res) => {
//   try {
//     console.log("file");
//     const newImage = await new Product(req.body);
//     newImage.save();

//   const filename = Date.now() + "__" + req.files.product_image.name;
//   const file = req.files.product_image;

//   return  res.status(201).json({
//             status: "success",
//             message: "successfully created",
//             image: newImage.product_image,
//           });
//   var dir = "./temp/" + filename ;
//   if (!fs.existsSync(dir)) {
//     fs.mkdirSync(filename);
//   }

//  } catch (error) {
//   console.log(error.message);
//  }

// }


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