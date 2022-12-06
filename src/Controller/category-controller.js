import Category from "../Model/category-model";

//POST - create category
export const createCategory = async (req, res) => {
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
export const getCategory = async (req, res) => {
  try {
    const data = await Category.find().populate(
      "sub_category",
      "sub_categeory_type"
    );
    // .populate("products", "product");

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
export const filterCategory = async (req, res) => {
  try {
    const data = await Category.find({ category: req.params.cat }).populate(
      "sub_category",
      "sub_categeory_type"
    );
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

//GET -  select category name filed
export const categoryListName = async (req, res) => {
  try {
    const data = await Category.find().select("category").exec();

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

//GET - category by Id
export const getCategoryById = async (req, res) => {
  try {
    const data = await Category.findById(req.params.id).populate(
      "sub_category",
      "sub_categeory_type"
    );
    // .populate("product", "product_name");

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

// PUT - adding sub_category
export const updateCategoryList = async (req, res, next) => {
  try {
    const subCategoryId = req.params.id;
    const data = await Category.findById(subCategoryId).exec();
    let sub_category = data.sub_category;
    console.log(sub_category);
    if (data) {
      sub_category.push(req.body.sub_category);
      Category.findByIdAndUpdate(
        subCategoryId,
        { sub_category: sub_category },
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
              message: "sub_category Added successfully",
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
