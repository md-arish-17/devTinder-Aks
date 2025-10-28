const express = require("express")
const app = express()
const {adminAuth,userAuth} = require("../src/Middlewares/auth")

//Middleware concept

app.use("/admin", adminAuth)
app.use("/user",userAuth)

app.use("/admin/getUserData",(req,res)=>{
    res.send("All data sent")
})

app.delete("/admin/deleteUser",(req,res)=>{
    res.send("User deleted")
})

app.get("/user/userEmail",(req,res)=>{
    res.send("Your email is testing123@gmail.com")
})

app.listen(8081,()=>{
    console.log("Port Started Running at 8081")
});