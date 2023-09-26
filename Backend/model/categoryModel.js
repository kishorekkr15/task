import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: [true, "Please enter category"],
        unique:true
    },
    image: {
        type: String,
        required: [true, 'please provide image url']
    },
    status: {
        type: String,
        required: [true, "Please provide the role"],
        enum: ["active", "inActive"]
    }
})

export default mongoose.model("Category", categorySchema)