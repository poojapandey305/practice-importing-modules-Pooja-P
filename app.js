// app.js

const path = require('path');
const taskManager = require('./taskManager');
const fileHandler = require('./fileHandler');

const filePath = path.join(__dirname, 'tasks.json'); // Save tasks here

// Load tasks from file
let tasks = fileHandler.loadTasks(filePath);

// Add a new task
taskManager.addTask(tasks, 'read a book');
taskManager.addTask(tasks, 'go to walk');

// Save updated tasks to file
fileHandler.saveTasks(filePath, tasks);

// List all tasks
taskManager.listTask(tasks);
