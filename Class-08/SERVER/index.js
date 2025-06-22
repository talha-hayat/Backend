import express from "express"
import mongoose from "mongoose"
import Product from "./Model/product.js"

const app = express()
const PORT = 5000

// MiddleWare
app.use(express.json())

// DATA BASE CONNECTION 
const DB_URI = ""
mongoose.connect(DB_URI)
mongoose.connection.on("connected", () => console.log("DATABASE Connected"))
mongoose.connection.on("error", () => console.log("DATABASE Not Connected!"))

app.post("/product", (req, res) => {
    try {
        const product = Product.create(requestAnimationFrame.body)
        res.status(200).json({
            message: "product created successfully",
            product
        })
    } catch (error) {
        res.status(500).json({
            message:"an error occure",
            error:error.message
        })
    }
})

// LISTENER
app.listen(PORT, () => {
    console.log("SERVER IS UP")
})