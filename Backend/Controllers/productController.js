import catchAsyncErrors from "../ErrorHandler/catchAsyncErrors.js";
import Product from '../model/productModel.js'

export const createProduct = catchAsyncErrors(async (req, res) => {
    const product = await Product.create(req.body)
    res.status(201).json({ success: true, product })
})
export const getAllProduct = catchAsyncErrors(async (req, res) => {
    const product = await Product.aggregate([
        {$lookup:{
            from:'categories',
            localField:"category",
            foreignField:"_id",
            as:"category"
        }}
    ])
    res.status(200).json({ success: true, product })
})
export const deleteProduct = catchAsyncErrors(async (req, res) => {
    await Product.findByIdAndDelete(req.params.id)
    res.status(201).json({ success: true })
})
export const updateProduct = catchAsyncErrors(async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(201).json({ success: true, product })
})