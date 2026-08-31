const User = require("../models/User");

//-----------------------------get all users ----------------------------
const getAllUsers = async (req,res )=>{
  try{
    const users = await User.find().select("-password");
    res.status(200).json({message:"All users retrieved successfully" ,data:users})
  }catch(err){
    console.error("Error retrieving users:", err);
    res.status(500).json({message:"Something went wrong"});
  }
};


//-----------------------------delete user ----------------------------
const deleteUser = async (req,res) =>{
  try{
    const userId = await User.findByIdAndDelete(req.params.id);
    if(!userId){
        return res.status(404).json({message:"User not found"})
    }
    res.status(200).json({message:"User deleted successfully"})
  }catch(err){
    console.error("Error deleting user:", err);
    res.status(500).json({message:"Something went wrong"});
  }
};


//-----------------------------update user role ----------------------------
const updateUserRole = async (req,res)=> {
  try{
     const {role}= req.body;

     if(!["user" , "admin"].includes(role)) {
        return res.status(400).json({message:"Invalid role value"});  
     }

     const user = await User.findByIdAndUpdate(
        req.params.id ,
        {role},  
        {new:true} // return the updated user
    ).select("-password") // the - prefix means "exclude this field"

    if (!user) {
        return res.status(404).json({message:"User not found"});
    }
    res.status(200).json({message:"User role updated successfully", data:user});
  }catch(err){
    console.error("Error updating user role:", err);
    res.status(500).json({message:"Something went wrong"});
  }
};

module.exports = { getAllUsers , deleteUser , updateUserRole }
