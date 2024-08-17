import { Schema, model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

// Define the Task schema
const taskSchema = new Schema({
    taskId: {
        type: String,
        unique: true,
        default: uuidv4, // generate a UUID for each task
    },
    title: { 
        type: String, 
        required: true 
    },
    completed: { 
        type: Boolean, 
        default: false 
    },
    priority: { 
        type: String, 
        enum: ['Low', 'Medium', 'High'], 
        default: 'Medium' 
    },
    dueDate: {
        type: Date, 
        required: false 
    }
})

export const Task = model('Task', taskSchema);
