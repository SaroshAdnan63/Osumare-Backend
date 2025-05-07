# 📝 Task Management API

A simple RESTful API for managing tasks, built using **Node.js** and **Express.js**.

##  Features

- Create, read, update, and delete tasks
- Task validation
- In-memory data storage
- Health check endpoint
- Error handling for unknown routes and internal server errors


### Prerequisites

- Node.js (v14+ recommended)
- npm

 API Endpoints
 GET /health

 Tasks
 Get all tasks : GET /tasks
 Create a new task : POST /tasks
 Get a specific task : GET /tasks/:id
 Update a task: PUT /tasks/:id
 Delete a task : DELETE /tasks/:id

 App Structure
Backend/
 index.js               
 routes/  taskRoutes.js     
 controllers/  taskController.js 

