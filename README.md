# Habit Tracker Database Setup

## Creating the `habits` Table
- CREATE TABLE habits (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    frequency VARCHAR(50) NOT NULL CHECK (frequency IN ('Daily', 'Weekly', 'Monthly')),
    duration INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

