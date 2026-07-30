require("dotenv").config()
const express  = require("express")
const mongoose = require("mongoose")
const cors     = require("cors")
const cookieParser = require("cookie-parser");

const app = express()

app.use(cookieParser());
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
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