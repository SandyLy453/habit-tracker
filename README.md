# Habit Tracker App

- This is a full-stack Habit Tracker application built using Node.js, Express EJS, and MySQL. The app allows users to track their daily habits, mark them as completed, and view their progress over time through a calendar feature.

## Team Members & Tasks Completed

- Katelyn Starchuk – Developed the Habit Tracker page, including the frontend UI and backend logic for adding and deleting habits.
- Sandy – Created the Calendar feature to visualize habit progress, including dynamic rendering using EJS and database integration.
- Samantha – Designed and implemented the Home Page, ensuring responsive UI and navigation to the tracker and calendar.
- Parnell – Worked on the About Page and started implementing the Login System (not yet fully functional).

### How to Run the Application Locally

1. Clone the Repository

- git clone <repo-url>
- cd habit-tracker

2. Install Dependencies

   - npm install

3. Set Up the Database

- Open PostgresSQL (viapgAdmin)
- Create a new database
- In SQL: CREATE DATABASE habit_tracker;

4. Connect to the new database

- psql -U your_username -d habit_tracker

5. Create habits table inside PostgresSQL

- CREATE TABLE habits (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  frequency VARCHAR(50) NOT NULL,
  duration INT NOT NULL
  );
- This table will store habit data with:
- id: Unique habit identifier
- name: Name of the habit
- frequency: How often (Daily, Weekly, Monthly)
- duration: Time spent per session (in minutes)

6. Configure Environment Variables

- touch .env
- DB_USER=postgres
- DB_HOST=localhost
- DB_NAME=habit_tracker
- DB_PASSWORD=your_password (This will be whatever your postgress password is. Everyones is different)
- DB_PORT=5432

7. Run the Server

- node server.js
- The app will be available at: http://localhost:3000
