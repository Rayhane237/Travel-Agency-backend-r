
const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();
const { bookFlight , bookHotel ,getMyFlightBookings ,getMyHotelBookings } = require("../controllers/bookingController");

router.post("/bookFlight" , authMiddleware , bookFlight );
router.post("/bookHotel" , authMiddleware , bookHotel );

router.get("/bookFlight" , authMiddleware , getMyFlightBookings );
router.get("/bookHotel" , authMiddleware , getMyHotelBookings);
module.exports = router;