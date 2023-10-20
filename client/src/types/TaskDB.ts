interface TaskDB {
    task_id: string;
    user_id: number;
    task_name: string;
    description: string;
    location: string;
    started_time: string;
    finished_time: string;
    status: "COMPLETED" | "INPROGRESS" | "STOPPED";
    priority: "LOW" | "MEDIUM" | "HIGH",
    type: string;
    created_at: string;
    parent_task_id: string | undefined | null;
    title: string;
}

export default TaskDB;