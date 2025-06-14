const fs = require('fs');

function saveTasks(filePath, tasks) {
    fs.writeFileSync(filePath, JSON.stringify(tasks));
}

function loadTasks(filePath) {
    if (!fs.existsSync(filePath)) {
        return [];
    }

    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
}

module.exports = {
    saveTasks,
    loadTasks
};