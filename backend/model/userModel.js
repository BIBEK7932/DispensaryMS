const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    about:{
        type:String,
        required:true
    },
    profilePhoto: {
        type: String, // Assuming the profile photo is stored as a URL
        required: false // Assuming the profile photo is optional
    }
})

const userModel = new mongoose.model("user",userSchema);
module.exports = userModel