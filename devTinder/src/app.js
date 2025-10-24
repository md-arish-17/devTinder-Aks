const express = require("express")
const app = express()

app.use("/",(req,res)=>{
    res.send("Hellow this home page")
})

app.listen(8081,()=>{
    console.log("Port Started Running at 8081")
})