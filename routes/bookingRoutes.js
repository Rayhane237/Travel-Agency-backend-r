
const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();
const { bookFlight , bookHotel } = require("../controllers/bookingController");

router.post("/bookFlight" , authMiddleware , bookFlight );
router.post("/bookHotel" , authMiddleware , bookHotel );
module.exports = router;