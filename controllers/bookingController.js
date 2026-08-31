const Book = require("../models/flightBooking");
const HotelBooking = require("../models/HotelBooking");

//---------------------validate booking flight----//
const bookFlight = async (req, res) => {
  try {
    const { from, to, date, passenger } = req.body;

    if (!from || !to || !date || !passenger) {
      return res.status(400).json({ message: "Missing booking credentials" });
    }

    const existingBooking = await Book.findOne({ passenger, from, to, date });
    if (existingBooking) {
      return res.status(400).json({ message: "This flight is already booked" });
    }

    const newBooking = new Book({
      from,
      to,
      date,
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

//--------------------------BookHotel----------------
const bookHotel = async (req,res) => {
try{
  const {hotelName ,checkIn , checkOut ,guestName } = req.body;

  if(!hotelName || !checkIn || !checkOut || !guestName ){
           return res.status(400).json({ message: "Missing booking credentials" });
  }

  const existingBooking = await HotelBooking.findOne({ hotelName, checkIn ,checkOut ,guestName})
  if(existingBooking){
          return res.status(400).json({ message: "This hotel is already booked" });
  }

  const newBooking = new HotelBooking({
    hotelName,
    checkIn,
    checkOut,
    guestName,
    user:req.user.userId 
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