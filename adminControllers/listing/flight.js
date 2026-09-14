const FlightListing = require('../../models/FlightListing');


//-----------------------------create flight listings ----------------------------
const createFlightListing = async(req,res) => {
    try{
        const { destination, image , price ,description} = req.body;
        if( !destination || !price || !image ||!description){
            return res.status(400).json({message: "missing listing fields"})
        }

        const newListing = new FlightListing({
            destination,
            image,
            price,
            description
        })
        await newListing.save();
        res.status(201).json({message:"Flight listing created successfully", data:newListing})
    }catch(err){
        console.error("Error creating flight listing:", err);
        res.status(500).json({message:"Something went wrong"});
    }
}



//-----------------------------get all flight listings ----------------------------
const getAllFlightListing = async(req,res) => {
    try{
        const listing = await FlightListing.find();
            res.status(200).json({message:"all flight listings retrieved successfully" ,data:listing})
        
    }catch(err){
         console.error("Error retrieving flight listings:", err);
         res.status(500).json({message:"Something went wrong"});
    }
}


//---------------------------update flight listing --------------------------------
const updateFlightListing = async(req , res) => {
    try{
        const updatedListing = await FlightListing.findByIdAndUpdate(
            req.params.id,
            req.body ,
            { new: true }
        );

        if(!updatedListing) {
            return res.status(404).json({message: "Listing not found"})
        }
        res.status(200).json({message:"Flight listing updated successfully"  ,data:updatedListing});

    }catch(err) {
        console.log("Error updating flight listing:" , err);
        res.status(500).json({ message: "Something went wrong "});
    };

};

//-----------------------------delete flight listing----------------------------------

const deleteFlightListing = async(req,res) => {
    try{
        const deletedListing = await FlightListing.findByIdAndDelete(req.params.id );
        if(!deletedListing){
            return res.status(404).json({message:"flight listing not found"})
        }
        res.status(200).json({message:"Flight listing deleted successfully ;"})
    }catch(err){
         console.log("Error deleting flight listing:" , err);
        res.status(500).json({ message: "Something went wrong "});
    }
}


module.exports = {  getAllFlightListing , createFlightListing , updateFlightListing  , deleteFlightListing};
