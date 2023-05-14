import { useEffect, useRef, useState } from "react";
import Task from "../types/Tasks";
import moment from "moment";

import AddTask from "./AddTask";
import { FaRegKeyboard, FaTelegramPlane } from "react-icons/fa";
import { WiSolarEclipse } from "react-icons/wi";
import { AiOutlineHome } from "react-icons/ai";
import request from "../utils/request";

type Props = {
    id: string,
};

function buttonStyle(i: Task) {
    return (
        <div>
            {i.status === 'STOPPED' ? (
                <button className="font-bold ml-2 text-xs text-rose-600 bg-rose-200 px-2 py-1 rounded-md">
                    Stopped
                </button>
            ) : i.status === 'INPROGRESS' ? (
                <button className="font-bold ml-2 text-xs text-cyan-600 bg-cyan-200 px-2 py-1 rounded-md">
                    In Progress
                </button>
            ) : i.status === 'COMPLETED' ? (
                <button className="font-bold ml-2 text-xs text-green-600 bg-green-200 px-2 py-1 rounded-md">
                    Completed
                </button>
            ) : null}
        </div>
    );
}

function styleTask(i: Task, handleclicked: Function) {
    switch (i.priority) {
        case "LOW":
            return (
                <div className="w-[80%] px-2 py-4 m-4 rounded-md">

                    <div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <div className="flex items-center font-bold text-lg">
                                    <button>
                                        <a href="/">
                                            <AiOutlineHome />
                                        </a>
                                    </button>
                                    <div className="ml-2">
                                        {i.task_name}
                                    </div>
                                </div>
                                <div className="bg-emerald-500 text-white px-2 py-[2px] rounded-md text-xs font-bold ml-4 -translate-y-3">{i.priority}</div>
                            </div>
                            <button className="text-white bg-teal-500 px-2 py-1 rounded-md text-xs font-bold" onClick={() => handleclicked()}>Add Task +</button>
                        </div>
                        <div className="flex items-center text-xs my-1 text-gray-400">
                            <div className="flex items-center">
                                <FaTelegramPlane />
                                <div className="ml-2">Started Time :</div>
                            </div>
                            <div className="ml-2">{i.started_time}</div>
                        </div>
                        <hr className="border-[1px]  mt-4 border-gray-400" />
                        <div className="flex items-center my-2">
                            <div className="flex items-center text-xs text-gray-400">
                                <div><WiSolarEclipse /></div>
                                <div className="ml-2">Status :</div>
                            </div>
                            <div>
                                {buttonStyle(i)}
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="flex items-center text-xs text-gray-400">
                                <div><FaRegKeyboard /></div>
                                <div className="ml-2">Description : </div>
                            </div>
                            <div className="text-xs w-[40%] ml-4 bg-emerald-50 p-2 rounded-md">{i.description}</div>
                        </div>
                        <hr className="border-[1px]  mt-4 border-gray-400" />
                    </div>
                </div>
            )
            break;

        case "MEDIUM":
            return (
                <div className="w-[80%] px-2 py-4 m-4 rounded-md">

                    <div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <div className="flex items-center font-bold text-lg">
                                    <button>
                                        <a href="/">
                                            <AiOutlineHome />
                                        </a>
                                    </button>
                                    <div className="ml-2">
                                        {i.task_name}
                                    </div>
                                </div>
                                <div className="bg-amber-500 text-white px-2 py-[2px] rounded-md text-xs font-bold ml-4 -translate-y-3">{i.priority}</div>
                            </div>
                            <button className="text-white bg-teal-500 px-2 py-1 rounded-md text-xs font-bold" onClick={() => handleclicked()}>Add Task +</button>
                        </div>
                        <div className="flex items-center text-xs my-1 text-gray-400">
                            <div className="flex items-center">
                                <FaTelegramPlane />
                                <div className="ml-2">Started Time :</div>
                            </div>
                            <div className="ml-2">{i.started_time}</div>
                        </div>
                        <hr className="border-[1px]  mt-4 border-gray-400" />
                        <div className="flex items-center my-2">
                            <div className="flex items-center text-xs text-gray-400">
                                <div><WiSolarEclipse /></div>
                                <div className="ml-2">Status :</div>
                            </div>
                            <div>
                                {buttonStyle(i)}
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center text-xs text-gray-400">
                                <div><FaRegKeyboard /></div>
                                <div className="ml-2">Description : </div>
                            </div>
                            <div className="text-xs w-[40%] ml-4 bg-amber-50 p-2 rounded-md">{i.description}</div>
                        </div>
                        <hr className="border-[1px]  mt-4 border-gray-400" />
                    </div>
                </div>
            )
            break;

        case "HIGH":
            // data: {priority: "HIGH", status: "COMPLETED", task_id: "1", task_name: "Task 1", type: "WORK"}
            return (
                <div className="w-[80%] px-2 py-4 m-4 rounded-md">

                    <div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <div className="flex items-center font-bold text-lg">
                                    <button>
                                        <a href="/">
                                            <AiOutlineHome />
                                        </a>
                                    </button>
                                    <div className="ml-2">
                                        {i.task_name}
                                    </div>
                                </div>
                                <div className="bg-rose-500 text-white px-2 py-[2px] rounded-md text-xs font-bold ml-4 -translate-y-3">{i.priority}</div>
                            </div>
                            <button className="text-white bg-teal-500 px-2 py-1 rounded-md text-xs font-bold" onClick={() => handleclicked()}>Add Task +</button>
                        </div>
                        <div className="flex items-center text-xs my-1 text-gray-400">
                            <div className="flex items-center">
                                <FaTelegramPlane />
                                <div className="ml-2">Started Time :</div>
                            </div>
                            <div className="ml-2">{i.started_time}</div>
                        </div>
                        <hr className="border-[1px]  mt-4 border-gray-400" />
                        <div className="flex items-center my-4">
                            <div className="flex items-center text-xs text-gray-400">
                                <div><WiSolarEclipse /></div>
                                <div className="ml-2">Status :</div>
                            </div>
                            <div>
                                {buttonStyle(i)}
                            </div>
                        </div>

                        <div className="flex items-center my-4">
                            <div className="flex items-center text-xs text-gray-400">
                                <div><FaRegKeyboard /></div>
                                <div className="ml-2">Description : </div>
                            </div>
                            <div className="text-xs w-[40%] ml-4 bg-rose-50 p-2 rounded-md">{i.description}</div>
                        </div>
                        <hr className="border-[1px]  mt-4 border-gray-400" />
                    </div>
                </div>
            )
            break;
    }
}

function CurrentTask({ id }: Props) {
    const [data, setData] = useState<Task>({
        task_name: "",
        type: "",
        started_time: "",
        finished_time: "",
        description: "",
        priority: "LOW",
        status: "COMPLETED",
        task_id: id,
        title: "",
    });

    const childRef = useRef();

    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionButton = (option: string) => {
        setSelectedOption(option);
    };

    const [save, setSave] = useState(false);
    const [showFunction, setShowFunction] = useState<boolean>(false);

    const handleclicked = () => {
        setShowFunction(!showFunction);
    };

    const handleSave = () => {
       setSave(!save);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await request.get(`task/${id}`);
                let result = response.data;
                result.started_time = moment(result.started_time).format('YYYY-MM-DD HH:mm:ss');
                result.finished_time = moment(result.finished_time).format('YYYY-MM-DD HH:mm:ss');
                setData(result);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [id]);

    return (
        <div className="flex justify-center items-center mt-8 p-2 text-gray-600 font-poppins">
            {styleTask(data, handleclicked)}
            {showFunction && <AddTask id={id} showFunction={handleclicked} saveFunction={handleSave}/>}
        </div>
    );
}

export default CurrentTask;