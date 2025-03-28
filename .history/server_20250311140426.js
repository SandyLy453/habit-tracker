const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("./models"); // Import database connection

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

const habitRoutes = require("./routes/habitRoutes");
app.use("/habits", habitRoutes);

app.get("/", (req, res) => {
    res.redirect("/habits"); // Redirect to the habits page
});

const PORT = process.env.PORT || 3000;
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
