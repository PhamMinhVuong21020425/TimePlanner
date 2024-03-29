import { MdOutlineNotificationsActive } from "react-icons/md";
import TimeLine from "./TimeLine";
import { useEffect, useState } from "react";
import UserDropDown from "./UserDropDown";
import Notification from "./Notification";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentUserAction } from "../redux/actions/userAction";
import { RootState } from "../redux/reducers/rootReducer";
import User from "../types/Users";

// const todo: Task[] = [
//   {
//     id: 10,
//     started_time: new Date("1995-12-17T03:20:00"),
//     finished_time: new Date("1995-12-17T03:20:00"),
//     task_name: "Project X",
//     title: "Brainstorming",
//     description:
//       "An existing Date object. This effectively makes a copy of the existing Date object with the same date and time. An existing Date object. This effectively makes a copy of the existing Date object with the same date and time. An existing Date object. This effectively makes a copy of the existing Date object with the same date and time. An existing Date object. This effectively makes a copy of the existing Date object with the same date and time.",
//     priority: "HIGH",
//     status: "INPROGRESS",
//   },
//   {
//     id: 11,
//     started_time: new Date("1995-01-17T03:24:00"),
//     finished_time: new Date("1995-01-17T03:24:00"),
//     task_name: "Project Y",
//     title: "Brainstorming",
//     description:
//       "When no parameters are provided, the newly-created Date object represents the current date and time as of the time of instantiation.",
//     priority: "LOW",
//     status: "COMPLETED",
//   },
//   {
//     id: 12,
//     started_time: new Date("1995-07-31T03:25:00"),
//     finished_time: new Date("1995-07-31T03:25:00"),
//     task_name: "Project Z",
//     title: "Brainstorming",
//     description: "Utilities for controlling the font size of an element.",
//     priority: "MEDIUM",
//     status: "STOPPED",
//   },
//   {
//     id: 13,
//     started_time: new Date("1995-07-31T03:25:00"),
//     finished_time: new Date("1995-07-31T03:25:00"),
//     task_name: "Project W",
//     title: "Brainstorming",
//     description: "Utilities for controlling the font size of an element.",
//     priority: "HIGH",
//     status: "INPROGRESS",
//   },
//   {
//     id: 14,
//     started_time: new Date("1995-07-31T03:25:00"),
//     finished_time: new Date("1995-07-31T03:25:00"),
//     task_name: "Project Z",
//     title: "Brainstorming",
//     description: "Utilities for controlling the font size of an element.",
//     priority: "LOW",
//     status: "COMPLETED",
//   },
// ];

function SideBar() {
  const currentUser: User = useSelector((state: RootState) => state.userState.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    // request.get<Task[]>('task/today')
    //   .then(response => {
    //     setTodo(response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching data:', error);
    //   });

    // request.get('user')
    //   .then(response => {
    //     setUserInfo(response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching data:', error);
    //   });
    dispatch(getCurrentUserAction());
  }, []);


  return (
    <div className="rounded-md m-3 font-poppins">
      <div className="flex items-center justify-between my-3 px-4 mx-2">
        <div className="">
          <UserDropDown firstCharacter={currentUser.name.slice(0, 1)} />
        </div>
        <div className="w-[50%] pl-4">
          <div className="text-sm mb-1 text-gray-600">{currentUser.name}</div>
          <div className="text-xs text-gray-500">{currentUser.email}</div>
        </div>
        <div className="w-[25%] flex items-center text-gray-600 justify-center text-xl">
          <Notification />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <hr className="w-[90%]"></hr>
      </div>

      <div className="p-4">
        <TimeLine />
      </div>
    </div>
  );
}

export default SideBar;
