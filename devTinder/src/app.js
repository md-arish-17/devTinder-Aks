const express = require("express")
const app = express()

app.use("/",(error,req,res,next)=>{
    if(error){
        res.status(501).send("Something went wrong")
    }
    else{
        res.send("all data sent")
    }
})

app.listen(8081,()=>{
    console.log("Port Started Running at 8081")
});