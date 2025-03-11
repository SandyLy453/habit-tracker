const express = require("express");
const Habit = require("../models/habit"); // Import the Habit model

const router = express.Router();

// ✅ Route to display all habits
router.get("/", async (req, res) => {
    const habits = await Habit.findAll();
    res.render("index", { habits }); // Make sure index.ejs exists inside views/
});

module.exports = router;
