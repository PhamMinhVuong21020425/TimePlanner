import { useState } from "react";
import { useParams } from "react-router-dom";

import Calendar from "../components/Calendar";
import Report from "../components/Report";
import SideBar from "../components/SideBar";
import Weather from "../components/Weather";
import CurrentTask from "../components/CurrentTask";
import ChildTask from "../components/ChildTask";
import Menu from "../components/Menu";

const Task = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showCurrentTask, setShowCurrentTask] = useState(true);
  const { task_id } = useParams();

  const handleOptionButton = (option: string) => {
    setSelectedOption(option);
    if (option === "Calendar" || option === "Weather" || option === "Report") setShowCurrentTask(false);
    else { setShowCurrentTask(true); }
  };

  // const handleShowAddTask = () => {
  //   setShowAddTask(!showAddTask);
  // };

  const renderCurrentTask = () => {
    if (task_id) {
      return showCurrentTask && <CurrentTask id={task_id} />
    }
  }

  const renderContent = () => {
    // Add tasks, add projects
    switch (selectedOption) {
      case "ToDoList":
        if (task_id)
          return <ChildTask id={task_id} />;
        break;
      case "Calendar":
        return <Calendar />;
        break;
      case "Report":
        return <Report />;
      case "Weather":
        return <Weather />;
        break;
      default:
        if (task_id)
          return <ChildTask id={task_id} />;
        break;
    }
  };

  return (
    <div className="flex">
      <div className="w-[30%]">
        <SideBar />
      </div>
      <div className="w-[70%]">
        <Menu handleOptionButton={handleOptionButton} showButtonAddTask={false} />
        {renderCurrentTask()}
        {renderContent()}
      </div>
    </div>
  );
};

export default Task;
