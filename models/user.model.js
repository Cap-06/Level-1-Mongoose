const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    firstName:String,
    lastName:String,
    age:Number,
    email:String,
    phoneNo:Number
},
{
    versionKey:false
});

const UserModel = mongoose.model("user",userSchema);

module.exports = UserModel;