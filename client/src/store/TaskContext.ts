import React, { Dispatch, createContext } from 'react';
import { TaskContextType } from "./types";

const TaskContext = createContext<TaskContextType>({} as TaskContextType);


export default TaskContext;