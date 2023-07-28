import express from "express";
import { getAllTickets, getTicket, addTicket, updateTicket } from "../controllers/ticket.js";

const router = express.Router();

router.get("/", getAllTickets)
router.get("/:id", getTicket)
router.post("/", addTicket)
router.put("/:id", updateTicket)

export default router