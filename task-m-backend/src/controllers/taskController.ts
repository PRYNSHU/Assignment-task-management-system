import { Task } from '../model/task';

// To create a task
export const createTask = async (req , res) => {
    try {
        
        const newTask = new Task(req.body)

        // save task to db
        const savedTask = await newTask.save()

        res.status(201).json(savedTask)
    } catch (error) {
        res.status(400).json({ error: error })
    }
};

// To get task with filters
export const getTasks = async (req , res) => {
    try {

        // filter the tasks based on completion and priority
        const { completed, priority } = req.query;
        const filter: any = {};
        
        if (completed) filter.completed = completed === 'true';
        if (priority) filter.priority = priority;
        const tasks = await Task.find(filter);
        
        res.status(200).json(tasks);
    } catch (error) {
        res.status(400).json({ error: error });
    }
};

// get task by id to edit
export const getTaskById = async (req , res) => {
    try {
        const { taskId } = req.params;
        const task = await Task.findOne({ taskId });
        
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(400).json({ error: error });
    }
};

// delete the task by taskId
export const deleteTask = async (req, res) => {
    try {
        const { taskId } = req.params;
        await Task.deleteOne({taskId : taskId});

        res.status(204).end();
    } catch (error) {
        res.status(400).json({ error: error });
    }
};