const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name:String,
    category:String,
    price:Number,
    rating:Number
},
{
    versionKey:false
});

const ProductModel = mongoose.model("product",productSchema);

module.exports = ProductModel;