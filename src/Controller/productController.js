import Product from "./../Model/productModel";

//dynamic-image upload
exports.createDynamicImage = async (req, res) => {
  try {
    const newImage = await new Product(req.body);
    console.log(req.file);
    if (req.file) {
      console.log(req.file);
      newImage.product_image = req.file.path;
    }
    newImage.save();

    res.status(201).json({
      status: "success",
      message: "successfully created",
      image: newImage.product_image,
    });
  } catch (error) {
    console.log(error);
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
