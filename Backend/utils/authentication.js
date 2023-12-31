import catchAsyncErrors from '../ErrorHandler/catchAsyncErrors.js'
import Errorhandler from '../ErrorHandler/ErrorHandler.js'
import jwt from 'jsonwebtoken'
import User from '../model/userModel.js'

export const isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
    const { token } = req.cookies

    if (!token) {
        return next(new Errorhandler("Please login to access resources", 401))
    }

    const decodedData = jwt.verify(token, process.env.JWT_SECRET)
    req.user = await User.findById(decodedData.id)
    next()
})

export const authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(new Errorhandler(`${req.user.role} is not allowed to access this resource`, 403))
        }
        next()
    }
}