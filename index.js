import express, { urlencoded } from "express";
import ticketRoutes from "./routes/ticket.js"
import { db } from "./db.js";
import cors from "cors";


const app = express()
 
// middleware for allow incoming request in JSON format
app.use(express.json())
app.use(urlencoded({ extended: true}));
app.use(cors())

// Check database connection
if (db) {
    console.log("Connection is successful!");
} else{
    console.log("โอ้ะ โอ่มีปัญหาละ");
}


app.get("/", (req, res) => {
    res.json("Hi world")
})


app.use("/api/ticket", ticketRoutes)


app.listen(process.env.PORT, () => {
    console.log("Server is running on port:", process.env.PORT);
})