import { db } from "../db.js";

export const getAllTickets = (req, res) => {
    const q = "SELECT * FROM tickets;"
    db.query(q, (err, data) => {
        if (err) {
            return res.json(err)
        }
        return res.json(data)
    })
}

export const getTicket = (req, res) => {
    const id = req.params.id;
    const q = "SELECT * FROM tickets WHERE id = ?";
    db.query(q, [id], (err, data) => {
        if (err) {
            res.json(err)
        }
        return res.json(data)
    })
}

export const addTicket = (req, res) => {
    const ticket = req.body;
    const q = "INSERT INTO tickets (`title`, `description`, `contact_info`, `status`,`created_date`) VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP())"
    const values  = [ticket.title, ticket.description, ticket.contact_info, ticket.status]

    db.query(q, values, (err, data) => {
        if (err) {
            return res.json(err)
        }
        return res.json("Already inserted data")
     })
}

export const updateTicket = (req, res) => {
    const ticket = req.body
    const ticketId = req.params.id;

    const q = "UPDATE tickets SET `title` = ? , `description` = ?, `contact_info` = ?, `status` = ?,`updated_date` = CURRENT_TIMESTAMP() WHERE id = ?"
    const values = [
        ticket.title,
        ticket.description,
        ticket.contact_info,
        ticket.status
    ]
    db.query(q, [...values, ticketId], (err, data) => {
        if (err) {
            return res.json(err)
        }
        return res.json("Updated successfully!")
    })
}