const express = require("express")
const app = express()
const {connectDB} = require("../src/config/database")

connectDB()
.then(()=>{
    console.log("Database Connected Successfully")
    app.listen(8081,()=>{
        console.log("Server started running at port 8081")
    })
})
.catch((error)=>{
    console.error(error)
    console.log("Database did'nt connect")
})

