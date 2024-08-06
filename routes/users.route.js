const express = require("express");
const UserModel = require("../models/user.model")

const userRouter = express.Router();

userRouter.get("/get-users",async (req,res)=>{
    try {
        const user = await UserModel.find();
        res.send(user)
    } catch (error) {
        res.send(`error getting users ${error}`);
    }
})

userRouter.post("/add-user",async (req,res)=>{

    try {
        const {firstName,lastName,age,email,phoneNo} = req.body;
        const user = new UserModel({
        firstName,
        lastName,
        age,
        email,
        phoneNo
    })
      await user.save();
      res.send(`user added successfully`)
 


    } catch (error) {
        res.send(`error adding user : ${error}`)
    }
});

userRouter.patch("/update-user/:id",async (req,res)=>{
    const {id} = req.params;
try {
    const updatedUser =await UserModel.findByIdAndUpdate({_id:id},req.body)
    res.status(200).json({"msg":"user updated successfully",updatedUser})

} catch (error) {
    res.send(`error updating user : ${error}`)
}})

userRouter.put("update-user/:id",async (req,res)=>{

    try {
        const {id} = req.params;
        await UserModel.findByIdAndUpdate({_id:id},req.body)
        res.status(200).json({"msg":"user updated successfully",updatedUser})
    } catch (error) {
        res.send(`error updating user : ${error}`)
    }
})

userRouter.delete("/delete-user/:id",async (req,res)=>{
    const {id} = req.params;
try {
    const deleteUser =await UserModel.findByIdAndDelete({_id:id})
    res.status(200).json({"msg":"user deleted successfully",deleteUser})

} catch (error) {
    res.send(`error deleting user : ${error}`)
}})

module.exports = userRouter;