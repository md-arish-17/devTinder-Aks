// mongodb+srv://mdarish_db_user:FlQ7C63zn6FUCMvv@arish-node.sciymdt.mongodb.net/

const mongoose = require("mongoose")

const connectDB = async()=>{
    await mongoose.connect(
        "mongodb+srv://mdarish_db_user:FlQ7C63zn6FUCMvv@arish-node.sciymdt.mongodb.net/devTinder"
    )
}

module.exports = {connectDB}