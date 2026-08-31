const express = require("express");
const router = express.Router();
const isAdmin = require("../middlewares/isAdmin");
const { getAllHotelBookings , deleteHotelBooking  } = require("../adminControllers/hotel")

router.get("/hotels", isAdmin, getAllHotelBookings);
router.delete("/hotels/:id", isAdmin, deleteHotelBooking);

module.exports = router;