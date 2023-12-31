const jsonToken=(user,statusCode,res)=>{
    const token=user.getToken()
    const options={
        httpOnly:true,
        expiresIn:new Date(Date.now+process.env.COOKIE_EXPIRE*24*60*60*1000)
    }

    res.status(statusCode).cookie("token",token,options).json({success:true,user,token})
    }

    export default jsonToken