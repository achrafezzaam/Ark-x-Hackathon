const tasks = ["Read", "Code", "Sleep", "Eat"];
const status = [true, false, true, false];

class checkList {
    constructor (task, status) {
        this.task = task;
        this.status = status;
    }
}

let newTasks = [];

for (let i = 0; i < status.length; i++) {
    const taskObject = new checkList(tasks[i], status[i])
    newTasks.push(taskObject);
}

function printTaskList(taskObj) {
    let sign = "\u2716 ";
    if (taskObj.status === true) {
        sign = "\u2713 ";
    } else {
        sign = "\u2716 ";
    }
    console.log(sign + taskObj.task);
}

function getCompletionStats(taskObject) {
    let count = 0
    for (let i = 0; i < taskObject.length; i++) {
        if (taskObject[i].status === true) {
            count += 1;
        }
    }
    const completePercent = count * 100 / taskObject.length
    console.log("Completion status:")
    console.log(count + "/" + taskObject.length + " tasks compelte (" + completePercent + "%)");
    if (count == 0) {
        console.log("You can do it!");
    }
}

function getUnfinishedTasks(taskObject) {
    let unfinished = [];
    for (let i = 0; i < taskObject.length; i++) {
        if (taskObject[i].status === false) {
            unfinished.push(taskObject[i]);
        }
    }
    return unfinished;
}

function getStreak(taskObject) {
    let streak = 0;
    let temp = 0;
    
    for (let i = 0; i < taskObject.length; i++) {
        if (taskObject[i].status === true) {
            temp += 1;
        }
        else {
            if (streak < temp) {
                streak = temp;
            }
            temp = 0;
        }
        if (streak < temp) {
            streak = temp;
        }
    }
    return streak;
}

console.log("Welcome to the app. Your tasks by status are as follows:");
if (newTasks.length == 0) {
    console.log("You have no tasks!");
} else {
    newTasks.forEach(printTaskList);
    getCompletionStats(newTasks);
    const unfinished_tasks = getUnfinishedTasks(newTasks);
    if (unfinished_tasks.length == 0) {
        console.log("Congratulations, you have no unfinished tasks!")
    } else {
        console.log("Your unfinished tasks are:");
        unfinished_tasks.forEach(printTaskList);
    }

    const longestStreak = getStreak(newTasks);
    if (longestStreak == 0) {
        console.log("You have no streak");
    } else {
        console.log("Your longest streak is: " + longestStreak);
    }
}

const target = document.getElementById("tasks");
for (let i = 0; i < newTasks.length; i++) {
    const taskDisplay = document.createElement('div');
    taskDisplay.textContent = newTasks[i].task;
    if (newTasks[i].status) {
        taskDisplay.classList.add("done");        
    } else {
        taskDisplay.classList.add("undone");
    }
    target.appendChild(taskDisplay);
}

let count = 0
    for (let i = 0; i < newTasks.length; i++) {
        if (newTasks[i].status === true) {
            count += 1;
        }
    }

const completePercent = count * 100 / newTasks.length;
const progress = document.getElementById("progress");
progress.setAttribute("value", completePercent);
progress.textContent = completePercent + "%";