import { FiEdit } from "react-icons/fi";
import Task from "../types/Tasks";
import { useEffect, useState } from "react";
import request from "../utils/request";
import EditTaskModal from "./EditTaskModal";
import { Link } from "react-router-dom";

type Props = {
    id: string
};

function taskStyle(i: Task, handleClicked: (id: string) => void) {
    const id: string = i.task_id;

    switch (i.priority) {
        case 'LOW':
            return (
                <div className="bg-emerald-50 rounded-md p-4">
                    <div className="text-xs text-center w-3/5 rounded-md">
                        <div className="bg-emerald-300 px-2 py-1 rounded-md text-emerald-700 text-xs -translate-y-6">
                            {i.type.replace(/_/g, " ")}
                        </div>
                    </div>
                    <div key={id} className="font-bold text-base text-gray-600 -translate-y-3">
                        <Link to={`/task/${id}`}>{i.task_name}</Link>
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
                        <div className="bg-amber-300 px-2 py-1 rounded-md text-amber-700 text-xs -translate-y-6">
                            {i.type.replace(/_/g, " ")}
                        </div>
                    </div>
                    <div key={id} className="font-bold text-base text-gray-600 -translate-y-3">
                        <Link to={`/task/${id}`}>{i.task_name}</Link>
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
                        <div className="bg-rose-300 px-2 py-1 rounded-md text-rose-700 text-xs -translate-y-6">
                            {i.type.replace(/_/g, " ")}
                        </div>
                    </div>
                    <div key={id} className="font-bold text-base text-gray-600 -translate-y-3" >
                        <Link to={`/task/${id}`}>{i.task_name}</Link>
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
                <button className="text-xs text-rose-700 bg-rose-200 px-2 py-1 rounded-md">
                    Stopped
                </button>
            ) : i.status === 'INPROGRESS' ? (
                <button className="text-xs text-cyan-700 bg-cyan-200 px-2 py-1 rounded-md">
                    In Progress
                </button>
            ) : i.status === 'COMPLETED' ? (
                <button className="text-xs text-green-700 bg-green-200 px-2 py-1 rounded-md">
                    Completed
                </button>
            ) : null}
        </div>
    );
}

function ToDoList({ id }: Props) {
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
    const [todo, setTodo] = useState<Task[]>();
    const [currentId, setCurrentId] = useState("0");
    useEffect(() => {
        request.get<Task[]>(`task/child/${id}`)
            .then(response => {
                setTodo(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

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

    const handleCancel = () => {
        setShowEditTask(false);
    };

    return (
        <div>
            <div className="font-poppins">
                <div className="flex justify-between">
                    {/* First Column */}
                    <div className="w-1/3 rounded-md mx-3 p-2">
                        <div className="flex items-center px-4">
                            <div className="bg-cyan-500 w-[6px] h-[6px] rounded-md mr-4"></div>
                            <div className="text-cyan-500 font-bold text-sm">In Progress</div>
                        </div>
                        <hr className="border-2 border-cyan-400 rounded-md my-2 mx-4" />
                        <div>
                            {todo?.map((i) => (
                                <div className="m-4">
                                    {i.status === 'INPROGRESS' ? <div>{taskStyle(i, handleClicked)}</div> : null}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Second Column */}
                    <div className="w-1/3 rounded-md mx-2 p-2">
                        <div className="flex items-center px-4">
                            <div className="bg-rose-500 w-[6px] h-[6px] rounded-md mr-4"></div>
                            <div className="text-rose-500 font-bold text-sm">Stopped</div>
                        </div>
                        <hr className="border-2 border-rose-400 rounded-md my-2 mx-4" />
                        <div>
                            {todo?.map((i) => (

                                <div className="m-4">
                                    {i.status === 'STOPPED' ? <div>{taskStyle(i, handleClicked)}</div> : null}
                                </div>

                            ))}
                        </div>
                    </div>

                    {/* Third Column */}
                    <div className="w-1/3 rounded-md mx-2 p-2">
                        <div className="flex items-center px-4">
                            <div className="bg-green-500 w-[6px] h-[6px] rounded-md mr-4"></div>
                            <div className="text-green-500 font-bold text-sm">Completed</div>
                        </div>
                        <hr className="border-2 border-green-400 rounded-md my-2 mx-4" />
                        <div>
                            {todo?.map((i) => (
                                <div className="m-4">
                                    {i.status === 'COMPLETED' ? <div>{taskStyle(i, handleClicked)}</div> : null}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div>{showEditTask && <EditTaskModal id={currentId} showFunction={handleCancel} />}</div>
        </div>
    );
}
export default ToDoList;
