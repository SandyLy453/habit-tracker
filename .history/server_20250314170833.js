import pg from 'pg';
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

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


// Express app setup
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

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
