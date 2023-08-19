const express = require ("express");
const user = require("../models/userModel");
const router = express.Router();


const registerUser = () => {

};


router.post("/register", registerUser);

module.exports = router;