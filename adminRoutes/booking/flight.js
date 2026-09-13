const express = require("express");
const router = express.Router();
const isAdmin = require("../../middlewares/isAdmin");
const { getAllFlightBookings , deleteFlightBooking } = require("../../adminControllers/booking/flight")


//router.METHOD(path, isAdmin, controllerFunction). for bookings
router.get("/flights", isAdmin, getAllFlightBookings);
router.delete("/flights/:id", isAdmin, deleteFlightBooking);


module.exports = router;