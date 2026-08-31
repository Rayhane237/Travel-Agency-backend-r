const User = require("../models/User");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");



//--------------------------------register
const register = async(req,res)=>{
try{   
   // verify  user payloads from user model
   const {fullName,phoneNumber,email,password} = req.body
   if(!fullName || !email || !phoneNumber || !password){
      return res.status(400).json({
         message:" sorry,invalid credentials" ,})
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
            fullName:fullName,
            phoneNumber:phoneNumber,
            email:email,
            password:hashedPassword,
    })
     await newUser.save();

    const accessToken = signAccessToken(newUser);
    const refreshToken = signRefreshToken(newUser);

    newUser.refreshTokenHash = await bcrypt.hash(refreshToken, 12);
    await newUser.save();

    res.cookie("refreshToken", refreshToken, refreshCookieOptions);

    res.status(201).json({
      message: `Welcome, ${newUser.fullName}!`,
      data: {
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
      },
      accessToken
    })
    }catch(err){
      console.log("Register error is :",err);
      res.status(400).json({message:"something went wrong" ,
         error:process.env.NODE_ENV=== "development"? err.message : undefined,
      })
   }
}
 

//---------------------login after registration-------

const ACCESS_EXPIRES = "15m";
const REFRESH_EXPIRES = "7d";
const REFRESH_COOKIE_MAX_AGE = 7 * 24 * 60 * 60 * 1000;

const signAccessToken = (user) =>
  jwt.sign(
    { userId: user._id, userName: user.fullName  , role: user.role},
    process.env.JWT_ACCESS_SECRET,
    { expiresIn: ACCESS_EXPIRES }
  );

const signRefreshToken = (user) =>
  jwt.sign({ userId: user._id }, process.env.JWT_REFRESH_SECRET, {
    expiresIn: REFRESH_EXPIRES,
  });


const isProd = process.env.NODE_ENV === "production";

const refreshCookieOptions = {
  httpOnly: true,
  secure: isProd,
  sameSite: isProd ? "none" : "lax",
  maxAge: REFRESH_COOKIE_MAX_AGE,
  path: "/refresh-token",
};



const login = async(req,res)=>{
   try{
   //get user infos
   const {email,password} = req.body
   //verify if email exists 
   const user = await User.findOne({email:email}).select("+password")
  
   if(!user){
      return  res.status(400).json({message:" invalid credentials "})
   }

   //verify if password correct 
   const isPasswordValid = await bcrypt.compare(password,user.password)
    if(!isPasswordValid){
       return  res.status(400).json({message:"invalid credentials "})
    }
   
    //tokens
    const accessToken = signAccessToken(user);
    const refreshToken = signRefreshToken(user);

    // store a hash of the refresh token so it can be verified/revoked later, same principle as passwords
    user.refreshTokenHash = await bcrypt.hash(refreshToken, 12);
    await user.save();

    res.cookie("refreshToken", refreshToken, refreshCookieOptions);

    //send data if user logged in successfully
    res.status(200).json({
      message: `Welcome back, ${user.fullName}!`,
      data: {
         _id:user._id ,
         fullName:user.fullName,
         email:user.email,
      },
      accessToken
   })
   
}catch (err) {
       console.error("Login error:", err);
      res.status(500).json({ message: "Something went  wrong dear user" });
   }
}


//------------------------------refresh token ----------------------------

const refreshToken = async (req, res) => {
  const token = req.cookies.refreshToken;
  if (!token) {
    return res.status(401).json({ message: "no refresh token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
    const user = await User.findById(decoded.userId).select("+refreshTokenHash");

    if (!user || !user.refreshTokenHash) {
      res.clearCookie("refreshToken", { path: "/refresh-token" });
      return res.status(401).json({ message: "session invalid" });
    }

    const matches = await bcrypt.compare(token, user.refreshTokenHash);
    if (!matches) {
      // presented token doesn't match the last one we issued

      user.refreshTokenHash = undefined;
      await user.save();
      res.clearCookie("refreshToken", { path: "/refresh-token" });
      return res.status(401).json({ message: "session invalid" });
    }

    // rotation: issue a new pair, invalidate the old refresh token
    const newAccessToken = signAccessToken(user);
    const newRefreshToken = signRefreshToken(user);
    user.refreshTokenHash = await bcrypt.hash(newRefreshToken, 12);
    await user.save();

    res.cookie("refreshToken", newRefreshToken, refreshCookieOptions);
    res.status(200).json({ accessToken: newAccessToken });
  } catch (err) {
    res.clearCookie("refreshToken", { path: "/refresh-token" });
    res.status(401).json({ message: "session expired" });
  }
};
//------------------------------Logout---------------------
const logout = async (req, res) => {
  const token = req.cookies.refreshToken;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
      await User.findByIdAndUpdate(decoded.userId, { $unset: { refreshTokenHash: 1 } });
    } catch {
      // token already invalid/expired — nothing to clean up in DB
    }
  }
  res.clearCookie("refreshToken", { path: "/refresh-token" });
  res.status(200).json({ message: "logged out" });
};

module.exports  = { login ,register  ,refreshToken, logout};