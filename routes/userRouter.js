const { Router } = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Usermodel = require("../models/userModel");


const userRouter = Router();


userRouter.post("/signup", async (req, res) => {
    const {email, password,cpassword } = req.body;
    let user = await Usermodel.findOne({ email });

    if (user) {
        return res.status(400).json({ message: "user is already exist" })
    }

    try {

        bcrypt.hash(password, 5, async (err, hash) => {
            if (err) {
                res.status(400).json({ message: "error hashing password" })
            }
            else {
                let token = jwt.sign({ email: email }, process.env.SECRET_KEY);
                let user = new Usermodel({
                    email,
                    password: hash,
                    cpassword:hash
                })
                await user.save();
                res.status(200).json({ message: "user registered successfully", token })
            }

        });
    } catch (error) {
        res.status(400).json({ message: "error while registering" })
    }

})


userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    let user = await Usermodel.findOne({ email })

    try {
        if (user) {
            bcrypt.compare(password, user.password, function (err, result) {
                if (result) {
                    let token = jwt.sign({ email: user.email }, process.env.SECRET_KEY);
                    res.status(200).json({ message: "login successfully", token })
                }
                else {
                    res.status(400).json({ message: "Invalid password" })
                }

            });
        }
        else {
            res.status(400).json({ message: "User not found" })
        }

    } catch (error) {
        res.status(400).json({ message: "error while login" })
    }

})

module.exports = userRouter