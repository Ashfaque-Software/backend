const mongoose = require("mongoose");

const Detergentschema = new mongoose.Schema({
    img: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },

}, { versionKey: false })


const Detergentmodel = mongoose.model("detergent", Detergentschema);

module.exports = Detergentmodel