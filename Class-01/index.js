import express from "express"
import mongoose from "mongoose"


// App Variable
const app = express()

// Port
const PORT = 8080

// Body parse
app.use(express.json())

// Response 
app.get("/",(request,response)=>{
        response.send("hello")
})

app.post("/",(request,response)=>{
    console.log(request.body)
})

// Listening
app.listen(PORT,()=>{
    console.log(`DATABASE Runing ${PORT}`)
})

// MongoDb connection
const connection = mongoose.connect("mongodb+srv://Talha:<db_password>@cluster0.fsqz8q8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>console.log("Free Phalatastine"))
.catch((error)=>console.log(error.message))