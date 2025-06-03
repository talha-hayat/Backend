import express from "express"
import mongoose, { connect } from "mongoose"
import User from "./Model/user.js"

const app = express()

const PORT = 5000
app.use(express.json())

mongoose.connect("mongodb+srv://talhahayat9999:talha@cluster0.8e4os90.mongodb.net/")
mongoose.connection.on("connected",()=>{console.log("database connected")})
mongoose.connection.on("error",(error)=>{console.log(error.message)})

app.get("/product",()=>{
    console.log("Get")
})



app.post("/",(request,response)=>{
    response.send("chala")
    console.log(request.body)
    User.create(request.body)
})

app.listen(PORT,()=>{
    console.log("Listening")
})