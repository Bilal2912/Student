const mongoose = require('mongoose');
const product = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    count:{
        type:Number,
        required:true
    }
})
const Product = new mongoose.model("Product", product);
module.exports = Product;