# Task Manager API

A simple **Task Management REST API** built using **Node.js** and **Express**.  
The application uses an **in-memory data store** (no database) and provides full CRUD functionality along with filtering, sorting, and priority-based task retrieval.

The project is fully tested using **tap** and **supertest**.

---

## 🚀 Overview

This project allows users to:

- Create tasks
- Retrieve all tasks or a specific task by ID
- Update existing tasks
- Delete tasks
- Filter tasks by completion status
- Sort tasks by creation date
- Assign and retrieve tasks by priority (`low`, `medium`, `high`)

All data is stored **in memory**, meaning it resets whenever the server restarts.

---

## 🛠 Tech Stack

- Node.js (v18+)
- Express.js
- tap (testing framework)
- supertest (API testing)
- CORS

---

## 📂 Project Structure

├── app.js
├── package.json
├── src
│ ├── routes
│ │ └── index.js
│ ├── errors
│ │ └── error.helper.js
│ └── modules
│ └── task
│ ├── task.controller.js
│ ├── task.service.js
│ ├── task.route.js
│ └── task.store.js
└── test
└── server.test.js



---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/airtribe-projects/task-manager-api-amityadav2611.git
cd task-manager

2️⃣ Install dependencies
   npm install

3️⃣ Start the server
   npm start

Server will start at: http://localhost:3000

🩺 Health Check

GET /health-check

Response:
{
  "message": "Server Running..."
}

🧪 Running Tests

The project includes a complete automated test suite.

▶ Run tests
  npm test

✅ Expected Output
   Asserts: 19 pass 0 fail
   Suites: 1 pass 0 fail

📌 API Documentation

➕ Create a Task

POST /tasks

Request Body
{
  "title": "New Task",
  "description": "Task Description",
  "completed": false,
  "priority": "high"
}

Response
{
  "id": 2,
  "title": "New Task",
  "description": "Task Description",
  "completed": false,
  "priority": "high",
  "createdAt": 1710000000000
}

📄 Get All Tasks

GET /tasks

Optional Query Parameters

completed=true | false

sort=asc | desc

Example
GET /tasks?completed=false&sort=asc


🔍 Get Task by ID
GET /tasks/:id

Example

http
Copy code

GET /tasks/1


✏️ Update a Task

PUT /tasks/:id

Request Body

{
  "title": "Updated Task",
  "completed": true,
  "priority": "medium"
}


🗑️ Delete a Task

DELETE /tasks/:id

Example

DELETE /tasks/1


🚦 Get Tasks by Priority

GET /tasks/priority/:level

Allowed Values

low

medium

high

Example
GET /tasks/priority/high


✅ Validation Rules & Error Handling

title and description must be non-empty strings

completed must be a boolean

priority must be one of low, medium, or high

Centralized error handling is implemented using a custom ApiError class
located at:

src/errors/error.helper.js

HTTP Status Codes

400 → Bad Request (invalid input)

404 → Resource Not Found

200 / 201 → Successful operation

🧠 Design Notes

Uses in-memory storage for simplicity

Numeric auto-incremented IDs are used

Data resets on every server restart

Clean separation of concerns:

Routes → Controller → Service → Store

Centralized error handling via custom error class

Designed to align with automated test expectations


👤 Author

Amit Kumar Yadav
Senior Backend Engineer

🏁 Conclusion

This project demonstrates clean REST API design, proper validation, centralized error handling, structured layering, and test-driven development using an in-memory architecture—making it suitable for backend assignments and interviews.

