import { IoMdNotificationsOutline } from "react-icons/io";
import TimeLine from "./TimeLine";
import Task from "../types/Tasks";

const todo: Task[] = [
  {
    time: new Date("1995-12-17T03:20:00"),
    projectName: "Project X",
    title: "Brainstorming",
    description:
      "An existing Date object. This effectively makes a copy of the existing Date object with the same date and time.",
    priority: "HIGH",
    status: "INPROGRESS",
  },
  {
    time: new Date("1995-01-17T03:24:00"),
    projectName: "Project Y",
    title: "Brainstorming",
    description:
      "When no parameters are provided, the newly-created Date object represents the current date and time as of the time of instantiation.",
    priority: "LOW",
    status: "COMPLETED",
  },
  {
    time: new Date("1995-07-31T03:25:00"),
    projectName: "Project Z",
    title: "Brainstorming",
    description: "Utilities for controlling the font size of an element.",
    priority: "MEDIUM",
    status: "STOPPED",
  },
  {
    time: new Date("1995-07-31T03:25:00"),
    projectName: "Project W",
    title: "Brainstorming",
    description: "Utilities for controlling the font size of an element.",
    priority: "HIGH",
    status: "INPROGRESS",
  },
  {
    time: new Date("1995-07-31T03:25:00"),
    projectName: "Project Z",
    title: "Brainstorming",
    description: "Utilities for controlling the font size of an element.",
    priority: "LOW",
    status: "COMPLETED",
  },
];

function SideBar() {
  // Query data
  // TODO:
  // const todo = ...

  return (
    <div className="border-2 shadow-md rounded-md m-3 font-poppins">
      <div className="flex items-center justify-between my-3 px-4">
        <div className="flex items-center justify-center bg-blue-400 rounded-full w-[60px] h-[60px]">
          <span className="text-white font-bold text-xl">A</span>
        </div>
        <div className="w-[50%] pl-4">
          <div className="text-base mb-1">Nguyen Quang Anh</div>
          <div className="text-xs text-gray-500">Hanoi, Viet Nam</div>
        </div>
        <div className="w-[25%] flex items-center justify-center text-xl">
          <IoMdNotificationsOutline />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <hr className="w-[90%]"></hr>
      </div>

      <div className="p-4">
        <TimeLine todo={todo} />
      </div>
    </div>
  );
}

export default SideBar;
