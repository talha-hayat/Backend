import { model, Schema } from "mongoose";

const productSchema = new Schema({
    name:{
        type:String
    },
    price:{
        type:String
    },
    stock:{
        type:String
    },
    description:{
        type:String
    }
})

const Product = model("products",productSchema)
export default Product