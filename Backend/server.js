const dotanv = require("dotenv").config();
const express = require ("express");
const { bgCyan } = require("colors");
const mongoose = require ('mongoose')
const connectDB = require("./config/connectDB");
const cors = require ("cors");
const bodyParser = require("body-parser");
const userRoute = require("./routes/userRoute");


const app = express()


 // Middleware
 app.use(express.json());
 app.use(express.urlencoded({extended: false}));
 app.use(bodyParser.json())


 // Routes Middleware

 app.use("/api/users",userRoute);

//Routes
app.get("/", (req,res)=>{
    res.send("Corriendo");
});



// Connect to DB and start server
const PORT = process.env.PORT || 5000;
mongoose 
   .connect(process.env.MONGO_URL)
   .then(()=>{
    app.listen(PORT,()=>{
        console.log(`Servidor Corriendo En El Puerto ${PORT}`.bgCyan.black);
    })
   })
   .catch((err)=> console.log(err))