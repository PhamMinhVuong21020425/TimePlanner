import { Dispatch } from "react";
import Task from "../types/Tasks";

type ListTask = {
    listTask: Task[],
    taskInput: Task
}

type ActionType = {
    type: string,
    payload: string
}

type TaskContextType = [
    state: boolean,
    dispatch: Dispatch<ActionType>
]

export type { ListTask, ActionType, TaskContextType };