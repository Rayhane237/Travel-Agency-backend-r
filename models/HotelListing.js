const mongoose = require("mongoose");

const hotelListingSchema = new mongoose.Schema({
    hotelName:   { type:String, required:true},
    price:       { type:Number, required:true},
    image:       { type:String, required:true},
    description: { type:String, required:true},
    isActive:    { type:Boolean, default:true},
} , {timestamps: true }) 

module.exports = mongoose.models.HotelListing || mongoose.model("HotelListing" , hotelListingSchema);