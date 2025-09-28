// require('dotenv').config({path: './env})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express";

const app = express();

dotenv.config({
    path: './env'
});

connectDB();

app.listen(process.env.PORT, () => {
    console.log(`App listening at http://localhost:${process.env.PORT}`);
});




























/*
import express from "express";

const app = express();

//  --------------------- IIFE - Immediately Invoked Function Expression -----------------
(async()=> {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

        app.on("error", (error) => {
            console.log("ERROR: ", error);
            throw error;
        })

        app.listen(PORT, () => {
            console.log(`App listening at http://localhost:${PORT}`);
        });
    }
    catch(error){
        console.log("ERROR: ", error);
        throw err;
    }
})()

*/