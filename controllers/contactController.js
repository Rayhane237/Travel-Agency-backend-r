
const Message = require('../models/Messages');

const contactMe = async (req,res) =>{
  try {
    const {name , email , message } = req.body ;
  if(!name || !email || !message){
    return res.status(400).json({message:"PLEASE fill in all feilds"})
  }

  const newMessage = await Message.create({ name ,email ,message }) 
  return res.status(201).json({
      message:"Thank you for your message",
      data: newMessage,

  });
   } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Something went wrong" });
  }
}
module.exports = { contactMe }