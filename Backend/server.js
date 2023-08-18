const dotanv = require("dotenv").config();
const express = require ("express");
const { bgCyan } = require("colors");
const mongoose = require ('mongoose')
const connectDB = require("./config/connectDB");
const cors = require ("cors");
const bodyParser = require("body-parser");

const app = express()



const PORT = process.env.PORT || 5000


// Connect to DB and start server

mongoose 
   .connect(process.env.MONGO_URL)
   .then(()=>{
    app.listen(PORT,()=>{
        console.log(`Servidor Corriendo En El Puerto ${PORT}`.bgCyan.black);
    })
   })
   .catch((err)=> console.log(err))