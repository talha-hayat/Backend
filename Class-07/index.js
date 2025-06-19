import express from "express"
import mongoose from "mongoose"
import Product from "./Model/product.js"

// Initialization
const app = express()
const PORT = 5000

// Middle ware
app.use(express.json())

// Backend Connection 
const DB_Uri = ""
mongoose.connect(DB_Uri)
mongoose.connection.on("connected", () => console.log("DB connected"))
mongoose.connection.on("error", () => console.log("DB not connected"))

// CRUD

// Create => post
app.post("/product", async (req, res) => {
    try {
        const product = await Product.create(req.body)

    } catch (error) {
        return res.status(500).json({
            message: "An error occure while Adding product",
            error: error.message
        })
    }
})

// Read => GET
app.get("/product", async (req, res) => {
    try {
        const product = await Product.find()
        res.status(201).json(
            product
        )
    } catch (error) {
        return res.status(500).json({
            message: "An error occure while Getting products",
            error: error.message
        })
    }
})

// UPDATE => Put
app.put("/product", async (req, res) => {
    try {
        const { _id } = req.body
        const product = await Product.findByIdAndUpdate(_id, {"name": "PC"})
        res.send(product)
    } catch (error) {
        return res.status(500).json({
            message: "An error occure while updating Product",
            error: error.message
        })
    }
})

// DELETE => Delete
app.delete("/product",async (req, res)=>{
    try{
        const {_id}= req.body 
        const product = await Product.findByIdAndDelete(_id)
        res.send("Product delete successfully")
    } catch (error) {
        return res.status(500).json({
            message:"An error occure while deleting product",
            error:error.message
        })
    }
})

// Listner 
app.listen(PORT, () => {
    console.log("server is up {Free Phlastine}")
})