import { model, Schema } from "mongoose";

const productSchema = new Schema({
    name:{
        type:String,
    }
})

const Product = model("Product", productSchema);

export default Product;