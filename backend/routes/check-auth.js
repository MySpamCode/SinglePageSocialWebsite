const jwt=require('jsonwebtoken')
process.env.JWT_KEY='secretkey'

module.exports=(req,res,next)=>{
    try{
        const token=req.headers.authorization.split(" ")[1]
        const decoded=jwt.verify(token,process.env.JWT_KEY)
        req.decoded=decoded
        next() 
    }
    catch(err){
        return res.status(401).json({
            message:'Auth Failed'
        })
    }
    
}