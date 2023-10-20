import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../App.css"
import "../styles/Calendar.css"
import Task from "../types/Tasks";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasksAction } from "../redux/actions/taskAction";
import { RootState } from "../redux/reducers/rootReducer";

const locales = {
    //"en-US": require("date-fns/locale/en-US"),
    "vi": require("date-fns/locale/vi"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

// interface Task {
//     title: string;
//     start: Date;
//     end: Date;
//     allDay?: boolean;
// }

// const Tasks: Task[] = [
//     {
//         title: "Big Meeting",
//         allDay: true,
//         start: new Date(2023, 4, 11),
//         end: new Date(2023, 4, 13),
//     },
//     {
//         title: "Conversation",
//         start: new Date(2023, 6, 7),
//         end: new Date(2023, 6, 10),
//     },
//     {
//         title: "Playing",
//         start: new Date(2023, 6, 20),
//         end: new Date(2023, 6, 23),
//     },
// ];

function WeekCalendar() {
    // const [newTask, setNewTask] = useState<Task>({
    //     title: "",
    //     start: new Date(),
    //     end: new Date(),
    // });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTasksAction());
    }, []);

    const allTasks: Task[] = useSelector((state: RootState) => state.taskState.tasks);
    
    // useEffect(() => {
    //     request.get<Task[]>('task')
    //         .then(response => {
    //             setAllTasks(response.data);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching data:', error);
    //         });
    // }, []);


    // function handleAddTask() {
    //     for (let i = 0; i < allTasks.length; i++) {
    //         const d1 = new Date(allTasks[i].start);
    //         const d2 = new Date(newTask.start);
    //         const d3 = new Date(allTasks[i].end);
    //         const d4 = new Date(newTask.end);

    //         if (
    //             (d1 <= d2 && d2 <= d3) ||
    //             (d1 <= d4 && d4 <= d3)
    //         ) {
    //             alert("Clash, collision");
    //             break;
    //         }
    //     }
    //     setAllTasks([...allTasks, newTask]);
    // }

    return (
        <div className="App">
            {/* <h2>Add New Task</h2>
            <div>
                <input
                    type="text"
                    placeholder="Add Title"
                    style={{ width: "20%", marginRight: "10px" }}
                    value={newTask.title}
                    onChange={(e) =>
                        setNewTask({ ...newTask, title: e.target.value })
                    }
                />
                <DatePicker
                    placeholderText="Start Date"
                    selected={newTask.start}
                    className="my-datepicker"
                    onChange={(start: Date | null) =>
                        setNewTask({
                            ...newTask,
                            start: start ? start : new Date(),
                        })
                    }
                />
                <DatePicker
                    placeholderText="End Date"
                    selected={newTask.end}
                    className="my-datepicker"
                    onChange={(end: Date | null) =>
                        setNewTask({
                            ...newTask,
                            end: end ? end : new Date(),
                        })
                    }
                />
                <button style={{ marginTop: "20px", color: "lime" }} onClick={handleAddTask}>
                    Add Task
                </button>
            </div> */}
            <Calendar
                localizer={localizer}
                events={allTasks}
                titleAccessor={(event) => { return event.taskName }}
                startAccessor={(event) => { return new Date(event.startTime) }}
                endAccessor={(event) => { return new Date(event.finishTime) }}
                style={{ height: 500, margin: "50px", color: "gray", backgroundColor: "white", fontFamily: "sans-serif", fontSize: "13px" }}
                className="my-calendar"
            />
        </div>
    );
}

export default WeekCalendar;