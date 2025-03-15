import pg from 'pg';
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'; 
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

app.get('/tracker', (req, res) => {
  res.render('pages/tracker', {
    title: "My Habits Tracker",
    activePage: 'tracker',
    paragraph: " "
  });
});

app.get('/calendar', (req, res) => {
  res.render('pages/calendar', {
    title: "My Calendar",
    activePage: 'calendar',
    paragraph: " "
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
