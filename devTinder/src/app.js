const express = require("express")
const app = express()

app.use("/",
    [
    (req,res,next)=>
    {
        console.log("1st route")
        next()
    },
    (req,res,next)=>
    {
        console.log("2nd route")
        // res.send("Data submitted by 2nd route")
        next()
    },
    (req,res,next)=>
    {
        console.log("3rd route")
        // res.send("Data submitted by 3rd route")
        next()
    },
    (req,res,next)=>
    {
        console.log("4th route")
        res.send("Data submitted by 4th route")
    }
    ]
)

app.listen(8081,()=>{
    console.log("Port Started Running at 8081")
});