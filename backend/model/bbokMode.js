const mongoose = require("mongoose");
const bookSchema = mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    stime:{
        type:String,
        required:true
    },
    etime:{
        type:String,
        required:true
    },
    mode:{
        type:String,
        required:true
    },
    medicine:[]
    })


const bookModel = mongoose.model("book",bookSchema);
module.exports = bookModel