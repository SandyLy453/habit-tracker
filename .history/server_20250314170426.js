import pg from 'pg';
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'; 
import habitRoutes from './routes/habitRoutes.js';

// Database setup
const db = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'habit_tracker',
  password: '3641',
  port: 5432,
});

db.connect();

// Load environment variables
dotenv.config();

// Express app setup
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Routes setup
// app.use('/habits', habitRoutes);

app.get('/', (req, res) => {
  res.render('pages/home', {
      title: "Personal Habit Tracker",
      paragraph: "Track your progress today for better habits."
  })
})

app.get('/calendar', (req, res) => {
  res.render('pages/calendar', {
      title: "My Calendar",
      paragraph: " "
  })
})

app.get('/about', (req, res) => {
  res.render('pages/about', {
      title: "About"
  })
})

app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})
