import * as ActionType from "../types";
import request from "../../utils/request";
import Task from "../../types/Tasks";
import { Dispatch } from 'redux';

const fetchTasksRequest = () => ({
  type: ActionType.FETCH_TASKS_REQUEST,
});

const fetchTasksSuccess = (data: Task[]) => ({
  type: ActionType.FETCH_TASKS_SUCCESS,
  payload: data,
});

const fetchTasksFailure = (error: any) => ({
  type: ActionType.FETCH_TASKS_FAILURE,
  payload: error,
});

const getTasksTodaySuccess = (data: Task[]) => ({
  type: ActionType.GET_TASKS_TODAY_ACTION,
  payload: data,
});

export const fetchTasksAction = (): any => {
  return (dispatch: Dispatch) => {
    dispatch(fetchTasksRequest());
    request.get<Task[]>("task")
      .then((response) => {
        dispatch(fetchTasksSuccess(response.data))
      })
      .catch((error) => {
        dispatch(fetchTasksFailure(error));
      });
  };
};

export const getTasksTodayAction = (): any => {
  return (dispatch: Dispatch) => {
    dispatch(fetchTasksRequest());
    request.get<Task[]>("task/today")
      .then((response) => {
        dispatch(getTasksTodaySuccess(response.data))
        dispatch(fetchTasksAction());
      })
      .catch((error) => {
        dispatch(fetchTasksFailure(error));
      });
  };
};

export const postTaskRequest = () => ({
  type: ActionType.POST_TASK_REQUEST,
});

export const postTaskSuccess = (data: Task) => ({
  type: ActionType.ADD_TASK_ACTION,
  payload: data,
});

export const postTaskFailure = (error: any) => ({
  type: ActionType.POST_TASK_FAILURE,
  payload: error,
});

export const editTaskSuccess = (data: Task) => ({
  type: ActionType.EDIT_TASK_ACTION,
  payload: data,
});

export const deleteTaskSuccess = (data: Task) => ({
  type: ActionType.DELETE_TASK_ACTION,
  payload: data,
});

export const addTaskAction = (data: Task): any => {
  return (dispatch: Dispatch) => {
    dispatch(postTaskRequest());
    request.post(`task/${data.parent_task_id}`, data)
      .then((response) => {
        dispatch(postTaskSuccess(data))
        dispatch(getTasksTodayAction());
      })
      .catch((error) => {
        dispatch(postTaskFailure(error));
      });
  };
};

export const editTaskAction = (data: Task): any => {
  return (dispatch: Dispatch) => {
    dispatch(postTaskRequest());
    request.post(`task/update/${data.task_id}`, data)
      .then((response) => {
        dispatch(editTaskSuccess(data))
        dispatch(getTasksTodayAction());
      })
      .catch((error) => {
        dispatch(postTaskFailure(error));
      });
  };
};

export const deleteTaskAction = (data: Task): any => {
  return (dispatch: Dispatch) => {
    dispatch(postTaskRequest());
    request.delete(`task/delete/${data.task_id}`)
      .then((response) => {
        dispatch(deleteTaskSuccess(data))
        dispatch(getTasksTodayAction());
      })
      .catch((error) => {
        dispatch(postTaskFailure(error));
      });
  };
};
