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

---

## Step 4 – Create Customer Model

### What we did
- Created `models/customer.js`
- Defined a Customer schema with `name` and `age`
- Exported the Customer model for use in `app.js`

### Why we did it
This gives MongoDB a clear “shape” for customer data so we can reliably create, read, update, and delete customers.

### Engineering Principle
Data modeling + separation of concerns (models live in their own folder).

---

## Step 5 – Build the Terminal CRM Menu Loop

### What we did
- Created a menu with 5 options (Create, View, Update, Delete, Quit)
- Used a `while` loop so the menu repeats until the user quits
- Kept database connection open during the session
- Closed the database connection on exit

### Why we did it
This is the “user interface” of the terminal app. It lets a user drive CRUD actions step-by-step.

### Engineering Principle
Control flow loop + clean resource management (keep connection open, then close once).

---

## Step 6 – Implement Create (CRUD)

### What we did
- Prompted user for name and age
- Used `Customer.create()` to insert into MongoDB
- Converted age to Number before saving

### Why we did it
This allows real data to be stored permanently in the database.

### Engineering Principle
Data validation + proper type handling before persistence.

---

## Step 7 – Verify Data in MongoDB Compass

### What we did
- Opened MongoDB Compass
- Connected to our Atlas cluster
- Confirmed database name is `crm`
- Opened `customers` collection
- Saw the saved customer document

### Why we did it
This proves our app is truly saving data in the correct database.

### Engineering Principle
Independent verification.
Always confirm database writes using an external tool.

---

## Step 8 – Implement Update (CRUD)

### What we did
- Asked the user for a customer ID
- Asked for a new name and/or new age
- Used `findByIdAndUpdate()` to update the record

### Why we did it
So the CRM can edit existing customers instead of only creating new ones.

### Engineering Principle
Update operations + safe partial updates.
Only change fields the user actually entered.