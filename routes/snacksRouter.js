const { Router } = require("express");
const SnacksModel = require("../models/snacksModel")


const snacksRouter = Router();


snacksRouter.post("/addsnacks", async (req, res) => {
    const {img, title, price } = req.body;

    try {
        let product = new SnacksModel({ img,title,price });
        await product.save();
        res.status(200).json({ message: "snacks added successfully" })
    } catch (error) {
        res.status(400).json({ message: "error adding snacks" })
    }

})

snacksRouter.get("/getsnacks", async (req, res) => {

    try {
        let snacks = await SnacksModel.find();
        res.status(200).json({ snacks: snacks })
    } catch (error) {
        res.status(400).json({ message: "error getting snacks" })
    }

})



module.exports = snacksRouter