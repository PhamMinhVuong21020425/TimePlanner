import { useEffect, useRef, useState } from "react";
import Task from "../types/Tasks";
import moment from "moment";

import ToDoList from "../components/ToDoList";
import Calendar from "../components/Calendar";
import Report from "../components/Report";
import AddTask from "../components/AddTask";
import SideBar from "../components/SideBar";
import Menu from "../components/Menu";
import Weather from "../components/Weather";
import request from "../utils/request";
import ChildTask from "./ChildTask";

type Props = {
    id: string,
    save: Boolean
};

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

function styleTask(i: Task, handleclicked: Function) {
    switch (i.priority) {
        case "LOW":
            return (
                <div className="w-[40%] bg-emerald-50 px-2 py-4 m-4 rounded-md">
                    <div className="flex justify-center items-center">
                        <div className="text-xs text-center w-3/5 rounded-md">
                            <div className="bg-emerald-300 px-2 py-1 rounded-md text-emerald-700 text-xs">
                                {i.type.replace(/_/g, " ")}
                            </div>
                        </div>
                    </div>
                    <div className="font-bold my-1 px-2 py-1">{i.task_name}</div>
                    <div className="text-sm px-2 py-1">{i.description}</div>
                    {/* <div>{i.started_time}</div>
                    <div>{i.finished_time}</div> */}
                    <div className="flex justify-between px-2 py-1">
                        {buttonStyle(i)}
                        <div>
                            <button
                                className="text-xs text-teal-700 rounded-sm bg-red-200 -400 px-2 py-1 cursor-pointer mx-2"
                                onClick={() => handleclicked()}
                            >
                                Add task
                            </button>
                        </div>
                    </div>
                </div>
            )
            break;

        case "MEDIUM":
            return (
                <div className="w-[40%] bg-amber-50 px-2 py-4 m-4 rounded-md">
                    <div className="flex justify-center items-center">
                        <div className="text-xs text-center w-3/5 rounded-md">
                            <div className="bg-amber-300 px-2 py-1 rounded-sm text-amber-700 text-xs">
                                {i.type.replace(/_/g, " ")}
                            </div>
                        </div>
                    </div>
                    <div className="font-bold my-1 px-2 py-1">{i.task_name}</div>
                    <div className="text-sm px-2 py-1">{i.description}</div>
                    {/* <div>{i.started_time}</div>
                    <div>{i.finished_time}</div> */}
                    <div className="flex justify-between px-2 py-1">
                        {buttonStyle(i)}
                        <div>
                            <button
                                className="text-xs text-teal-700 rounded-sm bg-red-200 -400 px-2 py-1 cursor-pointer mx-2"
                                onClick={() => handleclicked()}
                            >
                                Add task
                            </button>
                        </div>
                    </div>
                </div>
            )
            break;

        case "HIGH":
            return (
                <div className="w-[40%] bg-rose-50 px-2 py-4 m-4 rounded-md">
                    <div className="flex justify-center items-center">
                        <div className="text-xs text-center w-3/5 rounded-md">
                            <div className="bg-rose-300 px-2 py-1 rounded-md text-rose-700 text-xs">
                                {i.type.replace(/_/g, " ")}
                            </div>
                        </div>
                    </div>
                    <div className="font-bold my-1 px-2 py-1">{i.task_name}</div>
                    <div className="text-sm px-2 py-1">{i.description}</div>
                    {/* <div>{i.started_time}</div>
                    <div>{i.finished_time}</div> */}
                    <div className="flex justify-between px-2 py-1">
                        {buttonStyle(i)}
                        <div>
                            <button
                                className="text-xs text-teal-700 rounded-md bg-red-200 -400 px-2 py-1 cursor-pointer mx-2"
                                onClick={() => handleclicked()}
                            >
                                Add task
                            </button>
                        </div>
                    </div>
                </div>
            )
            break;
    }
}

function CurrentTask({ id, save }: Props) {
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


    const [showFunction, setShowFunction] = useState<boolean>(false);

    const handleclicked = () => {
        setShowFunction(!showFunction);
    };

    const handleSave = () => {
       save = !save;
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