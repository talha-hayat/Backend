import express, { request, response } from "express"
import mongoose from "mongoose"

// initialize expressin app variable
const app = express()

// Creating port 
const PORT = 5000

app.use(express.json())

app.get("/product",(request,response)=>{
    response.send("Free Phalastine")
})

app.post("/product",(request , response)=>{
    console.log(request.body)
})

// MongoDB
const mongoDB = "mongodb+srv://talhahayat9999:<db_password>@cluster0.cqjb7zt.mongodb.net/"
mongoose.connect(mongoDB)
mongoose.connection.on("connected",()=>console.log("MongoDB Running..."))
mongoose.connection.on("error",(err)=>console.log(err.message))



// Listener
app.listen(PORT,()=>{
    console.log(`server running on port:${PORT} Succesfully`)
})