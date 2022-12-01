import Category from "./../Model/categoryModel";

//POST - create category
exports.createCategory = async (req, res) => {
  try {
    const data = await Category.create(req.body);
    return res.status(201).json({
      status: "success",
      message: "Category created",
      Data: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

//GET - all category list
exports.getCategory = async (req, res) => {
  try {
    const data = await Category.find()
      .populate("sub_category", "sub_categeory_type")
      .populate("product", "product_name");

    return res.status(201).json({
      status: "success",
      result: data.length,
      message: "Category List",
      Data: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

//GET - Category list by filter
exports.filterCategory = async (req, res) => {
    try {
        const data = await Category.find({ categeory: req.params.cat })
         
    
        return res.status(201).json({
          status: "success",
          result: data.length,
          message: "Category List",
          Data: data,
        });
      } catch (error) {
        console.log(error.message);
      }
}


