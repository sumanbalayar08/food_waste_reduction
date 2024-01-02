const express=require("express")
const cors=require("cors")
const app=express()

const connectDB=require("./config/db")
const FoodRouter=require('./routes/FoodRoutes.js')
app.use(express.json())
connectDB()


app.use('/',FoodRouter)
app.get('/',async(req,res)=>{
    res.send("Hello from server")
})

const PORT=4000
app.listen(PORT,()=>{
    console.log(`Server Started at port ${PORT} successfully`)
})