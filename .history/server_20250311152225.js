import pg from "pg";
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'; // Import database connection

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "habit_tracker",
  password: "3641",
  port: 5432
})

db.connect();

dotenv.config();

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

const habitRoutes = require("./routes/habitRoutes");
app.use("/habits", habitRoutes);

app.get("/", (req, res) => {
    res.redirect("/habits"); 
});

const PORT = process.env.PORT || 3000;
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
