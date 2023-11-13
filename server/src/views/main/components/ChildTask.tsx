import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import Task from "../types/Tasks";
import EditTaskModal from "./EditTaskModal";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/reducers/rootReducer";

type Props = {
    id: string,
    className?: React.CSSProperties;
};

function taskStyle(i: Task, handleClicked: (id: string) => void) {
    const id: string = i.task_id;

    switch (i.priority) {
        case 'LOW':
            return (
                <div className="bg-emerald-50 rounded-md p-4">
                    <div className="text-xs text-center w-3/5 rounded-md">
                        <div className="font-bold bg-emerald-300 px-2 py-1 rounded-md text-emerald-600 text-xs -translate-y-6 z-0">
                            {i.type.replace(/_/g, " ")}
                        </div>
                    </div>
                    <div key={id} className="font-bold text-base text-gray-600 -translate-y-3 z-0">
                        <Link to={`/task/${id}`}>{i.taskName}</Link>
                    </div>
                    <div className="text-gray-600 text-xs">{i.description}</div>
                    <div className="flex justify-between items-center mt-5">
                        {buttonStyle(i)}
                        <button className="px-2 py-1 text-emerald-500" onClick={() => handleClicked(id)}>
                            <FiEdit />
                        </button>
                    </div>
                </div >
            );
            break;
        case 'MEDIUM':
            return (
                <div className=" bg-amber-50 rounded-md p-4">
                    <div className="text-xs text-center w-3/5 rounded-md">
                        <div className="font-bold bg-amber-300 px-2 py-1 rounded-md text-amber-600 text-xs -translate-y-6 z-0">
                            {i.type.replace(/_/g, " ")}
                        </div>
                    </div>
                    <div key={id} className="font-bold text-base text-gray-600 -translate-y-3 z-0">
                        <Link to={`/task/${id}`}>{i.taskName}</Link>
                    </div>
                    <div className="text-gray-600 text-xs">{i.description}</div>
                    <div className="flex justify-between items-center mt-5">
                        {buttonStyle(i)}
                        <button className="px-2 py-1 text-amber-500" onClick={() => handleClicked(id)}>
                            <FiEdit />
                        </button>
                    </div>
                </div>
            );
            break;

        case 'HIGH':
            return (
                <div className="bg-rose-50 rounded-md p-4">
                    <div className="text-xs text-center w-3/5 rounded-md">
                        <div className="font-bold bg-rose-300 px-2 py-1 rounded-md text-rose-600 text-xs -translate-y-6 z-0">
                            {i.type.replace(/_/g, " ")}
                        </div>
                    </div>
                    <div key={id} className="font-bold text-base text-gray-600 -translate-y-3 z-0" >
                        <Link to={`/task/${id}`}>{i.taskName}</Link>
                    </div>
                    <div className="text-gray-600 text-xs">{i.description}</div>
                    <div className="flex justify-between items-center mt-5">
                        {buttonStyle(i)}
                        <button className="px-2 py-1 text-rose-500" onClick={() => handleClicked(id)}>
                            <FiEdit />
                        </button>
                    </div>
                </div>
            );
            break;
        default:
            return null;
            break;
    }
}

function buttonStyle(i: Task) {
    return (
        <div>
            {i.status === 'STOPPED' ? (
                <button className="font-bold text-xs text-rose-600 bg-rose-200 px-2 py-1 rounded-md">
                    Stopped
                </button>
            ) : i.status === 'INPROGRESS' ? (
                <button className="font-bold text-xs text-cyan-600 bg-cyan-200 px-2 py-1 rounded-md">
                    In Progress
                </button>
            ) : i.status === 'COMPLETED' ? (
                <button className="font-bold text-xs text-green-600 bg-green-200 px-2 py-1 rounded-md">
                    Completed
                </button>
            ) : null}
        </div>
    );
}


function ChildTask({ id }: Props) {
    // const todo: Task[] = [
    //     {
    //         id: 1,
    //         started_time: new Date('1995-12-17T03:20:00'),
    //         finished_time: new Date('1995-12-20T03:20:00'),
    //         task_name: 'Project X',
    //         title: 'Brainstorming',
    //         description:
    //             'An existing Date object. This effectively makes a copy of the existing Date object with the same date and time.',
    //         priority: 'HIGH',
    //         status: 'INPROGRESS',
    //     },
    //     {
    //         id: 2,
    //         started_time: new Date('1995-01-17T03:24:00'),
    //         finished_time: new Date('1995-01-20T03:24:00'),
    //         task_name: 'Project Y',
    //         title: 'Brainstorming',
    //         description:
    //             'When no parameters are provided, the newly-created Date object represents the current date and time as of the time of instantiation.',
    //         priority: 'LOW',
    //         status: 'COMPLETED',
    //     },
    //     {
    //         id: 3,
    //         started_time: new Date('1995-07-31T03:25:00'),
    //         finished_time: new Date('1995-08-20T03:25:00'),
    //         task_name: 'Project Z',
    //         title: 'Brainstorming',
    //         description: 'Utilities for controlling the font size of an element.',
    //         priority: 'LOW',
    //         status: 'STOPPED',
    //     },
    //     {
    //         id: 4,
    //         started_time: new Date('1995-07-31T03:25:00'),
    //         finished_time: new Date('1995-08-20T03:25:00'),
    //         task_name: 'Project W',
    //         title: 'New Year Celebration',
    //         description: 'Utilities for controlling the font size of an element. Utilities for controlling the font size of an element. Utilities for controlling the font size of an element. Utilities for controlling the font size of an element. Utilities for controlling the font size of an element. Utilities for controlling the font size of an element. Utilities for controlling the font size of an element. Utilities for controlling the font size of an element. Utilities for controlling the font size of an element. Utilities for controlling the font size of an element. Utilities for controlling the font size of an element.',
    //         priority: 'MEDIUM',
    //         status: 'INPROGRESS',
    //     },
    //     {
    //         id: 5,
    //         started_time: new Date('1995-07-31T03:25:00'),
    //         finished_time: new Date('1995-08-20T03:25:00'),
    //         task_name: 'Project W',
    //         title: 'Brainstorming',
    //         description: 'Utilities for controlling the font size of an element.',
    //         priority: 'LOW',
    //         status: 'INPROGRESS',
    //     },
    //     {
    //         id: 6,
    //         started_time: new Date('1995-07-31T03:25:00'),
    //         finished_time: new Date('1995-08-20T03:25:00'),
    //         task_name: 'Project W',
    //         title: 'Brainstorming',
    //         description: 'Utilities for controlling the font size of an element.',
    //         priority: 'MEDIUM',
    //         status: 'STOPPED',
    //     },
    //     {
    //         id: 7,
    //         started_time: new Date('1995-07-31T03:25:00'),
    //         finished_time: new Date('1995-08-20T03:25:00'),
    //         task_name: 'Project Z',
    //         title: 'Brainstorming',
    //         description: 'Utilities for controlling the font size of an element.',
    //         priority: 'MEDIUM',
    //         status: 'COMPLETED',
    //     },
    // ];
    const [currentId, setCurrentId] = useState("0");
    const [todo, setTodo] = useState<Task[]>([])
    const dispatch = useDispatch();
    const tasks: Task[] = useSelector((state: RootState) => state.taskState.tasks);

    useEffect(() => {
        const childTasks = tasks.filter((item => {
            return item.parent_task_id === id;
        }))
        setTodo(childTasks);
        // request.get<Task[]>(`task/child/${id}`)
        //     .then(response => {
        //         setTodo(response.data);
        //     })
        //     .catch(error => {
        //         console.error('Error fetching data:', error);
        //     });
    }, [id, tasks]);

    // function editTask(id: string, newData: Task) {
    //     // for (let i = 0; i < todo.length; i++) {
    //     //     if (todo[i].id === id) {
    //     //         todo[i] = newData;
    //     //     }
    //     // }
    // }

    const [showEditTask, setShowEditTask] = useState(false);

    function handleClicked(id: string) {
        setCurrentId(id);
        setShowEditTask(true);
    }

    // const handleSave = () => {
    //     dispatch({
    //         type: 'SET_TASK_INPUT',
    //         payload: 'OK'
    //     });
    // }


    const handleCancel = () => {
        setShowEditTask(false);
    };

    return (
        <div>
            <div className="font-poppins">
                <div className="flex justify-center">
                    <div className="w-[80%] grid grid-cols-3 gap-1">
                        {todo?.map((i) => (
                            <div className="m-4">
                                {<div>{taskStyle(i, handleClicked)}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div>{showEditTask && <EditTaskModal id={currentId} showFunction={handleCancel} />}</div>
        </div>
    );
}
export default ChildTask;
