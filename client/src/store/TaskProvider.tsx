import React, { useReducer, ReactNode } from 'react';
import TaskContext from './TaskContext';
import reducer, { initState } from './reducer';
import { TaskContextType } from './types';

interface TaskProviderProps {
    children: ReactNode;
}

const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initState);
    let value: TaskContextType = [state, dispatch];
    return (
        <TaskContext.Provider value={value}>
            {children}
        </TaskContext.Provider>
    );
};

export default TaskProvider;