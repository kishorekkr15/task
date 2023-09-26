import catchAsyncErrors from "../ErrorHandler/catchAsyncErrors.js";
import Category from '../model/categoryModel.js'
export const createCategory = catchAsyncErrors(async (req, res) => {
    const category = await Category.create(req.body)
    res.status(201).json({ success: true, category })
})
export const getAllCategory = catchAsyncErrors(async (req, res) => {
    const category = await Category.find()
    res.status(200).json({ success: true, category })
})
export const deleteCategory = catchAsyncErrors(async (req, res) => {
    await Category.findByIdAndDelete(req.params.id)
    res.status(201).json({ success: true })
})
export const updateCategory = catchAsyncErrors(async (req, res) => {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(201).json({ success: true, category })
})