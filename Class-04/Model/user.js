import mongoose from "mongoose";

const schemaname = new mongoose.Collection(
    {
        name:{
            type:string
        }
    }
)

const User = mongoose.model("User",schemaname)

export default User