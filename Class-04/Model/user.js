import mongoose from "mongoose";

const schemaname = new mongoose.Schema(
    {
        name:{
            type:String
        }
    }
)

const User = mongoose.model("User",schemaname)

export default User