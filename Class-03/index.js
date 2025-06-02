const express = require("express")
const { default: mongoose } = require("mongoose")
const Name = require("./Model/Collections.js")

const app = express()

const PORT = 5000

app.use(express.json())

const db = "mongodb+srv://talhahayat9999:talha@cluster0.rklwnhx.mongodb.net/"
mongoose.connect(db)
mongoose.connection.on("connected",()=>{console.log("DATA BASE connected")})
mongoose.connection.on("error",(error)=>{console.log("DATA BASE not connected")})

app.get("/",(request,response)=>{
    console.log("app is running....")
})

app.post("/",async (request,response)=>{
    console.log(request.body)

    await Name.create(request.body)
})

app.listen(PORT , ()=>{
    console.log(`app is runnig on Port:${PORT}`)
})