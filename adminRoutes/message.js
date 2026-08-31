const express = require("express");
const router = express.Router();
const Message = require("../models/Messages")
const isAdmin = require("../middlewares/isAdmin");
const { getAllMessages , deleteMessage  } = require("../adminControllers/message")

router.get("/messages", isAdmin, getAllMessages);
router.delete("/messages/:id", isAdmin, deleteMessage);

module.exports = router;