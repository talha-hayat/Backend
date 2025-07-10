import express from "express"
import connectDb from "./Src/Config/db.js"
import dotenv from "dotenv";
import authRoutes from "./Src/Routes/authroutes.js";
import multer from "multer";
import { storage } from "./Src/Config/cloudinry.js";

dotenv.config();

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDb()

// Routes
app.use("/api", authRoutes);

// upload image
const upload = multer({ storage })
app.post("/upload", upload.single("key"), (req, res) => {
    try {
        return res.status(201).json({
            ImageUrl: req.file.path
        })
    } catch (error) {
        res.status(500).status({
            message: "Image not upload",
            error: error.message
        })
    }
})

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
