// Creamos la conexión a la base de datos (Por ahora local)
// Como vamos a utilizar el ODM Mongoose, lo importamos para crear la conexión. 
// Require Modules
// const mongoose = require("mongoose"); // Before ES6

// Type Modules
import mongoose from "mongoose"; // ES6

export const connectDB = async() => {
    try {
        await mongoose.connect("mongodb://localhost/db");
        console.log("Database connected");
    } catch (error) {
        console.error("Error connecting to Database", error)
    }
}