import express from "express";
import connectDB from "./src/Config/db.js";
import dotenv from "dotenv";

const app = express();
const PORT = 3000;

dotenv.config();

app.use(express.json());

connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})