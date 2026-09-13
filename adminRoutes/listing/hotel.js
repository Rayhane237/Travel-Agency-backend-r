const express = require("express");
const router = express.Router();
const isAdmin = require("../../middlewares/isAdmin");

const{  getAllHotelListing , createHotelListing , updateHotelListing  , deleteHotelListing} = require("../../adminControllers/listing/hotel");


// routes for hotel listing
router.get("/hotelListings", isAdmin, getAllHotelListing);
router.post("/hotelListings", isAdmin, createHotelListing);
router.patch("/hotelListings/:id", isAdmin, updateHotelListing);
router.delete("/hotelListings/:id", isAdmin, deleteHotelListing);

module.exports = router;