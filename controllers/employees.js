const Employee = require("../models/Employee");

const getPublicEmployees = async(req,res) => {
    try{
        const allPublicEmployees = await Employee.find();
        res.status(200).json({message:"All public employees retrieved successfully" , data:allPublicEmployees});
    }catch(err){
         console.error(err);
        return res.status(500).json({ message: "Something went wrong" });
  }
    
}

module.exports = { getPublicEmployees };