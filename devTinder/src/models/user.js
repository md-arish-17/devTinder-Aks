const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:2,
        trim:true,
        maxLength:10
    },
    lastName:{
        type:String
    },
    emailId:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        min:18
    },
    gender:{
        type:String,
        validate(value){
            if(!["male","female","other"].includes(value)){
                throw new Error("Gender is not valid")
            }
        }
    },
    photoUrl:{
        type:String,
        default:"https://i.pinimg.com/474x/18/b9/ff/18b9ffb2a8a791d50213a9d595c4dd52.jpg"
    },
    about:{
        type:String,
        default:"This is a default about section"
    },
    skills:{
        type:[String]
    }
},{
    timestamps:true
})

module.exports = mongoose.model("User",userSchema)