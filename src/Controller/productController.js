import Product from "./../Model/productModel";
import fs from "fs"
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

exports.imageUpload = async (req, res) => {
  try {
    const filename = Date.now() + "__" + req.files.product_image.name;
    const file = req.files.product_image;
    console.log(file);
    let dir = "./upload/" + req.query.folder_name;
    
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
    let uploadPath =  "/upload/" + req.query.folder_name;
    console.log(dir);
    file.mv(uploadPath,(err)=>{
      if(err){
          return res.status(400).json({
              status:'fail',
              error:err
          })
      }
      else {
          res.status(200).json({
              status:'success',
              message:"it's OK...!"
          })
      }
})
    // const newImage = await new Product(req.body);
    // console.log(newImage);
    // newImage.save();
    // res.status(200).json({
    //   status: "success",
    //   message: "file uploaded",
    //   image: newImage.product_image,
    // });
  } catch (error) {
    console.log(error.message);
  }
};

//POST - create product
exports.createProduct = async (req, res) => {
  try {
    const productData = await Product.create(req.body);
    return res.status(201).json({
      status: "success",
      message: "Product Created",
      Data: productData,
    });
  } catch (error) {
    console.log(error.message);
  }
};

//GET - All product
exports.getProduct = async (req, res) => {
  try {
    const data = await Product.find();
    return res.status(201).json({
      status: "success",
      result: data.length,
      message: "Products List",
      Data: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
