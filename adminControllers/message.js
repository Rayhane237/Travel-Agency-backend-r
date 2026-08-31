const Message = require("../models/Messages");

const getAllMessages = async (req , res) =>{
  try{
    const messages = await Message.find();
    res.status(200).json({messages:"All messages retrieved successfully" , data:messages})

  }catch(err){
    console.error("Error retrieving messages:", err);
    res.status(500).json({message:"Something went wrong"});
  }
};

const deleteMessage = async (req,res) =>{
  try{
    const messageId = await Message.findByIdAndDelete(req.params.id);
      if(!messageId){
        return res.status(404).json({message:"Message not found"})
      }
    res.status(200).json({message:"Message deleted successfully"})

  }catch(err){
    console.error("Error deleting message:", err);
    res.status(500).json({message:"Something went wrong"});
  }
    
  
};

module.exports = { getAllMessages , deleteMessage};