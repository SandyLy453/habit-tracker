const express = require("express");
const Habit = require("../models/habit"); 

const router = express.Router();

router.get("/", async (req, res) => {
    const habits = await Habit.findAll();
    res.render("index", { habits }); 
});

module.exports = router;
