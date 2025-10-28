const express = require("express")
const app = express()
app.use(express.json())
const {connectDB} = require("../src/config/database")
const User = require("../src/models/user")

app.post("/signup",async(req,res)=>{
    // console.log(req.body)
    const user = new User(req.body)
    try{
        await user.save()
        res.send("User added Successfully")
    }
    catch(err){
        console.log("Error while submitting data")
        console.error(err)
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

