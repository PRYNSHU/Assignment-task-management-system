import * as express from 'express'
const router = express.Router()
import { createTask, getTasks,getTaskById, deleteTask } from '../controllers/taskController';

// routing is defined here

// to create a task
router.post('/tasks', createTask);

// to get all tasks with filteration
router.get('/tasks', getTasks);

// to edit task based on taskId
router.get('/tasks/:taskId', getTaskById);

// to delete task
router.delete('/tasks/:taskId', deleteTask);

module.exports = router