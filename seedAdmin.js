require("dotenv").config();
const mongoose = require("mongoose")
const User = require("./models/User")

const run = async ()=>{
    await mongoose.connect(process.env.MONGO_URI);

        const email = process.env.SEED_ADMIN_EMAIL;
        if(!email){
            console.log("SET SEED_ADMIN_EMAIL in your .env bf running it")
        
          return;
        }
    const admin = await User.findByIdAndUpdate(
        {email},
        { role:"admin"},
        {new:true}
    );

 console.log(admin ? `Promoted ${admin.email} to admin` : "User not found");
  await mongoose.disconnect();

 run();

};