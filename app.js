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
            const name = prompt("Enter customer name: ");
            const age = prompt("Enter customer age: ");

            await Customer.create({
                name: name,
                age: Number(age),
            });

            console.log("Customer created successfully.");
        } else if (choice === "2") {
            const customers = await Customer.find({});

            if (customers.length === 0) {
                console.log("No customers found.");
            } else {
                console.log("\nCustomer List:\n");
                customers.forEach((c) => {
                    console.log(`ID: ${c._id} | Name: ${c.name} | Age: ${c.age}`);
                });
                console.log("");
            }
        } else if (choice === "3") {
            const id = prompt("Enter customer ID to update: ").trim();

            const newName = prompt("Enter new name (leave blank to keep current): ").trim();
            const newAgeInput = prompt("Enter new age (leave blank to keep current): ").trim();

            const updateData = {};

            if (newName) updateData.name = newName;
            if (newAgeInput) updateData.age = Number(newAgeInput);

            const updatedCustomer = await Customer.findByIdAndUpdate(id, updateData, { new: true });

            if (!updatedCustomer) {
                console.log("Customer not found.");
            } else {
                console.log("Customer updated successfully.");
            }
        }

        else if (choice === "4") {
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