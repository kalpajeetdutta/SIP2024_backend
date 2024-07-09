import express from "express";
import cors from "cors";
import dataRouter from "./routes/data-routes.js";
import contactRouter from "./routes/contact-routes.js";
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config()

const app = express()
const PORT = 8080

app.use(express.json());
app.use(cors({
    origin: "https://interntezu.netlify.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use('/api/data', dataRouter)
app.use('/api/contact', contactRouter)

mongoose.connect(process.env.MONGO_DB_URL).then(() => {
    app.listen(PORT, () => console.log("Connected successfully on PORT: 8080"));
});