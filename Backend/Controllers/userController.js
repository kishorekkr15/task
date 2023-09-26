import User from '../model/userModel.js'
import catchAsyncErrors from '../ErrorHandler/catchAsyncErrors.js'
import Errorhandler from '../ErrorHandler/ErrorHandler.js'
import jsonToken from '../utils/jsonToken.js'

export const registerUser = catchAsyncErrors(async (req, res) => {
    const { name, email, password } = req.body

    if(!name || !email ||!password){
        throw new Errorhandler("please enter all input fields",400)
    }

    const emailAlreadyExists = await User.findOne({ email })
    if (emailAlreadyExists) {
        throw new Errorhandler("email already exists", 400)
    }
    const user = await User.create(req.body)
    jsonToken(user, 201, res)
})

export const getUserDetails = catchAsyncErrors(async (req, res, next) => {
    const vid = req.user.id
    const user = await User.findById(vid)
    res.status(200).json({ user })
})

 
export const loginUser = catchAsyncErrors(async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email }).select("+password")
    if (!user || !password) {
        throw new Errorhandler("please enter all input fields", 401)
    }
    const isPasswordMatch =await user.comparePassword(password)
    if (!isPasswordMatch) {
        throw new Errorhandler("Password does not match", 401)
    }
    jsonToken(user, 200, res)

})

export const logoutUser = catchAsyncErrors(async (req, res) => {
    const options = {
        httpOnly: true,
        expires: new Date(Date.now()),
    }
    res.cookie("token", null, options)
    res.status(200).json({ message: "logout success" })
})