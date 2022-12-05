import Product from "./../Model/productModel";
import fs from "fs";

exports.imageUpload = async (req, res) => {
  try {
    const filename = Date.now() + "__" + req.files.product_image.name;
    const file = req.files.product_image;
    console.log(file);
    let dir = "./upload/"  + req.query.folder_name ; 

      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
    let uploadPath = "./upload/" + req.query.folder_name + "/" + filename
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
              message:"Uploaded",
              image:uploadPath,
          })
      }
})
    
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
