interface Task {
  task_id: string;
  started_time: string;
  finished_time: string;
  task_name: string;
  title: string;
  description: string;
  priority: "LOW" | "MEDIUM" | "HIGH";
  status: "COMPLETED" | "INPROGRESS" | "STOPPED";
  type: string;
}

export default Task;
