import SubCategory from "../Model/subcategory-model";

//POST - create sub-category
export const createSubCaegory = async (req, res) => {
  try {
    const data = await SubCategory.create(req.body);
    return res.status(201).json({
      status: "success",
      message: "Sub-Category Created",
      Data: data,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      Message: "ERROR Occured",
      Error: error,
    });
  }
};

//GET - all sub-category
export const getSubCategory = async (req, res) => {
  try {
    const data = await SubCategory.find().populate("product");
    return res.status(201).json({
      status: "success",
      result: data.length,
      message: "Sub-Category",
      Data: data,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      Message: "ERROR Occured",
      Error: error,
    });
  }
};

// GET - filter sub-category type by passing params
export const filterSubCategory = async (req, res) => {
  try {
    const data = await SubCategory.find({
      sub_categeory_type: req.params.sub,
    }).populate("product");
    return res.status(201).json({
      status: "success",
      result: data.length,
      message: "sub-category list",
      Data: data,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      Message: "ERROR Occured",
      Error: error,
    });
  }
};

//GET - select subcategory-type field 
export const subCategoryList = async (req, res) => {
  try {
    const data = await SubCategory.find().select("sub_categeory_type").exec()
     
    res.status(200).json({
      status: "success",
      message: "Sub-Category names List",
      Data: data,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      Message: "ERROR Occured",
      Error: error,
    });
  }
};

// PUT - adding product in sub_category
export const updateSubCategoryList = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const data = await SubCategory.findById(productId).exec();
    let product = data.product;
    console.log(product);
    if (data) {
      product.push(req.body.product);
      SubCategory.findByIdAndUpdate(
        productId,
        { product: product },
        { new: true },
        function (err, result) {
          if (err) {
            console.log(err);
            return res.json({
              success: true,
              message: err.message,
            });
          } else {
            return res.json({
              success: true,
              message: "product Added successfully",
              data: result,
            });
          }
        }
      );
    }
  } catch (error) {
    res.status(400).json({
      status: "fail",
      Message: "ERROR Occured",
      Error: error,
    });
  }
};
