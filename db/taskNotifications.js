import * as SQLite from 'expo-sqlite/legacy'
import { cancelTaskNotification, scheduleTaskNotification } from '../notification/taskReminder';
import { deleteTask } from './tasks';

const db = SQLite.openDatabase('timekeeper.db');

function createTaskNotificationsTable() {
    db.transaction(tx => {
        tx.executeSql(
            `CREATE TABLE IF NOT EXISTS taskNotifications (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            task_id INTEGER,
            notification_identifier TEXT,
            FOREIGN KEY (task_id) REFERENCES tasks(id) ON DELETE CASCADE
            );`,
            [],
            () => { console.log('Task notifications table created successfully'); },
            (_, error) => { console.log('Error while creating Task notifications table:', error); }
        );
    });
}

export function saveTaskNotificationDetails(taskId, notificationIdentifier) {
    createTaskNotificationsTable();
    db.transaction(tx => {
        tx.executeSql(
            `INSERT INTO taskNotifications (task_id, notification_identifier)
            VALUES (?, ?);`,
            [taskId, notificationIdentifier],
            (_, result) => {
                console.log('Task notification details saved successfully:', result);
            },
            (_, error) => {
                console.log('Error while saving task notification details:', error);
            }
        );
    });
}

export function updateTaskNotificaitons(task, taskId) {
    const notifications = getNotificationsByTaskId(taskId);
    cancelTaskNotification(notifications);
    deleteNotificationByTaskId(taskId, (numberOfDeletedRows) => {
        console.log(`deleted ${numberOfDeletedRows} notifications`);
    });
    scheduleTaskNotification(task, taskId);
}

export function deleteTaskNotifications(taskId) {
    const notifications = getNotificationsByTaskId(taskId);
    cancelTaskNotification(notifications);
    deleteNotificationByTaskId(taskId, (numberOfDeletedRows) => {
        console.log(`deleted ${numberOfDeletedRows} notifications`);
        const deletedRows = deleteTask(taskId);
        if(deletedRows) {
            console.log(`task ${taskId} deleted successfully`);
        } else {
            console.log(`task ${taskId} deletion failed`);
        }
    });
}

function deleteNotificationByTaskId(taskId, callback) {
    db.transaction(tx => {
        tx.executeSql(
            `DELETE FROM taskNotifications WHERE task_id = ?;`,
            [taskId],
            (_, result) => {
                console.log('Task notifications deleted successfully:', result);
                callback(result.rowsAffected);
            },
            (_, error) => {
                console.log('Error while deleting task notifications:', error);
                callback(null);
            }
        );
    });
}

export function getNotificationsByTaskId(taskId) {
    db.transaction(tx => {
        tx.executeSql(
            `SELECT * FROM taskNotifications WHERE task_id = ?;`,
            [taskId],
            (_, result) => {
                console.log('Task notifications retrieved successfully:', result);
                return result.rows._array;
            },
            (_, error) => {
                console.log('Error while retrieving task notifications:', error);
                return [];
            }
        );
    })
}