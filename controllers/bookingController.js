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
    await newBooking.save();

    res.status(201).json({
      message: "Flight booked successfully",
      data: newBooking
    });
  } catch (err) {
    console.error("BOOKING error:", err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

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

    res.status(201).json({
      message: "Hotel booked successfully",
      data: newBooking
    });
  } catch (err) {
    console.error("BOOKING error:", err);
    res.status(500).json({ message: "Something went wrong" });
  }
};


module.exports = { bookFlight ,bookHotel };