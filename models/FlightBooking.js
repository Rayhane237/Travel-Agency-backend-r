const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  from:      { type: String, required: true },
  to:        { type: String, required: true },
  date:      { type: Date,   required: true },
  passenger: { type: String, required: true },
  //user is a reference to the User model, allowing us to associate a booking with a specific user
  user :{
     type:mongoose.Schema.Types.ObjectId,
      ref:"User",
      required:true,
  }
}, { timestamps: true, }

 );

module.exports = mongoose.models.FlightBooking || mongoose.model("FlightBooking", bookSchema);