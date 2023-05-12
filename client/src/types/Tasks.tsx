interface Task {
  task_id: string;
  started_time: Date;
  finished_time: Date;
  task_name: string;
  title: string;
  description: string;
  priority: "LOW" | "MEDIUM" | "HIGH";
  status: "COMPLETED" | "INPROGRESS" | "STOPPED";
}

export default Task;
