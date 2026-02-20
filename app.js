require("dotenv").config();
const mongoose = require("mongoose");

async function connectToDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("✅ Connected to MongoDB!");

        await mongoose.connection.close();
        console.log("✅ Connection closed. Done.");
    } catch (err) {
        console.log("❌ Connection failed.");
        console.log(err.message);
    }
}

connectToDB();