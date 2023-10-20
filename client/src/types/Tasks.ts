interface Task {
  task_id: string;
  parent_task_id: string | undefined | null;
  startTime: string;
  finishTime: string;
  taskName: string;
  title: string;
  description: string;
  priority: "LOW" | "MEDIUM" | "HIGH";
  status: "COMPLETED" | "INPROGRESS" | "STOPPED";
  type: string;
}

export const initTask: Task = {
  task_id: "",
  parent_task_id: "",
  startTime: Date(),
  finishTime: Date(),
  taskName: "",
  title: "",
  description: "",
  priority: "LOW",
  status: "INPROGRESS",
  type: "BASIC_NEED",
}

export default Task;
