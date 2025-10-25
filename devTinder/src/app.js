const express = require("express")
const app = express()

app.use("/home",(req,res)=>{
    res.send("This is home page")
})

app.use("/hello",(req,res)=>{
    res.send("Hellow page")
})

app.use("/about",(req,res)=>{
    res.send("this is about page")
})

app.listen(8081,()=>{
    console.log("Port Started Running at 8081")
})