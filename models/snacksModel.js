const mongoose = require("mongoose");

const Snacksschema = new mongoose.Schema({
    img: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },

}, { versionKey: false })


const SnacksModel = mongoose.model("snack", Snacksschema);

module.exports = SnacksModel