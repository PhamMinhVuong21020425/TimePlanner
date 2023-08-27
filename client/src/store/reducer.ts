import { ListTask, ActionType } from "./types";

const initState = true;

function reducer(state: boolean, action: ActionType) {
    switch (action.type) {
        case 'SET_TASK_INPUT':
            return !state;
        default:
            return !state;
    }
}

export { initState };

export default reducer;