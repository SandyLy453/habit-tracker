import express from 'express';
import Habit from '../models/habit.js';

const router = express.Router();

router.get("/", async (req, res) => {
  const habits = await Habit.findAll();
  res.render("index", { habits });
});

export default router;
