const express = require("express")
const app = express()
const {connectDB} = require("../src/config/database")
const User = require("../src/models/user")

app.post("/signup",async(req,res)=>{
    const user = new User({
        firstName:"Virat",
        lastName:"Kohli",
        emailId:"virat17@gmail.com",
        password:"virat@123"
    })
    await user.save()
    res.send("User added Successfully")
})

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

