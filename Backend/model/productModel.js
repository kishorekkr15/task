import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: [true, "Please enter product name"]
    },
    storeName: {
        type: String,
        required: [true, "Please enter store name"]
    },
    image: {
        type: String,
        required: [true, 'please provide image url']
    },
    price: {
        type: Number,
        required: [true, "Please provide the role"],
    },
    category:{
        type:mongoose.Schema.ObjectId,  
        ref:"Category",
        required:true
    }
})

export default mongoose.model("Product", productSchema)