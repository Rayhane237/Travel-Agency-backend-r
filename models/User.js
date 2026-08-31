const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true , select:false},
    
    role: {
        type:String,
        enum:["user", "admin"],
        default:"user",
    },
    //must store the refresh token hash
    refreshTokenHash:{
        type:String,
        select :false ,//never returned by default queries
    }
}, {timestamps:true} )

module.exports = mongoose.model("User",userSchema)