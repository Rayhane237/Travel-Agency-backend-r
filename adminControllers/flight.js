const BookFlight = require('../models/flightBooking');

//-----------------------------get all flight bookings ----------------------------
const getAllFlightBookings = async(req , res) => {
    try{
        const bookings = await BookFlight.find().populate("user" , "fullName email");
        res.status(200).json({message:"All flight bookings retrieved successfully", data:bookings})

    }catch(err){
        console.error("Error retrieving flight bookings:", err);
        res.status(500).json({message:"Something went wrong"});
    }
};


//-----------------------------delete flight booking ----------------------------
const deleteFlightBooking = async(req,res) =>{
    try{
        const bookingId = await BookFlight.findByIdAndDelete(req.params.id);
        if(!bookingId){
           return res.status(404).json({message:"Flight not found"})
       }
       res.status(200).json({message:"Flight deleted successfully"})

    }catch(err){
        console.error("Error deleting flight booking:", err);
        res.status(500).json({message:"Something went wrong"});
    }
};

module.exports = { getAllFlightBookings , deleteFlightBooking }