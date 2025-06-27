import express from "express";
import connectDB from "./src/config/db.js";
import productRoutes from "./src/routes/product.routes.js";
import  dotenv  from "dotenv";

const app = express();
const PORT = 5000;

dotenv.config();

// MIDDLEWARE
app.use(express.json())

// DATABASE CONNECTION
connectDB();

// ROUTES
app.use("/api",productRoutes)


app.listen(PORT, () => {
  console.log("Server is running ");
});