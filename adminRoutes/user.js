const express = require("express");
const router = express.Router();
const isAdmin = require("../middlewares/isAdmin");
const { getAllUsers, deleteUser , updateUserRole  } = require("../adminControllers/user")

router.get("/users", isAdmin, getAllUsers);
router.delete("/users/:id", isAdmin, deleteUser);
router.patch("/users/:id/role", isAdmin, updateUserRole);

module.exports = router;