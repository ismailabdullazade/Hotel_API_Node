import express from "express"
import mongoose from "mongoose"
import router from "./routes/user-routes.js"
import blogRouter from "./routes/blog-routes.js"



const app = express()
app.use(express.json())

app.use("/api/user",router)
app.use("/api/blog",blogRouter)

mongoose.connect('mongodb+srv://admin:1234567898@cluster0.rqhzi0m.mongodb.net/Blog?retryWrites=true&w=majority')
.then(()=>app.listen(5000)).then(()=>console.log("Connected to DB")).catch((err)=>console.log(err))

