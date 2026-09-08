const BookHotel = require("../models/HotelBooking");
const BookFlight = require("../models/FlightBooking");
const User       = require("../models/User");
const Messages   = require("../models/Messages");

const statCards = async (req, res) => {
    const totalUsers = User.countDocuments({});
    const totalMessages = Messages.countDocuments({});
    const totalHotelBookings = BookHotel.countDocuments({});
    const totalFlightBookings = BookFlight.countDocuments({});

    Promise.all([totalUsers, totalMessages, totalHotelBookings, totalFlightBookings])
        .then(([usersCount, messagesCount, hotelBookingsCount, flightBookingsCount]) => {
            res.status(200).json({
                totalUsers: usersCount,
                totalMessages: messagesCount,
                totalHotelBookings: hotelBookingsCount,
                totalFlightBookings: flightBookingsCount
            });
        })
        .catch(err => {
            console.error("Error fetching counts:", err);
            res.status(500).json({ message: "Internal server error" });
        });
};

module.exports = { statCards };