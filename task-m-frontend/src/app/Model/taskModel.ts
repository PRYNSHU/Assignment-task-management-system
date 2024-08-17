export interface taskForm {
    taskId: string;
    title: string;
    completed: boolean;
    priority: string;
    dueDate: Date | null;
}