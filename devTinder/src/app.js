const express = require("express")
const app = express()

//Middleware concept

app.use("/admin",(req,res,next)=>{
    const token = "udifkud"
    const isAuthorised = token === "abcd"
    if(isAuthorised){
        next()
    }
    else{
        res.status(401).send("Unauthorised access")
    }
})

app.use("/admin/getUserData",(req,res)=>{
        res.send("All data sent")
})

app.delete("/admin/deleteUser",(req,res)=>{
        res.send("User deleted")
})

app.listen(8081,()=>{
    console.log("Port Started Running at 8081")
});