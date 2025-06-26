import express from "express"
import mongoose from "mongoose"
import Product from "./model/product.js"
import cors from "cors"

const app = express()
const PORT = 5000

// MIDDLEWARE
app.use(express.json())
app.use(cors())

// DATABASE CONNECTION
const DB_URI = "mongodb+srv://talhahayat9999:talha@cluster0.8e4os90.mongodb.net/"
mongoose.connect(DB_URI)
mongoose.connection.on("connected",()=>console.log("DB Connected"))
mongoose.connection.on("error",()=>console.log("DB Not Connected"))

// POST API
app.post("/product",async (req,res)=>{
    try {
        const product = await Product.create(req.body)
        console.log(product)
    } catch (error) {
       return res.status(500).json({
        message:"An error occure while Creating Product",
        error:error.message
    })
    }
})

app.listen(PORT,()=>{
    console.log("Server is up")
})