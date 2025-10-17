
const jwt = require("jsonwebtoken")

const authMiddleware =(req,res,next)=>{  
try{
    
     let token = req.headers.authorization;
         token = token.split(" ")[1] ;
     const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
     req.user =decodedToken; 
    //    //res.status(200).json({message:"authorized"})
   next()
}catch(err){
      res.status(401).json({message:"unauthorized"})
 }
}
module.exports = authMiddleware