const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    image:{ type:String ,required:true },
    name: { type:String ,required:true },
    job:  { type:String ,required:true },
} , { timestamps:true })

module.exports = mongoose.models.Employee || mongoose.model("Employee" , employeeSchema)