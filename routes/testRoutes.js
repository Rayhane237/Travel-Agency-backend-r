
const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router(); 
const { test } = require("../controllers/testController");

router.get("/test" ,authMiddleware, test);
module.exports = router;