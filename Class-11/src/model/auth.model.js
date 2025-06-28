import { model, Schema } from "mongoose";

const productSchema = new Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
})

const User = model("User",productSchema)

export default User