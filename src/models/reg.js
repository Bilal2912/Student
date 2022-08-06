const mongoose = require('mongoose');
const register = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    uid:{
        type:Number,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})
const Reg = new mongoose.model("RegStud", register);
module.exports = Reg;