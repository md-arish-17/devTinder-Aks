const express = require("express")
const app = express()

app.get("/ab*cd",(req,res)=>{
    res.send("Routing advanced concept")
})

// app.get(/a/,(req,res)=>{
//     res.send("This is advanced routing")
// })

app.get(/.*fly$/,(req,res)=>{
    res.send("This is regex checking")
})

app.get("/user",(req,res)=>{
    console.log(req.query)
    res.send("Data submitted successfully")
})

app.get("/user/:userId",(req,res)=>{
    console.log(req.params)
    res.send("Data submitted successfully")
})

app.get("/user/:userId/:userName/:userPassword",(req,res)=>{
    console.log(req.params)
    res.send("Data finished because i don't know")
})

app.listen(8081,()=>{
    console.log("Port Started Running at 8081")
})