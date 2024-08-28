const { Router } = require("express");
const Ordermodel = require("../models/orderModel")

const orderRouter = Router();

orderRouter.post("/addorder", async (req, res) => {
    const { fname, lname, address, pincode, email, phone, total, products } = req.body;

    try {
        let product = new Ordermodel({fname, lname, address, pincode, email, phone, total, products});
        await product.save();
        res.status(200).json({ message: "order added" })
    } catch (error) {
        res.status(400).json({ message: "error adding order" })
    }

})


module.exports = orderRouter