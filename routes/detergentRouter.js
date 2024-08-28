const { Router } = require("express");
const Detergentmodel = require("../models/detergentModel")


const detergentRouter = Router();


detergentRouter.post("/adddetergent", async (req, res) => {
    const { img,title,price } = req.body;

    try {
        let product = new Detergentmodel({ img, title,  price });
        await product.save();
        res.status(200).json({ message: "detergent added successfully" })
    } catch (error) {
        res.status(400).json({ message: "error adding detergent" })
    }

})

detergentRouter.get("/getdetergent", async (req, res) => {

    try {
        let detergents = await Detergentmodel.find();
        res.status(200).json({ detergents: detergents })
    } catch (error) {
        res.status(400).json({ message: "error getting detergent" })
    }

})


module.exports = detergentRouter