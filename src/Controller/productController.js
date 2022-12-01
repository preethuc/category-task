import Product from "./../Model/productModel";
import fs from "fs";

//POST - create product
exports.createProduct = async (req, res) => {
  try {
    const filename = Date.now() + "__" + req.files.product_image.name;
    const file = req.files.product_image;

    console.log(file);
    
    var dir = "./temp/" + filename ;
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(filename);
    }
    file.mv(dir);

    const productData = await Product.create({
      product_name: req.body.product_name,
      product_image: dir,
    });
    return res.status(201).json({
      status: "success",
      message: "Product Created",
      Data: {
        id: productData.id,
        product_name: productData.product_name,
        product_image: dir,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

//GET - All product
exports.getProduct = async (req, res) => {
  try {
      const data = await Product.find()
      return res.status(201).json({
        status: "success",
        result:data.length,
          message: "Products List",
          Data: data
        }); 
  } catch (error) {
      console.log(error.message);
  }
}
