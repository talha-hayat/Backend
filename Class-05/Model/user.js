import { model, Schema } from "mongoose";

const schemaName = new Schema({
    user_name:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    }
})

const User = model("Users" ,schemaName)

export default User