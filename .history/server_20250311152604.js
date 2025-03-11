import pg from 'pg';
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'; 
import habitRoutes from './routes/habitRoutes.js';
import { Sequelize } from 'sequelize';

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
app.use('/habits', habitRoutes);

app.get('/', (req, res) => {
  res.redirect('/habits'); 
});

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: '3641',
  database: 'habit_tracker',
});

const PORT = process.env.PORT || 3000;
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
