const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("./models"); // Import database connection
import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "habit_tracker",
  password: "3641",
  port: 5432
})

db.connect();

const app = express();

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
