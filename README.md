# Helpdesk support ticket management API

A simple helpdesk support ticket service management application.

## Getting Started

To get started with the project, follow the instructions below.

### Prerequisites

Before running the server, make sure you have the following installed on your machine:

- Node.js (https://nodejs.org)
- npm (https://www.npmjs.com/) or yarn (https://yarnpkg.com)
- mysql database

### Clone the Repository

To clone the repository, open a terminal and run the following command:

```bash
git clone https://github.com/Ing140943/ticket_api.git
```

### Install dependencies

1. Change into the project directory using the following command:

```bash
cd your-repo
```

2. Install the required dependencies using npm or using yarn:

```bash
- npm install
or
- yarn install
```

### Configure Environment Variables

Copy the example environment file and update it with your configuration:

```bash
cp .env.example .env
```
Edit the .env file to provide the necessary configuration
- HOST
- DATABASE
- USERNAME
- PASSWORD

### Start the Server

To start the Express server using npm, run the following command:

```bash
- npm start
or
- yarn start
```

### Config your SQL Database
You can run sql command in db.sql by changing `your_schema`
Note! Please name database named `tickets` as declare in sql file


# Ticket API Documentation

This document provides an overview of the Ticket API endpoints and their usage.

## Base URL

The base URL for accessing the Ticket API is `https://localhost:8000/api/ticket`.

## Endpoints

### Get All Tickets

- **Endpoint**: `/api/ticket`
- **Method**: GET
- **Description**: Retrieves a list of all tickets.
- **Response**: Returns a JSON array containing ticket objects with their details.

### Get Ticket by ID

- **Endpoint**: `/api/ticket/:id`
- **Method**: GET
- **Description**: Retrieves a specific ticket by its ID.
- **Parameters**:
  - `id` (required) - The unique identifier of the ticket.
- **Response**: Returns a JSON object containing the ticket details.

### Add Ticket

- **Endpoint**: `/api/ticket`
- **Method**: POST
- **Description**: Adds a new ticket.
- **Request Body**: Expects a JSON object with the following properties:
  - `title` (required) - The title of the ticket.
  - `description` (required) - A description of the ticket.
  - `contact_info` (required) - Contact information associated with the ticket.
  - `status` (required) - The status of the ticket.
- **Response**: Returns a success message upon successful insertion.

### Update Ticket

- **Endpoint**: `/api/ticket/:id`
- **Method**: PUT
- **Description**: Updates an existing ticket by its ID.
- **Parameters**:
  - `id` (required) - The unique identifier of the ticket to update.
- **Request Body**: Expects a JSON object with the following properties:
  - `title` (required) - The updated title of the ticket.
  - `description` (required) - The updated description of the ticket.
  - `contact_info` (required) - Updated contact information associated with the ticket.
  - `status` (required) - The updated status of the ticket.
- **Response**: Returns a success message upon successful update.

## Examples

### Get All Tickets

```http
GET /api/ticketa
```
#### Response
```json
[
  {
    "id": 1,
    "title": "Sample Ticket 1",
    "description": "This is a sample ticket.",
    "contact_info": "sample@example.com",
    "status": "Open",
    "created_date": "2023-07-28T12:34:56Z",
    "updated_date": null
  },
  {
    "id": 2,
    "title": "Sample Ticket 2",
    "description": "This is another sample ticket.",
    "contact_info": "another@example.com",
    "status": "Closed",
    "created_date": "2023-07-28T13:45:12Z",
    "updated_date": "2023-07-28T14:30:21Z"
  }
]
```

### Get Ticket by ID

```http
GET /api/ticket/1
```
#### Response
```json
{
  "id": 1,
  "title": "Sample Ticket 1",
  "description": "This is a sample ticket.",
  "contact_info": "sample@example.com",
  "status": "Open",
  "created_date": "2023-07-28T12:34:56Z",
  "updated_date": null
}
```

### Add Ticket

```http
POST /api/tickets

Request Body:
{
  "title": "New Ticket",
  "description": "This is a new ticket.",
  "contact_info": "new@example.com",
  "status": "Open"
}
```
#### Response
```json
"Already inserted data"
```

### Update Ticket

```http
PUT /api/tickets/2

Request Body:
{
  "title": "Updated Ticket",
  "description": "This ticket has been updated.",
  "contact_info": "updated@example.com",
  "status": "In Progress"
}
```
#### Response
```json
"Updated successfully!"
```