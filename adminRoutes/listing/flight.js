const express = require("express");
const router = express.Router();
const isAdmin = require("../../middlewares/isAdmin");

const{  getAllFlightListing , createFlightListing , updateFlightListing  , deleteFlightListing} = require("../../adminControllers/listing/flight");


// routes for flight listing
router.get("/flightListings", isAdmin, getAllFlightListing);
router.post("/flightListings", isAdmin, createFlightListing);
router.patch("/flightListings/:id", isAdmin, updateFlightListing);
router.delete("/flightListings/:id", isAdmin, deleteFlightListing);

module.exports = router;