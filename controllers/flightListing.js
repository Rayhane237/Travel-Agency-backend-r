const FlightListing = require("../models/FlightListing");

const getPublicFlightListing = async(req,res) => {
    try{
        const allPublicFlights = await FlightListing.find();
        res.status(200).json({message:"All public flights retrieved successfully" , data:allPublicFlights});
    }catch(err){
         console.error(err);
        return res.status(500).json({ message: "Something went wrong" });
  }
    
}

module.exports = { getPublicFlightListing };