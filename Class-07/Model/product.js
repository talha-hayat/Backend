import { model, Schema } from "mongoose";

const productSchema =new Schema({
    name:{
        type : String
    },
    price :{
        type:String
    },
    description:{
        type : String
    },
    stock: {
        type:String
    },
    reviews:[
        {
            type:String
        }
    ]
})

const Product = model("products",productSchema)

export default Product