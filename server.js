const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const studentRoutes = require("./routes/studentRoutes");

const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.json({message:"Student Management API is running"});
});

app.use("/api/students", studentRoutes);

async function startServer(){
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully");

        app.listen(3000,()=>{
            console.log("Running......")
        });
        
    }
    catch(error){
        console.error("Startup failed:", error.message);
        process.exit(1);
    }
}

startServer();