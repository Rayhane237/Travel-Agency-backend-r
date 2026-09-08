const BookHotel = require("../models/HotelBooking");

const getAllHotelBookings = async(req,res) =>{
  try{

   const bookings = await BookHotel.find().populate("user" ,"fullName email");
    res.status(200).json({message:"All hotel bookings retrieved successfully", data:bookings})
  
  }catch(err){
    console.error("Error retrieving hotel bookings:", err);
    res.status(500).json({message:"Something went wrong"});
  }
};

const deleteHotelBooking = async(req,res) =>{
  try{
    const bookingId = await BookHotel.findByIdAndDelete(req.params.id);
    if(!bookingId){
        return res.status(404).json({message:"Hotel booking not found"})
    }
    res.status(200).json({message:"Hotel booking deleted successfully"});

  }catch(err){
    console.error("Error deleting hotel booking:", err);
    res.status(500).json({message:"Something went wrong"});
  }
};

module.exports = { getAllHotelBookings , deleteHotelBooking }