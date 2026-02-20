# Intro to Mongoose Lab

## Overview
This project builds a simple Terminal CRM application using Node.js and MongoDB.  
We are learning how to connect an application to a database and perform CRUD operations (Create, Read, Update, Delete).

---

## Step 1 – Project Setup

### What we did
- Created GitHub repository
- Cloned project locally
- Created `app.js`
- Initialized Node project with `npm init -y`

### Why we did it
Every backend application needs a proper structure before writing logic.

### Engineering Principle
Project scaffolding before implementation.

---

## Step 2 – Install Dependencies

### What we did
- Installed `prompt-sync`
- Installed `mongoose`
- Installed `dotenv`
- Created `.gitignore`
- Created `.env`
- Tested terminal input using `prompt-sync`

### Why we did it
Applications need:
- Tools to interact with users (prompt-sync)
- Tools to connect to databases (mongoose)
- A safe place to store secrets (.env)

### Engineering Principle
Dependency management and environment isolation.

---

## Step 3 – Connect to MongoDB (Atlas)

### What we did
- Added `MONGODB_URI` to `.env`
- Used `dotenv` to load the URI safely
- Connected to MongoDB with `mongoose.connect()`
- Closed the connection with `mongoose.connection.close()`

### Why we did it
So our app can store real data in a real database instead of losing it when the app stops.

### Engineering Principle
Secure configuration + clean resource lifecycle (connect → use → close).