const express = require("express")
const app = express()

app.get("/user",(req,res)=>{
    res.send("All data got fetched successfully")
})

app.post("/user",(req,res)=>{
    res.send("All data posted successfully")
})

app.delete("/user",(req,res)=>{
    res.send("Data deleted successfully")
})

app.listen(8081,()=>{
    console.log("Port Started Running at 8081")
})