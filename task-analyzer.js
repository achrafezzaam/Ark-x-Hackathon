const tasks = ["Read", "Code", "Sleep", "Eat"];
const status = [true, false, true, false];

function printTaskList(task_list, status_list) {
    let sign = "\u2716 ";
    for (let i = 0; i < task_list.length; i++) {
        if (status_list[i] === true) {
            sign = "\u2713 ";
        } else {
            sign = "\u2716 ";
        }
        console.log(sign + task_list[i]);
    }
}

function getCompletionStats(status_list) {
    let count = 0
    for (let i = 0; i < status_list.length; i++) {
        if (status_list[i] === true) {
            count += 1;
        }
        else {}
    }
    let completePercent = count * 100 / status_list.length
    console.log("Completion status:")
    console.log(count + "/" + status_list.length + " tasks compelte (" + completePercent + "%)");
    if (count == 0) {
        console.log("You can do it!");
    }
}

function getUnfinishedTasks(task_list, status_list) {
    let unfinished = [];
    for (let i = 0; i < status_list.length; i++) {
        if (status_list[i] === false) {
            unfinished.push(task_list[i]);
        }
        else {}
    }
    return unfinished;
}

function getStreak(status_list) {
    let streak = 0;
    let temp = 0;
    
    for (let i = 0; i < status_list.length; i++) {
        if (status_list[i] === true) {
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
if (tasks.length != status.length) {
    console.log("An error has occured. Please check the status and tasks arrays are the same length.");
} else if (tasks.length == 0) {
    console.log("You have no tasks!");
} else {
    printTaskList(tasks, status);
    getCompletionStats(status);
    const unfinished_tasks = getUnfinishedTasks(tasks, status);
    if (unfinished_tasks == 0) {
        console.log("Congratulations, you have no unfinished tasks!")
    } else {
        console.log("Your unfinished tasks are:");
        const unfinished_array = new Array(unfinished_tasks.length).fill(false);
        printTaskList(unfinished_tasks, unfinished_array);
    }


    const longestStreak = getStreak(status);
    if (longestStreak == 0) {
        console.log("You have no streak");
    } else {
        console.log("Your longest streak is: " + longestStreak);
    }
}