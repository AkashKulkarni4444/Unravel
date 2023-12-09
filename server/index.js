import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';

import authRoutes from './Routes/auth.js'
const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/auth",authRoutes);
const PORT = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send("Working.");
});

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then((result) => {
    app.listen(PORT, () => { console.log(`Server running on port: ${PORT}`); })
}).catch((err) => {
    console.log(err.message);
});