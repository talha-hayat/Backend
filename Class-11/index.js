// IMPORTING PACKAGES
import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.config.js";
import authRoute from "./src/routes/auth.router.js";
import productRoute from "./src/routes/product.rputer.js";

// CONFIGURING DOTENV
dotenv.config()

// EXPRESS APP
const app = express()
const PORT =5000;

// MIDDLEWARE
app.use(express.json())

// DATABASE CONNECTION
connectDB();

// ROUTES
app.use("/api",authRoute)
app.use("/product",productRoute)

// LISTENING
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})