import express from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
})) ; 

// security practices
app.use(express.json({
    limit: '10kb',
}))

// url encoder
app.use(express.urlencoded({
    extended: true,
    limit: '10kb',
}))

// static assest storing.
app.use(express.static("public"))

app.use(cookieParser())


// routes import 
import userRouter from './routes/user.routes.js'; 


// routes declaration
app.use("/api/v1/users", userRouter);

// http://localhost:8000/api/v1/users/register

export {app}