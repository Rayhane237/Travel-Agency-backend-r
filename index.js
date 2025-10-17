require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const User = require("./models/User")
const Book = require("./models/Book")
const cors = require("cors")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
const authMiddleware = require("./middlewares/authMiddleware.js")




const app = express()
//use() ia a middleware to accept body 
app.use(express.json())
app.use(cors({
  origin: 'http://localhost:5173', // allow my frontend origin
}));

 let users = []
 //get list users
    app.get("/users",async (req,res)=>{
        const users = await User.find()
    res.status(200).json({message:"todos list",data:users})
 })

 //create user 
     app.post("/users",async(req,res)=>{ 
       const newUser =  new User({
            name:req.body.name,
            number:req.body.number,
            email:req.body.email,
            password:req.body.password,

        })
          await  newUser.save()
    res.status(200).json({message:"todo created",data:newUser }

    )}  )
      


  //get user details
  app.get("/users/:id", async(req,res)=>{
     try{
     const userId = req.params.id
     
     const user =await Todo.findOne({_id:userId})
     if(!user){
        return res.status(400).json({message:"user does not exist"})
     }
      res.status(200).json({message:"user fetched successfully",data:user}) 
     }catch(err){ 
        res.status(400).json({message:"something went wrong"})
     }
     }) 
    
    

    //delete user from db
    app.delete("/users/:id",async(req,res)=>{
    try{ 
     const userId = req.params.id
     
     const users = await User.deleteOne({_id:userId})
     
     const user = await User.find()
    res.status(200).json({message:"todo has been deleted successfully ",data:users}) 
    }catch(err){
      res.status(400).json({message:"something went wrong"})  
    }
     })
    
//update user 
    app.patch("/user/:id",async(req,res)=>{
    try{ 
     const userId = req.params.id
     
     const user = await Todo.findOne({_id:userId})
     
      if(!user){
        return res.status(400).json({message:"user does not exist"})
     }
     const userUpdated = await User.findByIdAndUpdate({_id:userId},{
        name:req.body.name,
        
     })
    res.status(200).json({message:"user has been updated successfully ",data:userUpdated}) 
    }catch(err){
      res.status(400).json({message:"something went wrong"})  
    }
     })

//register
app.post("/register",async(req,res)=>{
try{   
   // verify  user payloads from user model
   const {name,number,email,password} = req.body
   if(!name || !email || !number || !password){
      return res.status(500).json({message:" sorry,invalid credentials"})
   }

   //verify if user exits by email
   const isUserExists = await User.findOne({
      email:req.body.email
   })
   if(isUserExists){
      return res.status(400).json({message:"sorry this email already exists "})
   }
   //if it does not exists i create a user account 
   const hashedPassword = await bcrypt.hash(password,12)
    const newUser = new User({
            name:name,
            number:number,
            email:email,
            password:hashedPassword,
    })
    newUser.save(
    res.status(201).json({message:"you have created an account"})
    )
   }catch(err){
      console.log("Register error is :",err);
      res.status(500).json({message:"something went wrong"})
   }
})

//---------------------login after registration-------
app.post("/login",async(req,res)=>{
   try{
   //get user infos
   const {email,password} = req.body
   //verify if email exists 
   const user = await User.findOne({email:email})
   if(!user){
      return  res.status(400).json({message:" invalid credentials "})
   }
   //verify if password correct 
   const isPasswordValid = await bcrypt.compare(password,user.password)
    if(!isPasswordValid){
       return  res.status(400).json({message:"invalid credentials "})
    }
    //never send password in user data
    user.password = undefined
    //token 
    const token = jwt.sign({ userId:user._id,  userName: user.name}, process.env.JWT_SECRET,{expiresIn:"10m"}
     )
     console.log("Generated Token:", token);
    //send data if user logged in successfully
      res.status(200).json({
      message: `Welcome back, ${user.name}!`,
      data: user,
      token: token
     });
   } catch (err) {
       console.error("Login error:", err);
      res.status(500).json({ message: "Something went  wrong dear user" });
   }
})


//------------------------TEST API WITH AUTHORIZATION =private api --
app.get("/test", authMiddleware,(req,res)=>{
   try{
      console.log("this is test api",req.user);
      res.status(200).json({message:"hello test api" })
      
    }catch(err){
      res.status(500).json({message:"something went wrong"})
   }

})

   
//---------------------validate booking flight----//
app.post("/book", async (req, res) => {
  try {
    const { from, to, date, passenger } = req.body;

    if (!from || !to || !date || !passenger) {
      return res.status(400).json({ message: "Missing booking credentials" });
    }

    const existingBooking = await Book.findOne({ passenger });
    if (existingBooking) {
      return res.status(400).json({ message: "This flight is already booked" });
    }

    const newBooking = new Book({ from, to, date, passenger });
    await newBooking.save();

    res.status(201).json({
      message: "Flight booked successfully",
      data: newBooking
    });
  } catch (err) {
    console.error("BOOKING error:", err);
    res.status(500).json({ message: "Something went wrong" });
  }
});




mongoose.connect(process.env.DataBase_Host,{
    serverSelectionTimeoutMS:5000 
})

.then(()=>{console.log("connected with DB");

  app.listen(process.env.Server_Port,()=>{console.log("Express server started");
   });
})
 
 .catch((err)=>{
    console.log(err.message)
})