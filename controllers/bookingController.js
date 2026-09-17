const FlightBooking = require("../models/FlightBooking");
const Book = require("../models/FlightBooking");
const FlightListing = require("../models/FlightListing");
const HotelBooking = require("../models/HotelBooking");
const HotelListing = require("../models/HotelListing");

//---------------------validate booking flight----//
const bookFlight = async (req, res) => {
  try {
    const { date, passenger ,listing } = req.body;
     if (!date || !passenger || !listing) {
      return res.status(400).json({ message: "Missing booking credentials" });
     }
    const foundListing = await FlightListing.findById(listing)
       if(!foundListing){
            return res.status(404).json({messages:"flight listing does not exist"})
     }
    const newBooking = new Book({
      date,
      listing,
      price: foundListing.price ,
      passenger,
      user: req.user.userId // Associate the booking with the authenticated user
    });
    await newBooking.save(); //save the booking to the db first
    await newBooking.populate("listing" ,"-description")//once it's saved in db i call mongoose to fetch it

    res.status(201).json({
      message: "Flight booked successfully",
      data: newBooking
    });
  } catch (err) {
    console.error("BOOKING error:", err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

//-------------------------------------get my flight bookings----------------------------
const getMyFlightBookings = async(req,res) => {
  try{
    const myBookings = await FlightBooking.find({ user:req.user.userId }).populate("listing" ,"-description");
    res.status(200).json({message:"all my flight bookings retrieved" , data:myBookings })
   
  } catch (err) {
    console.error("error in my bookings:", err);
    res.status(500).json({ message: "Something went wrong" });
  }
}



//--------------------------BookHotel----------------------------------------------------------------------------
const bookHotel = async (req,res) => {
try{
  const {checkIn , checkOut ,guestName ,listing } = req.body;

  if( !listing || !checkIn || !checkOut || !guestName ){
           return res.status(400).json({ message: "Missing booking credentials" });
  }

  const foundListing = await HotelListing.findById( listing);
  if( !foundListing ){
          return res.status(404).json({ message: "This hotel list does not exist" });
  }

  const newBooking = new HotelBooking({
    checkIn,
    checkOut,
    guestName,
    listing,
    user:req.user.userId ,
    price: foundListing.price,
  })
  await newBooking.save();
  await newBooking.populate("listing" ,"-description")

    res.status(201).json({
      message: "Hotel booked successfully",
      data: newBooking
    });
  } catch (err) {
    console.error("BOOKING error:", err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

//---------------------------------get my hotel bookings------------------
const getMyHotelBookings = async(req,res) => {
  try{
    const myBookings = await HotelBooking.find({user:req.user.userId}).populate("listing" ,"-description");
    res.status(200).json({message:"My hotel bookings retrieved successfully" , data:myBookings });
  } catch (err) {
    console.error("BOOKING error:", err);
    res.status(500).json({ message: "Something went wrong" });
  }
}


module.exports = { bookFlight ,bookHotel  , getMyFlightBookings , getMyHotelBookings};