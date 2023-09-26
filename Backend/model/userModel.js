import mongoose from "mongoose";
import validator from 'validator'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
        minlength: [3, "Name should be mminimum 3 characters"],
        manlength: [20, "Name should not exceed 20 characters"],
    },
    email: {
        type: String,
        required: [true, "Please enter your email id"],
        unique: true,
        validate: [validator.isEmail, "Please provide valid email"],

    },
    password: {
        type: String,
        required: [true, "Please enter the password"],
        minlength: [8, "Password should be mminimum 8 characters"],
        select: false
    },
    role: {
        type: String,
        required: [true, "Please provide the role"],
        enum: ["user", "admin"]
    }
})

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next()
    }
    this.password = await bcrypt.hash(this.password, 10)
})

userSchema.methods.getToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRY })
}

userSchema.methods.comparePassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}

export default mongoose.model("User", userSchema)