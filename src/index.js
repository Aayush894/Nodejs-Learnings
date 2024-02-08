// consistency kharab ho rhi
// require('dotenv').config({path: './env'}) 
import dotenv from 'dotenv' ;
import connectDB from './db/index.js';
import {app} from './app.js'

// add experimental features in package.json
dotenv.config({
    path: './.env'
})


connectDB()
.then(() => {
    // error handling
    app.on("error", (error) => {
        console.log("Error: ", error);
        throw error
    })

    app.listen(process.env.PORT || 8000, () => { 
        console.log(`Server is listening on ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log(`MongoDB connection failed`, err);
})


/*
import express from 'express';
const app = express();

// IIFE start with semicolon
;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log("Error: ", error);
            throw error
        })

        app.listen(process.env.PORT, () =>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR: ", error) 
        throw error
    }
})() 
*/