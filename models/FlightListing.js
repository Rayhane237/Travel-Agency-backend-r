//a real model turns a flight into a db record 
//changeable instantly from the admin dashboard

const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  destination:{ type:String, required:true},
  price:      { type:Number, required:true},
  image:      { type:String, required:true},
  description:{ type:String, required:true},
  isActive:   { type:Boolean, default:true},
} , { timestamps: true, })

module.exports = mongoose.models.FlightListing || mongoose.model("FlightListing", listingSchema);
