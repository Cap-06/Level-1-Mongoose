const express = require("express");
const userRouter = require("./routes/users.route")
const productRouter = require("./routes/products.route")
const connection = require("./config/db")

const PORT = 4444;
const app = express();
app.use(express.json());

app.use("/users",userRouter);
app.use("/products",productRouter);

app.listen(PORT, async ()=>{
        try {
        await connection;
        console.log(`server started successfully on port-no : ${PORT}`);

    } catch (error) {
        console.log(`error : ${error}`)
    }
})