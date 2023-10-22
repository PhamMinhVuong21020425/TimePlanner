import moment from "moment";
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
  startTime: moment().format('YYYY-MM-DD HH:mm:ss'),
  finishTime: moment().format('YYYY-MM-DD HH:mm:ss'),
  taskName: "",
  title: "",
  description: "",
  priority: "LOW",
  status: "INPROGRESS",
  type: "BASIC_NEED",
}

export default Task;
