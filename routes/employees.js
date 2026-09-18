const express = require("express");
const router = express.Router();

const { getPublicEmployees } = require("../controllers/employees");

router.get("/employees", getPublicEmployees);


module.exports = router;