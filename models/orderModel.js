const mongoose = require("mongoose");

const Orderschema = new mongoose.Schema({
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    address: { type: String, required: true },
    pincode: { type: Number, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    total: { type: Number, required: true },
    products: { type: Array, required: true },
    date: { type: Date, default: Date.now },

}, { versionKey: false })


const Ordermodel = mongoose.model("order", Orderschema);

module.exports = Ordermodel