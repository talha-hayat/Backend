import mongoose, { Schema } from "mongoose"

const productSchema = new Schema({
    name:{
        type:String,
    },
    price:{
        type:Number,
    },
    description:{
        type:String,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }
})

const Product = mongoose.model("Product",productSchema)

export default Product