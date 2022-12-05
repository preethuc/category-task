

//Multer process- image upload
// import fs from "fs";
// import multer from "multer";

// const fileStorageEngine = multer.diskStorage({
//   destination: function (req, file, cb) {
//     let folderPath = req.query.folderPath;
//   folderPath = `./${folderPath}`;
//   if (!fs.existsSync(folderPath)) {
//     fs.mkdirSync(filename , {
//       recursive: true,
//     });
//   }
//    cb(null, `${folderPath}/`);
//   },

//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });
// const upload = multer({ storage: fileStorageEngine });

// module.exports = upload;


// //dynamic-image upload -controller code - multer process
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


//dynamic-image upload -another method
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



//file upload in route
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



