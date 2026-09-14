const HotelListing = require("../models/HotelListing");

const getPublicHotelListing = async(req,res) => {
    try{
        const allPublicHotels = await HotelListing.find();
        res.status(200).json({message:"All available hotels retrieved successfully" , data:allPublicHotels});
    }catch(err){
         console.error(err);
        return res.status(500).json({ message: "Something went wrong" });
  }
    
}

module.exports = { getPublicHotelListing };