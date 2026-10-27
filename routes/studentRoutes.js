const express = require("express");
const Student = require("../models/Student");

const router = express.Router();

router.post("/",async(req,res)=>{
    try{
        const student = await Student.create(req.body);
        res.status(201).json(student);
    }
    catch(error){
        return res.status(400).json({
        message: error.message
    });

    }
});

router.get("/", async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch students"
        });
    }
});

module.exports = router;