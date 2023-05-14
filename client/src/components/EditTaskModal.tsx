import { useEffect, useState, ChangeEvent } from "react";
import request from "../utils/request";
import Task from "../types/Tasks";
import { Link, useNavigate } from "react-router-dom";
import moment from 'moment';

type Props = {
    id: string,
    showFunction: Function,
    saveFunction: Function
};

function EditTaskModal({ id, showFunction, saveFunction }: Props) {
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

    const navigate = useNavigate();

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
    }, []);

    const handleDataChange = (
        event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;
        setData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSave = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const res = await request.post(`task/update/${id}`, data);
        console.log(res.data);
        showFunction();    
        saveFunction();
    };

    const handleCancel = () => {
        showFunction();
    };

    const handleDelete = async (event: { preventDefault: () => void; }) => {
        const confirmation: boolean = window.confirm("Are you sure want to delete this task?");
        if (confirmation) {
            const res = await request.delete(`task/delete/${id}`);
            showFunction(); 
            saveFunction();
            // console.log(res.data);
        } else {
            event.preventDefault();
        }
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center font-poppins">
            <div className="bg-white p-4 rounded-md">
                <div className="text-xs text-gray-500">
                    <form onSubmit={handleSave} className="w-full max-w-lg">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-first-name"
                                >
                                    Name the task
                                </label>
                                <input
                                    className="text-xs block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="grid-first-name"
                                    type="text"
                                    name="task_name"
                                    value={data.task_name}
                                    onChange={handleDataChange}
                                    placeholder=""
                                />
                            </div>

                            <div className="w-full md:w-1/3 px-3">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-last-name"
                                >
                                    Type
                                </label>
                                <div className="relative">
                                    <select
                                        className="text-xs appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-last-name"
                                        name="type"
                                        value={data.type}
                                        onChange={handleDataChange}
                                        placeholder=""
                                    >
                                        <option>WORK_OR_STUDY</option>
                                        <option>ENTERTAINMENT_OR_HOBBY</option>
                                        <option>BASIC_NEED</option>
                                        <option>HOUSEWORK</option>
                                        <option>SPORT_OR_WORKOUT</option>
                                        <option>SOCIAL_ACTIVITY</option>
                                        <option>WASTED_TIME</option>
                                        <option>OTHERS</option>
                                    </select>
                                    {/* <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg
                                            className="fill-current h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </div> */}
                                </div>
                            </div>

                            {/* STATUS */}
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label
                                    className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-first-name"
                                >
                                    Status
                                </label>
                                <div className="relative">
                                    <select
                                        className="text-xs appearance-none block w-full bg-gray-100 text-gray-600 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        name="status"
                                        onChange={handleDataChange}
                                        value={data.status}
                                    >
                                        <option >INPROGRESS</option>
                                        <option>STOPPED</option>
                                        <option>COMPLETED</option>

                                    </select>
                                    {/* <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div> */}
                                </div>
                            </div>
                            {/* ----------------------------------------- */}


                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-password"
                                >
                                    Description
                                </label>
                                {/* <input
                                    className="text-xs appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-password"
                                    type="text"
                                    name="description"
                                    value={data.description}
                                    onChange={handleDataChange}
                                    placeholder=""
                                /> */}
                                <textarea className="text-xs w-full rounded-md border-gray-300 bg-gray-100"
                                    id="grid-password"
                                    name="description"
                                    onChange={handleDataChange}
                                    value={data.description}
                                >

                                </textarea>
                                <p className="text-gray-600 text-xs italic">
                                    Make it as long and as crazy as you'd like
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-2">
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-city"
                                >
                                    Start time
                                </label>
                                <input
                                    className="text-xs appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-city"
                                    type="datetime-local"
                                    name="started_time"
                                    value={moment(data.started_time).format('YYYY-MM-DD HH:mm:ss')}
                                    onChange={handleDataChange}
                                />
                            </div>
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-state"
                                >
                                    Priority
                                </label>
                                <div className="relative">
                                    <select
                                        className="text-xs block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-state"
                                        name="priority"
                                        onChange={handleDataChange}
                                        value={data.priority}
                                    >
                                        <option>LOW</option>
                                        <option>MEDIUM</option>
                                        <option>HIGH</option>
                                    </select>
                                    {/* <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg
                                            className="fill-current h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </div> */}
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-zip"
                                >
                                    Finish time
                                </label>
                                <input
                                    className="text-xs appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-zip"
                                    type="datetime-local"
                                    name="finished_time"
                                    value={moment(data.finished_time).format('YYYY-MM-DD HH:mm:ss')}
                                    onChange={handleDataChange}
                                />
                            </div>
                        </div>
                        <div className="flex">
                            <button
                                className="bg-emerald-500 px-2 py-1 rounded-sm text-white text-xs mx-2 my-4 cursor-pointer"
                                type="submit"
                            >
                                SAVE
                            </button>
                            <button
                                className="bg-amber-500 px-2 py-1 rounded-sm text-white text-xs mx-2 my-4 cursor-pointer"
                                onClick={handleCancel}
                            >
                                CANCEL
                            </button>

                            <button
                                className="bg-rose-500 px-2 py-1 rounded-sm text-white text-xs my-4 cursor-pointer ml-auto"
                                onClick={handleDelete}
                            >
                                DELETE
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditTaskModal;