import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        const mongconnect = await mongoose.connect(process.env.MONGO_URI)
        console.log("Database connected successfully");
    } catch (error) {
        console.log(`Database connection error: ${error.message}`); 
    }
}

export default connectDB;