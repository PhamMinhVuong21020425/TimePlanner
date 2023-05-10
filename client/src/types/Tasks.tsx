interface Task {
  start_time: Date;
  task_name: string;
  title: string;
  description: string;
  priority: "LOW" | "MEDIUM" | "HIGH";
  status: "COMPLETED" | "INPROGRESS" | "STOPPED";
}

export default Task;
