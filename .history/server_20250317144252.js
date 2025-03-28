import pg from 'pg';
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'; 
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pool = require('./db'); // Import database connection

dotenv.config();

// Database setup
const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

db.connect()
  .then(() => {
    console.log('Connected to the database');
  })
  .catch(err => {
    console.error('Database connection error:', err.stack);
});

const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));  // Serve static files from the public folder
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
  res.render('pages/home', {
    title: "Personal Habit Tracker",
    activePage: 'home',
    paragraph: "Track your progress today for better habits."
  });
});

app.get('/tracker', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM habits'); // Fetch all habits from DB
        res.render('pages/tracker', { habits: result.rows }); // Pass habits to EJS
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});


  // If month/year not provided, use today's date
  if (!month || !year) {
    const currentDate = new Date();
    month = currentDate.getMonth();
    year = currentDate.getFullYear();
  } else {
    // Convert to numbers
    month = parseInt(month, 10);
    year = parseInt(year, 10);
  }
  res.render('pages/calendar', {
    currentMonth: month,
    currentYear: year,
  });
});


app.get('/about', (req, res) => {
  res.render('pages/about', {
    title: "About",
    activePage: 'about',
  });
});

app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});
