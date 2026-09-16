const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  price:     { type: Number ,required: true },
  date:      { type: Date,   required: true },
  passenger: { type: String, required: true },
  //user is a reference to the User model, allowing  to associate a booking with a specific user
  user :{
     type:mongoose.Schema.Types.ObjectId,
      ref:"User",
      required:true,
  },
  //listing refers to FlightListing model,allowing to associate a booking with a specific flight list
  listing:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"FlightListing",
    required:true,
  }
}, { timestamps: true, }

 );

module.exports = mongoose.models.FlightBooking || mongoose.model("FlightBooking", bookSchema);