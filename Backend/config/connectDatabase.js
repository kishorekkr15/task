import mongoose from 'mongoose'

const connectDatabase=()=>{
    mongoose.connect(process.env.URI).then(()=>{
        console.log("mongodb is connected with server")
    }).catch((err)=>{
        console.log(err)
    })
}

export default connectDatabase