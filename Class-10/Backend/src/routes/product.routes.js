import express from "express";
import { createProduct } from "../controller/product.controller.js";

const productRoutes = express.Router();

productRoutes.post("/",createProduct);

export default productRoutes;

