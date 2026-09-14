const express = require("express");
const router = express.Router();

const { getPublicFlightListing } = require("../controllers/flightListing");

router.get("/flightListings", getPublicFlightListing);


module.exports = router;