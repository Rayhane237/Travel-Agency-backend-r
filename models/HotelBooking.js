const mongoose = require("mongoose");

const bookHotelSchema = new mongoose.Schema({
  price:    { type:Number , required: true},
  checkIn:  { type: Date, required: true },
  checkOut: { type: Date, required: true },
  guestName:{ type: String, required: true },
  listing:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"HotelListing",
    required:true,
  },
  //user is a reference to the User model, allowing us to associate a booking with a specific user
  user :{
     type:mongoose.Schema.Types.ObjectId,
      ref:"User",
      required:true,
  }
}, { timestamps: true, }

 );
module.exports = mongoose.models.HotelBooking || mongoose.model("HotelBooking", bookHotelSchema);