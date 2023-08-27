import Task from "../types/Tasks";

function setTaskInput(payload: Task) {
    return {
        type: 'SET_TASK_INPUT',
        payload
    }
}

function addTask(payload: Task) {
    return {
        type: 'ADD_TASK',
        payload
    }
}

export { setTaskInput, addTask };