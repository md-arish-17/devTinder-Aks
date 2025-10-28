const express = require("express")
const app = express()

const adminAuth = (req,res,next)=>{
    const token = "abcd"
    const isAuthorised = token === "abcd"
    if(isAuthorised){
        next()
    }
    else{
        res.status(401).send("Unauthorised access")
    }
}

const userAuth = (req,res,next)=>{
    const token = "xyz"
    const isAuthorised = token === "xyz"
    if(isAuthorised){
        next()
    }
    else{
        res.status(401).send("Unauthorised user")
    }
}

module.exports = {adminAuth,userAuth}