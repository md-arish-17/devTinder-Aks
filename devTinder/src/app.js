const express = require("express")
const app = express()
app.use(express.json())
const {connectDB} = require("../src/config/database")
const User = require("../src/models/user")

// Submitting Data
app.post("/signup",async(req,res)=>{
    // console.log(req.body)
    const user = new User(req.body)
    try{
        await user.save()
        res.send("User added Successfully")
    }
    catch(err){
        res.status(401).send("Something went wrong while posting user")
    }
})

// Finding User by Email
app.get("/userEmail",async(req,res)=>{
    const userEmail = req.body.emailId
    try{
        const userData = await User.find({emailId:userEmail})
        if(userData.length === 0){
            res.status(404).send("User Not Found")
        }
            res.send(userData)
    }
    catch(err){
        res.status(401).send("Something went wrong while getting data")
    }
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

