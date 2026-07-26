
const jwt = require("jsonwebtoken")

const authMiddleware =(req,res,next)=>{  
try{
    const header = req.headers.authorization;
    
    if (!header) throw new Error("no auth header");
    const token = header.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_ACCESS_SECRET)
    req.user = decodedToken

    next()
      //res.status(200).json({message:"authorized"})
    
}catch(err){
      res.status(401).json({message:"unauthorized"})
 }
}
module.exports = authMiddleware