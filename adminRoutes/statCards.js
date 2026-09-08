const express = require("express");
const router = express.Router();
const isAdmin = require("../middlewares/isAdmin");
const { statCards } = require("../adminControllers/statCards")


router.get("/statCards", isAdmin, statCards);
module.exports = router;