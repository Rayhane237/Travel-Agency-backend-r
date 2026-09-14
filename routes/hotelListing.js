const express = require("express");
const router = express.Router();

const { getPublicHotelListing } = require("../controllers/hotelListings");

router.get("/hotelListings", getPublicHotelListing);


module.exports = router;