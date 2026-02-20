require("dotenv").config();
const mongoose = require("mongoose");
const prompt = require("prompt-sync")();
const Customer = require("./models/customer");

// Connect to MongoDB
async function connectToDB() {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Connected to MongoDB");
}

// Show menu options
function printMenu() {
    console.log("\n=== Terminal CRM ===");
    console.log("1. Create a customer");
    console.log("2. View all customers");
    console.log("3. Update a customer");
    console.log("4. Delete a customer");
    console.log("5. Quit");
}

// Main app loop
async function runCRM() {
    await connectToDB();

    console.log("\nWelcome to the CRM");

    let running = true;

    while (running) {
        printMenu();
        const choice = prompt("Number of action to run: ");

        if (choice === "1") {
            console.log("Create customer (coming next)");
        } else if (choice === "2") {
            console.log("View customers (coming next)");
        } else if (choice === "3") {
            console.log("Update customer (coming next)");
        } else if (choice === "4") {
            console.log("Delete customer (coming next)");
        } else if (choice === "5") {
            console.log("Exiting...");
            running = false;
        } else {
            console.log("Please choose a number from 1 to 5.");
        }
    }

    await mongoose.connection.close();
    console.log("✅ Connection closed. Done.");
}

runCRM();