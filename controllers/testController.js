

//------------------------TEST API WITH AUTHORIZATION =private api --
const test = async (req,res) => {
   try{
      console.log("this is test api",req.user);
      res.status(200).json({message:"hello test api" });
      
    }catch(err){
      res.status(500).json({message:"something went wrong"});
   }

}

module.exports = { test };

   