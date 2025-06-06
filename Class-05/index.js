import express from "express"
import mongoose from "mongoose"
import User from "./Model/user.js"

const app = express()
const PORT = 5000

app.use(express.json())

mongoose.connect("")
mongoose.connection.on("connected",()=>console.log("Database connected"))
mongoose.connection.on("error",(error)=>console.log(error.message))


app.post("/",async (req,res)=>{
    const {user_name,email, password} = req.body

    if(!user_name || !email || !password){
        return res.status(400).json({
            status:false,
            messge:"Required field are missimg"
        })
    }

    const existingUser =await User.findOne({email})
    if (existingUser){
       return res.status(400).json({
        status:false,
        maessage:"User already Exist"
        })
    }

    return User.create(req.body)
})

app.listen(PORT,()=>{
    console.log("checking...")
})

