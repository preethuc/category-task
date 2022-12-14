import express from "express";
import morgan from "morgan";
// import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
import productRoute from "./Route/product-route";
import subCategoryRoute from "./Route/subcategory-route";
import categoryRoute from "./Route/category-route";

const app = express();
app.use(morgan("dev"));
app.use(fileUpload());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  console.log("middleware working");
  next();
});

app.use("/api/product/", productRoute);
app.use("/api/sub/", subCategoryRoute);
app.use("/api/cat/", categoryRoute);

module.exports = app;
