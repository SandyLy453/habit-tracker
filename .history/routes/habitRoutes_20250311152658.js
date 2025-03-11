import express from 'express';
const router = express.Router();

// Define your routes
router.get('/', (req, res) => {
  res.send('Habit Tracker Routes');
});

export default router; // Default export
