//handle all user-related logic getMe, updateMe,deleteMe....

const User = require("../models/User"); //must import user model cus getMe uses it 


 //get user details
const getMe = async(req,res)=>{
     try{
     const userId = req.user.userId
     
     const user =await User.findOne({_id:userId})
     if(!user){
        return res.status(400).json({message:"user does not exist"})
     }
      res.status(200).json({message:"user fetched successfully",
         data:{
            _id:user._id,
            fullName:user.fullName,
            email:user.email
         }
      }) 
     }catch(err){ 
        res.status(400).json({message:"something went wrong"})
     }
}

     // by default, anything defined inside a file stays private to that file, invisible to everyone else, unless i explicitly say "let other files use this."
     //  module.exports is exactly that: 
         module.exports = { getMe }  ;

