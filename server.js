require("dotenv").config()
const express  = require("express")
const mongoose = require("mongoose")
const cors     = require("cors")
const helmet   = require("helmet");
const morgan    = require("morgan");
const cookieParser = require("cookie-parser");

const app = express()
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}));
app.use(morgan());
app.use(cookieParser());

//---------------------cors---------------------
const allowedOrigins = [ process.env.CLIENT_URL, process.env.ADMIN_CLIENT_URL];

app.use(cors({
  origin: allowedOrigins,
  credentials :true,
}));

app.use(express.json())

const authRoutes = require("./routes/authRoutes.js") 
app.use("/" , authRoutes);

const userRoutes = require("./routes/userRoutes.js")
app.use("/" ,userRoutes );

const testRoutes = require("./routes/testRoutes.js")
app.use("/", testRoutes);

const bookingRoutes = require("./routes/bookingRoutes.js")
app.use("/" ,bookingRoutes);

const contactRoutes = require("./routes/contactRoutes.js")
app.use("/" ,contactRoutes)
//----------------------------get available public hotels/flights ---
const flightPublicListingRoutes = require("./routes/flightListing.js")
app.use("/" , flightPublicListingRoutes)

const hotelPublicListingRoutes = require("./routes/hotelListing.js")
app.use("/" , hotelPublicListingRoutes)

//---------------------admin routes ---------------------
const adminUserRoutes = require("./adminRoutes/user.js")
app.use("/api/admin" ,adminUserRoutes);

const adminFlightBookingRoutes = require("./adminRoutes/booking/flight.js")
app.use("/api/admin" ,adminFlightBookingRoutes);

const adminHotelRoutes = require("./adminRoutes/booking/hotel.js")
app.use("/api/admin" ,adminHotelRoutes);

const adminMessageRoutes = require("./adminRoutes/message.js")
app.use("/api/admin" ,adminMessageRoutes);

const adminStatCardsRoutes = require("./adminRoutes/statCards.js")
app.use("/api/admin" , adminStatCardsRoutes);

const adminFlightListingRoutes = require("./adminRoutes/listing/flight.js")
app.use("/api/admin" , adminFlightListingRoutes);

const adminHotelListingRoutes = require("./adminRoutes/listing/hotel.js")
app.use("/api/admin" , adminHotelListingRoutes);




app.get("/api/admin/test123", (req, res) => {
  res.json({ ok: true });
});
//---------------------connect to db ----

mongoose.connect(process.env.MONGO_URI)
 .then(()=> {
   console.log("connected to data base");

   const PORT = process.env.PORT || process.env.Server_Port;
   app.listen(PORT, ()=> {
      console.log(`server is running on port ${PORT}`);
   })
  })
  .catch((err)=>{ console.log(err.message);

})