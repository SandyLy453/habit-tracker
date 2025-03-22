import pg from "pg";
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import path from "path";
import pool from "./db.js"; // Import database connection
import { fileURLToPath } from "url";

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
		console.log("Connected to the database");
	})
	.catch((err) => {
		console.error("Database connection error:", err.stack);
	});

const app = express();
const port = 3000;

app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); // Serve static files from the public folder
app.set("view engine", "ejs");

// Routes
app.get("/tracker", async (req, res) => {
	try {
		const result = await db.query("SELECT * FROM habits"); // Fetch habits from DB
		res.render("pages/tracker", {
			title: "My Habits Tracker",
			activePage: "tracker",
			paragraph: " ",
			habits: result.rows, // Pass the fetched habits to EJS
		});
	} catch (err) {
		console.error("Error fetching habits:", err);
		res.status(500).send("Server Error");
	}
});

// Route to handle form submission
app.post("/add-habit", async (req, res) => {
	const { habitName, frequency, duration } = req.body;
	console.log("Received form data:", { habitName, frequency, duration }); // Log received form data


	const parsedDuration = parseInt(duration, 10);
	console.log("Parsed duration:", parsedDuration); 

	try {
		await db.query(
			"INSERT INTO habits (name, frequency, duration) VALUES ($1, $2, $3)",
			[habitName, frequency, parsedDuration]
		);
		res.redirect("/tracker");
	} catch (err) {
		console.error("Error adding habit:", err);
		res.status(500).send("Server Error");
	}
});

/* delete habit post */
app.post("/delete-habit", async (req, res) => {
	const { id } = req.body;
	try {
		await db.query("DELETE FROM habits WHERE id = $1", [id]);
		res.redirect("/tracker");
	} catch (err) {
		console.error("Error deleting habit:", err);
		res.status(500).send("Server Error");
	}
});
/*calendar */
app.get("/about", (req, res) => {
	res.render("pages/about", {
		title: "About",
		activePage: "about",
	});
});

app.listen(port, () => {
	console.log(`App listening at port ${port}`);
});

app.get("/", (req, res) => {
	res.render("pages/home", {
		title: "Personal Habit Tracker",
		activePage: "home",
		paragraph: "Track your progress today for better habits.",
	});
});

app.get("/calendar", (req, res) => {
	let { month, year } = req.query;

	if (!month || !year) {
		const currentDate = new Date();
		month = currentDate.getMonth() + 1; // Months are 0-based in JS
		year = currentDate.getFullYear();
	} else {
		month = parseInt(month, 10);
		year = parseInt(year, 10);
	}

	res.render("pages/calendar", {
		currentMonth: month,
		currentYear: year,
	});
});
