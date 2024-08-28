const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();
const connection = require("./config/connection")
const userRouter = require("./routes/userRouter")
const detergentRouter = require("./routes/detergentRouter")
const snacksRouter = require("./routes/snacksRouter")
const orderRouter = require("./routes/orderRouter")



app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/detergent", detergentRouter);
app.use("/snacks", snacksRouter);
app.use("/order", orderRouter);



app.get("/", (req, res) => {
    res.send("hello world");
})


app.listen(process.env.PORT, async () => {
    try {
        await connection;
        console.log(`server is running on ${process.env.PORT} and db connected`);

    } catch (error) {
        console.log(error);

    }
})