import express from "express"
import mongoose from "mongoose"
import USER from "./Model/user.js"
import bcrypt from "bcryptjs";
import  jwt  from "jsonwebtoken";
import cors from "cors"

const app = express()
const PORT = 5000

// MiddleWare 
app.use(express.json())
app.use(cors())

// DATABASE
const DB_Uri = ""
mongoose.connect(DB_Uri)
mongoose.connection.on("connected",()=>console.log("DB connected"))
mongoose.connection.on("error",()=>console.log("DB Error...."))

// SIGNUP Functionality 
app.post("/signup",async (req,res)=>{
    try {
        const {email, password}= req.body

        // Empty fields 
        if(!email || !password){
            return res.status(400).json({
                message:"Required fields are missing",
                status:false
        })
        }

        // Exist User 
        const existuser = await USER.findOne({email})
        if(existuser){
            return res.status(401).json({
                message:"User already exist",
                status:false
            })
        }

        
        // Password Encription
        const hashpassword = bcrypt.hashSync(password,(10))
        
        const userobj = {
            email,
            password:hashpassword
        }

        // sent to database 
        const user = await USER.create(userobj)
        return res.status(201).json({
            message:"SIgnUp successfully",
            user
        })
    } catch (error) {
        return res.status(501).json({
            message:"An Error Occured",
            error:error.message
        })
    }
})

// SigiIn 
app.post("/signin", async (req,res)=>{
    try {
        const {email,password} = req.body

        // Empty Fields
        if(!email || !password){
            return res.status(400).json({
                message:"Required fields are missing",
                status:false
            })
        }

        // Exist user 
        const existuser = await USER.findOne({email})
        if(!existuser){
            return res.status(400).json({
                message:"User Not Found",
                status:false
            })
        }

        // Comparing password
        // if(existuser.password === req.body.password){
        //     return res.send("user login successfully")
        // }
        // return res.status(400).send("Wrong crartentials")

        // Other way to compare Password
        const comparepassword =bcrypt.compareSync(password , existuser.password)
        if(!comparepassword){
            return res.status(400).json({
                message:"invalid credential"
            })
        }

        // JWT token for login
        const accesstoken = jwt.sign({
            email:existuser.email,
            id:existuser._id
        }, "key",
        {expiresIn:"15m"})

        const refreshtoken = jwt.sign({
            email:existuser.email,
            id:existuser._id
        },"refreshKey",
        {expiresIn:"1d"})

        return res.status(200).json({
            message:"User login successfully",
            accesstoken,
            refreshtoken
        })


    } catch (error) {
        return res.status(500).json({
            message:"An Error Occure",
            error:error.message
        })
    }
})

// Listner 
app.listen(PORT,()=>{
    console.log(`Server is runing on ${PORT} port`)
})

