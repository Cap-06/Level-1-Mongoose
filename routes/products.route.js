const express = require("express");
const ProductModel = require("../models/product.model");
const UserModel = require("../models/user.model");

const productRouter = express.Router();

productRouter.get("/get-products", async(req,res)=>{
    try {
        const products = await ProductModel.find();
        res.send(products)
    } catch (error) {
        res.send(`error getting products : ${error}`);
    }
});

productRouter.post("/add-product",async (req,res)=>{

    try {
        const {name ,category,price,rating} = req.body;
        const product = new ProductModel({
            name,
            category,
            price,
            rating
        })
        await product.save();
        res.send("product added Ssuccessfully")
    } catch (error) {
        res.send(`error adding product : ${error}`)
    }
});


productRouter.patch("/update-product/:id",async (req,res)=>{

    const {id} = req.params;
    try{
        const updatedProduct = await ProductModel.findByIdAndUpdate({_id:id},req.body);
        res.status(200).json({"msg":"product updated successfully",updatedProduct})
    }catch (error){
        res.send(`error updating product : ${error}`)
    }
})

productRouter.delete("/delete-product/:id",async (req,res)=>{

    const {id} = req.params;
    try{
        const deleteProduct = await ProductModel.findByIdAndDelete({_id:id});
        res.status(200).json({"msg":"product deleted successfully",deleteProduct})
    }catch (error){
        res.send(`error deleting product : ${error}`)
    }
})


module.exports = productRouter;