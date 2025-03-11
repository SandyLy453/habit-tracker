import express from 'express';
import Habit from '../models/habit.js'; // Import Habit model using default export

const router = express.Router();

router.get("/", async (req, res) => {
  const habits = await Habit.findAll();
  res.render("index", { habits });
});

export default router; // Export router as default
