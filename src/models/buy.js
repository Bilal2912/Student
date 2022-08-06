const mongoose = require('mongoose');
// const { required } = require('nodemon/lib/config');
// const bcrypt = require('bcryptjs');
// const res = require('express/lib/response');
// const jwt = require('jsonwebtoken');

const issueProduct = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    uid:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    year:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    facname:{
        type:String,
        required:true
    },
    ssd:{
        type:Date,
        required:true
    },
    sed:{
        type:Date,
        required:true
    },
    brd:{
        type:String,
        required:true
    },
    issdate:{
        type:Date,
        required:true
    },
    retdate:{
        type:Date,
        required:true
    },
    autho:{
        type:String,
        required:true
    },
    pname:{
        type:String
    }
})

// studentSchema.methods.generateToken = async function(){
//     try {
//         const token = jwt.sign({_id:this._id.toString()}, process.env.SECRET_KEY);
//         this.tokens = this.tokens.concat({token:token});
//         // await this.save();
//         return token;
//     } catch (error) {
//         res.send(error);
//     }
// }

// studentSchema.pre("save", async function(next){
//     if(this.isModified("pass")){
//         this.pass = await bcrypt.hash(this.pass,10);
//         this.confirmpass = await bcrypt.hash(this.pass,10);
//     }
//     next();
// })

const Buy = new mongoose.model("BuyProd", issueProduct);
module.exports = Buy;