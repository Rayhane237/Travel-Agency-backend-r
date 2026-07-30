const express = require("express");

const router = express.Router();
const { contactMe } = require("../controllers/contactController")

router.post("/contact" , contactMe  );

module.exports = router;