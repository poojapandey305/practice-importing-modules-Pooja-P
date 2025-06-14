
/*1. Create the taskManager.js Module:
○ Define and export the following functions:
1. addTask(tasks, task): Adds a new task to the task list.
2. listTasks(tasks): Logs all tasks to the console.

 *///addTask(tasks, task): Adds a new task to the task list.
function addTask(tasks,task){
tasks.push(task);
}
//2. listTasks(tasks): Logs all tasks to the console.

function listTask(tasks){
    console.log("your task:");
    tasks.forEach((task, index)=> {
        console.log(`${index+1}.${task}`);}
);
}

module.exports = { addTask, listTask};

