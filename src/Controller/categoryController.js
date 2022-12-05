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
    res.status(400).json({
      status: "fail",
      Message: "ERROR Occured",
      Error: error,
    });
  }
};

//GET - all category list
exports.getCategory = async (req, res) => {
  try {
    const data = await Category.find()
      .populate("sub_category", "sub_categeory_type")
      .populate("product", "product_name");

    return res.status(200).json({
      status: "success",
      result: data.length,
      message: "Category List",
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

//GET - Category list by filter
exports.filterCategory = async (req, res) => {
  try {
    const data = await Category.find({ category: req.params.cat });

    return res.status(201).json({
      status: "success",
      result: data.length,
      message: "Category List",
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

//GET - aggregate category by category name
exports.CategoryListName = async (req, res) => {
  try {
    const data = await Category.aggregate([
      {
        $group: {
          _id: "$category",
      
          // _id: { $toUpper: "$category" },

          // numProducts:{$sum:1},
        },
      },
    ]);
    res.status(200).json({
      status: "success",
      message: "Category names List",
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

