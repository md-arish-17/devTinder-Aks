const express = require("express")
const app = express()

//Without middleware concept

app.use("/getUserData",(req,res)=>{
    const token = "abcd"
    const isAuthorized = token === "abcd"
    if(isAuthorized){
        res.send("All data sent")
    }
    else{
        res.status(401).send("Unauthorised request")
    }
})

app.delete("/deleteUser",(req,res)=>{
    const token = "abcd"
    const isAuthorized = token === "abcd"
    if(isAuthorized){
        res.send("User deleted")
    }
    else{
        res.status(401).send("Unauthorised request")
    }
})

app.listen(8081,()=>{
    console.log("Port Started Running at 8081")
});