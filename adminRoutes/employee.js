const express = require("express");
const router = express.Router();
const isAdmin = require("../middlewares/isAdmin");

const {  getAllEmployees , createEmployee , updateEmployee  , deleteEmployee} = require("../adminControllers/employee")
        

router.get("/employees", isAdmin, getAllEmployees);
router.post("/employees", isAdmin, createEmployee);
router.patch("/employees/:id", isAdmin, updateEmployee);
router.delete("/employees/:id", isAdmin, deleteEmployee);

module.exports = router;