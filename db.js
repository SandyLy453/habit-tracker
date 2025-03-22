import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
	user: process.env.DB_USER,
	host: process.env.DB_HOST,
	database: process.env.DB_NAME,
	password: process.env.DB_PASSWORD,
	port: process.env.DB_PORT, // Default is 5432
});

pool
	.connect()
	.then(() => console.log("Connected to PostgreSQL"))
	.catch((err) => console.error("Database connection error", err));

export default pool;
