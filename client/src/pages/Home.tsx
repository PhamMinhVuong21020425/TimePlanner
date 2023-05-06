import { useState } from "react";

import ToDoList from "../components/ToDoList";
import Calendar from "../components/Calendar";
import Report from "../components/Report";
import AddTask from "../components/AddTask";
import SideBar from "../components/SideBar";
import Menu from "../components/Menu";

const Home = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [show, setShow] = useState(false);

  const handleOptionButton = (option: string) => {
    setSelectedOption(option);
    if (option === "AddTask") setShow(true);
  };

  const handleShow = () => {
    setShow(!show);
  };

  const renderContent = () => {
    // Add tasks, add projects
    switch (selectedOption) {
      case "ToDoList":
        return <ToDoList />;
      case "Calendar":
        return <Calendar />;
      case "Report":
        return <Report />;
      case "AddTask":
        return (
          <div>
            {show && <ToDoList />}
            {show && (
              <AddTask option={selectedOption} showFunction={handleShow} />
            )}
            {!show && <ToDoList />}
          </div>
        );
      default:
        return <ToDoList />;
    }
  };

  return (
    <div className="flex">
      <div className="w-[30%]">
        <SideBar />
      </div>
      <div className="w-[70%]">
        <Menu handleOptionButton={handleOptionButton} />
        {renderContent()}
      </div>
    </div>
  );
};

export default Home;
