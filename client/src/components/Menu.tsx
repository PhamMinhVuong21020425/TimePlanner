import { FaTasks } from "react-icons/fa";
import { BsCalendar3 } from "react-icons/bs";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { TiWeatherPartlySunny } from "react-icons/ti";
import React, { useState } from "react";
import { Link } from "react-router-dom";

type Props = {
  handleOptionButton: (option: string) => void;
};

export default function ({ handleOptionButton }: Props) {
  const [activeButton, setActiveButton] = useState("ToDoList");

  const handleButtonClick = (option: string) => {
    setActiveButton(option);
    handleOptionButton(option);
  };

  return (
    <div className="m-3 flex items-center text-gray-600 justify-between p-3 font-poppins text-sm rounded-md">
      <button
        className={`flex w-1/6 place-items-center justify-center rounded-md px-4 py-2 ${activeButton === "ToDoList" ? "bg-teal-200" : ""
          }`}
        onClick={() => handleButtonClick("ToDoList")}
      >
        <Link to={'/'}>
          <div className="flex items-center justify-between">
            <FaTasks className="mr-3" />
            <span>Tasks</span>
          </div>
        </Link>
      </button>
      <button
        className={`flex w-1/6 place-items-center text-gray-600 justify-center rounded-md px-4 py-2 ${activeButton === "Weather" ? "bg-teal-200" : ""
          }`}
        onClick={() => handleButtonClick("Weather")}
      >
        <TiWeatherPartlySunny className="mr-3" />
        <span>Weather</span>
      </button>
      <button
        className={`flex w-1/6 place-items-center text-gray-600 justify-center rounded-md px-4 py-2 ${activeButton === "Calendar" ? "bg-teal-200" : ""
          }`}
        onClick={() => handleButtonClick("Calendar")}
      >
        <BsCalendar3 className="mr-3" />
        <span>Calendar</span>
      </button>
      <button
        className={`flex w-1/6 place-items-center text-gray-600 justify-center rounded-md px-4 py-2 ${activeButton === "Report" ? "bg-teal-200" : ""
          }`}
        onClick={() => handleButtonClick("Report")}
      >
        <HiOutlineDocumentReport className="mr-3 text-lg" />
        <span>Reports</span>
      </button>
      <button
        className="w-1/6 rounded-md border-2 bg-emerald-500 -400 px-4 py-2 text-white cursor-pointer mx-2"
        onClick={() => handleButtonClick("AddTask")}
      >
        Add task
      </button>
      {/* <button
        className="w-1/6 rounded-md border-2 bg-orange-500 px-4 py-2 text-white cursor-pointer mx-2"
        onClick={() => handleButtonClick("AddProject")}
      >
        Add project
      </button> */}
    </div>
  );
}
