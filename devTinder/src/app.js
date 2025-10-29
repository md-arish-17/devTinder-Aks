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

// Feed API get all the data from the database
app.get("/feed",async(req,res)=>{
    try{
        const users = await User.find({})
        res.send(users)
    }
    catch(err){
        res.status(500).send("Something went wrong while fetching data")
    }
})

// findOne by Email
app.get("/userEmail/FindOne",async(req,res)=>{
    const userEmail = req.body.emailId
    try{
        const userData = await User.findOne({emailId:userEmail})
        if(!userData){
            res.status(404).send("User not found")
        }
        res.send(userData)
    }
    catch(err){
        res.status(500).send("Something went wrong while fetching data with findOne")
    }
})


//findById and Delete
app.delete("/user/dataDelete",async(req,res)=>{
    const userId = req.body._id
    try{
        const userDeleted = await User.findByIdAndDelete({_id:userId})
        if(!userDeleted){
            res.status(404).send("User did not exist")
        }
        res.send("User Deleted Successfully",userDeleted)
    }
    catch(err){
        res.status(500).send("Internal Server Error while deleting user")
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

