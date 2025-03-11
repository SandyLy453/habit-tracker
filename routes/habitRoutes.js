const express = require("express");
const Habit = require("../models/habit");

const router = express.Router();

// Home Page - Show habits
router.get("/", async (req, res) => {
  const habits = await Habit.findAll();
  res.render("index", { habits });
});

// Add Habit
router.post("/add", async (req, res) => {
  await Habit.create({ name: req.body.name });
  res.redirect("/habits");
});

// Complete Habit
router.post("/complete/:id", async (req, res) => {
  const habit = await Habit.findByPk(req.params.id);
  if (habit) {
    habit.completedDays += 1;
    await habit.save();
  }
  res.redirect("/habits");
});

// Delete Habit
router.post("/delete/:id", async (req, res) => {
  await Habit.destroy({ where: { id: req.params.id } });
  res.redirect("/habits");
});

module.exports = router;
