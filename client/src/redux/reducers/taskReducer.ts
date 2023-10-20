import TaskDB from "../../types/TaskDB";
import Task from "../../types/Tasks";
import * as ActionType from "../types";
import { AnyAction } from "redux";

export interface TaskState {
  tasks: Task[];
  tasksToday: Task[];
  loading: boolean;
  error: any;
}

const initialState: TaskState = {
  tasks: [],
  tasksToday: [],
  loading: false,
  error: null,
};

const taskReducer = (state: TaskState = initialState, action: AnyAction) => {
  switch (action.type) {
    case ActionType.FETCH_TASKS_REQUEST:
      return { ...state, loading: true };
    case ActionType.FETCH_TASKS_SUCCESS:
      const payload: TaskDB[] = action.payload;
      let data: Task[] =  [];
      payload.forEach((item: TaskDB) => {
        data.push({
          task_id: item.task_id,
          parent_task_id: item.parent_task_id,
          startTime: item.started_time,
          finishTime: item.finished_time,
          taskName: item.task_name,
          title: item.title,
          description: item.description,
          priority: item.priority,
          status: item.status,
          type: item.type
        });
      })
      return { ...state, loading: false, tasks: data };
    case ActionType.GET_TASKS_TODAY_ACTION:
      const payloadToday: TaskDB[] = action.payload;
      let dataToday: Task[] = [];
      payloadToday.forEach((item: TaskDB) => {
        dataToday.push({
          task_id: item.task_id,
          parent_task_id: item.parent_task_id,
          startTime: item.started_time,
          finishTime: item.finished_time,
          taskName: item.task_name,
          title: item.title,
          description: item.description,
          priority: item.priority,
          status: item.status,
          type: item.type
        });
      })
      return { ...state, loading: false, tasksToday: dataToday };
    case ActionType.FETCH_TASKS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case ActionType.POST_TASK_REQUEST:
      return { ...state, loading: true };
    case ActionType.ADD_TASK_ACTION:
      let tasksAfterAdd = [action.payload, ...state.tasks];
      return { ...state, loading: false, tasks: tasksAfterAdd };
    case ActionType.POST_TASK_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case ActionType.EDIT_TASK_ACTION:
      let newTasks = state.tasks.filter((element) => element.task_id !== action.payload.task_id)
      return { ...state, loading: false, tasks: [action.payload, ...newTasks] };
    case ActionType.DELETE_TASK_ACTION:
      let tasksAfterDelete = state.tasks.filter((element) => element.task_id !== action.payload.task_id)
      return { ...state, loading: false, tasks: tasksAfterDelete };
    default:
      return state;
  }
};

export default taskReducer;
