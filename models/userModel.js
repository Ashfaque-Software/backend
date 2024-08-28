const mongoose = require("mongoose");

const Userschema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    cpassword: { type: String, required: true },
},{versionKey:false})


const Usermodel = mongoose.model("user",Userschema);

module.exports = Usermodel