import SubCategory from "./../Model/subCategoryModel";

//POST - create sub-category
exports.createSubCaegory = async (req, res) => {
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
      Error:error
    })  }
};

//GET - all sub-category
exports.getSubCategory = async (req, res) => {
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
      Error:error
    })  }
};

// GET - filter sub-category type by passing params
exports.filterSubCategory = async (req, res) => {
  try {
    const data = await SubCategory.find({ sub_categeory_type: req.params.sub });
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
      Error:error
    })  }
};

