
const HotelListing = require("../../models/HotelListing");


//-------------------------- create hotel listing ------------------------
const createHotelListing = async(req,res) => {
 try{
    const { image ,price ,description ,hotelName} = req.body;
    if( !image || !price || !description || !hotelName){
        return res.status(400).json({message:"Hotel listing not found"});
    }
    const newListing = new HotelListing({
        hotelName,
        image,
        price,
        description
    })
     await newListing.save();
        res.status(201).json({message:"Hotel listing created successfully", data:newListing})
    }catch(err){
        console.error("Error creating Hotel listing:", err);
        res.status(500).json({message:"Something went wrong"});
 }
}

//----------------------------get all hotel listing -----------------------
const getAllHotelListing = async(req,res) => {
    try{
        const listing = await HotelListing.find();
        res.status(200).json({message:"All Hotel listings retrieved successfully" ,data:listing})
    }catch(err){
         console.error("Error retrieving flight listings:", err);
         res.status(500).json({message:"Something went wrong"});
    }
}

//---------------------------------update hotel listing ------------

const updateHotelListing = async(req,res) => {
    try{
        const newListing = await HotelListing.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if(!newListing){
            return res.status(404).json({message:"Hotel Listing not found "})
        }
        res.status(200).json({message:"Hotel listing updated successfully"})

    }catch(err) {
        console.log("Error updating flight listing:" , err);
        res.status(500).json({ message: "Something went wrong "});
    };
}

//----------------------delete hotel listing ------------------------------------
const deleteHotelListing = async(req,res) => {
    try{
        const deletedListing = await HotelListing.findByIdAndDelete( req.params.id );
        if(!deletedListing){
            return res.status(404).json({message:"Hotel listing not found"});
        }
        res.status(200).json({message:"Hotel listing deleted successfully"});
    }catch(err){
        console.log("Error deleting flight listing:" , err);
        res.status(500).json({ message: "Something went wrong "});
    }
}

module.exports = { createHotelListing ,getAllHotelListing ,updateHotelListing ,deleteHotelListing};
