import * as SQLite from 'expo-sqlite/legacy'

const db = SQLite.openDatabase('timekeeper.db');

//create table
function createTasksTable() {
    db.transaction((tx) => {
        tx.executeSql(
            `CREATE TABLE IF NOT EXISTS tasks (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              taskName TEXT,
              timeAt TEXT,
              timeFrom TEXT,
              timeTo TEXT,
              days TEXT,
              notes TEXT,
              taskTag TEXT
            );`,
            [],
            () => { console.log('Table created successfully'); },
            (_, error) => { console.log('Error while creating table:', error); }
        );
    });
}

//format time
function formatTime(time) {
    const {timeAt, timeFrom, timeTo} = time;
    return {
        timeAt: timeAt ? timeAt.toLocaleTimeString('en-US', { hour12:false, hour:"2-digit", minute: "2-digit" }) : null,
        timeFrom: timeFrom ? timeFrom.toLocaleTimeString('en-US', { hour12:false, hour:"2-digit", minute: "2-digit" }) : null,
        timeTo: timeTo ? timeTo.toLocaleTimeString('en-US', { hour12:false, hour:"2-digit", minute: "2-digit" }) : null
    };
}

//write
export function createNewTask(task, callback) {
    createTasksTable();
    const { taskName, time, days, notes, taskTag } = task;
    const taskTime = formatTime(time);
    const dayString = days.join(',');
    db.transaction(tx => {
        tx.executeSql(
            `INSERT INTO tasks (taskName, timeAt, timeFrom, timeTo, days, notes, taskTag) 
             VALUES (?, ?, ?, ?, ?, ?, ?);`,
            [taskName, taskTime.timeAt, taskTime.timeFrom, taskTime.timeTo, dayString, notes, taskTag],
            (_, result) => { callback(result); },
            (_, error) => { 
                console.error(error);
                callback(error); 
            }
        );
    });
}

//fetch all rows
export function fetchAllTasks(callback) {
    db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM tasks;',
          [],
          (_, { rows: { _array } }) => {
           callback(_array)
          },
          (_, error) => { 
            console.error('Error fetching task:', error);
            callback(error);
         }
        );
    });
}

//fetch rows with a particular time and day
export function fetchTasksByTime(time, day, callback) {
    db.transaction(tx => {
        tx.executeSql(
            `SELECT * FROM tasks WHERE timeAt = ? 
            OR
            (timeFrom <= ? AND timeTo >= ?)
            OR
            (timeFrom > timeTo AND (timeFrom <= ? OR timeTo >= ?))
            AND
            (days LIKE '%' || ? || '%');`,
            [time, time, time, time, time, day],
            (_, { rows: { _array } }) => {
                callback(_array);
            },
            (_, error) => { 
                console.error('Error fetching task:', error);
                callback(error); 
            }
        );
    });
}

//edit task
export function updateTask(taskId, taskData, callback) {
    const { taskName, time, days, notes, taskTag } = taskData;
    const { timeAt, timeFrom, timeTo } = time;
  
    db.transaction(tx => {
      tx.executeSql(
        `UPDATE tasks 
         SET taskName = ?, 
             timeAt = ?, 
             timeFrom = ?, 
             timeTo = ?, 
             days = ?, 
             notes = ?, 
             taskTag = ?
         WHERE id = ?`,
        [taskName, timeAt, timeFrom, timeTo, days.join(','), notes, taskTag, taskId],
        (_, result) => {
          callback(result);
        },
        (_, error) => {
          console.error('Error editing task:', error);
          callback(error);
        }
      );
    });
}

//delete task
export function deleteTask(taskId, callback) {
    db.transaction(tx => {
        tx.executeSql(
            `DELETE FROM tasks WHERE id = ?`,
            [taskId],
            (_, result) => {
                callback(result);
            },
            (_, error) => {
                console.error('Error deleting task:', error);
                callback(error);
            }
        );
    });
}

//delete all tasks
export function deleteAllTasks(callback) {
    db.transaction(tx => {
        tx.executeSql(
            `DELETE FROM tasks`,
            [],
            (_, result) => {
                callback(result);
            },
            (_, error) => {
                console.error('Error deleting all tasks:', error);
                callback(null);
            }
        );
    });
}
