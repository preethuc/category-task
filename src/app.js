import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";

import productRoute from "./Route/productRoute";
import subCategoryRoute from "./Route/subCategoryRoute";
import categoryRoute from "./Route/categoryRoute";



const app = express();
app.use(fileUpload());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  console.log("middleware working");
  next();
});

app.use("/api/product/", productRoute);
app.use("/api/sub/", subCategoryRoute);
app.use("/api/cat/", categoryRoute);



module.exports = app;
