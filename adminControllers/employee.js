const Employee = require('../models/Employee');

//----------------------create an employee-------------------------
const createEmployee = async(req,res) => {
  try{
        const { image ,name , job } = req.body ;
        if(!image || !name || !job) {
            return res.status(400).json({message:"missing employee fields"})
        }
        const newEmployee = new Employee({
            image,
            name,
            job,
        })
        await newEmployee.save();
        res.status(201).json({message:"employee created successfully" , data:newEmployee});

    }catch(err){
        console.error("Error creating employee:", err);
        res.status(500).json({message:"Something went wrong"});
    }
}

//-------------------------get all employees --------------------------
const getAllEmployees = async(req,res) => {
    try{
        const allEmployees = await Employee.find()
        res.status(200).json({message:"all employees retrieved successfully" ,data:allEmployees })
    }catch(err){
         console.error("Error retrieving employees:", err);
         res.status(500).json({message:"Something went wrong"});
    }
}

//---------------------update employee payloads-----------------
const updateEmployee = async(req,res) =>{
    try{
        const updatedEmployee = await Employee.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new:true }
        );
        if(!updatedEmployee){
            return res.status(404).json({message:"Employee not found" })
        }
        res.status(200).json({message:"Employee's  payloads updated successfully"  ,data:updatedEmployee});

    }catch(err) {
        console.log("Error updating employee:" , err);
        res.status(500).json({ message: "Something went wrong "});
    };
}

//------------------------delete employee -----------------------------------------------------------------------------
const deleteEmployee = async(req,res) => {
    try{
        const deletedEmployee = await Employee.findByIdAndDelete(req.params.id)
        if(!deleteEmployee) {
            return res.status(404).json({message:"employee not found"});
        }
        res.status(200).json({message:"employee deleted successfully ;"})
    }catch(err){
        console.log("Error deleting employee:" , err);
        res.status(500).json({ message: "Something went wrong "});
     }
}
        
 module.exports = {  getAllEmployees , createEmployee , updateEmployee  , deleteEmployee};
        
    

