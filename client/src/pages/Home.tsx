import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ToDoList from "../components/ToDoList";
import Calendar from "../components/Calendar";
import Report from "../components/Report";
import AddTask from "../components/AddTask";
import SideBar from "../components/SideBar";
import Menu from "../components/Menu";
import Weather from "../components/Weather";
import request from "../utils/request";


const Home = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showAddTask, setShowAddTask] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isLogin = async () => {
      try {
        const response = await request.get('/');
        if (response.data.message === 'NotLogin') {
          navigate('/login');
        }
      } catch (error) {
        console.log(error);
      }
    };
    isLogin();
  })

  const handleOptionButton = (option: string) => {
    setSelectedOption(option);
    if (option === "AddTask") setShowAddTask(true);
  };

  const handleSave = () => {
    //do nothing
  }

  const handleShowAddTask = () => {
    setShowAddTask(!showAddTask);
  };

  const renderContent = () => {
    // Add tasks, add projects
    switch (selectedOption) {
      case "ToDoList":
        return <ToDoList />;
        break;
      case "Calendar":
        return <Calendar />;
        break;
      case "Report":
        return <Report />;
      case "AddTask":
        return (
          <div>
            {showAddTask && <ToDoList />}
            {showAddTask && (
              <AddTask showFunction={handleShowAddTask} id={null} saveFunction={handleSave}/>
            )}
            {!showAddTask && <ToDoList />}
          </div>
        );
        break;
      case "Weather":
        return <Weather />;
        break;
      default:
        return <ToDoList />;
        break;
    }
  };

  return (
    <div className="flex">
      <div className="w-[30%]">
        <SideBar />
      </div>
      <div className="w-[70%]">
        <Menu handleOptionButton={handleOptionButton} showButtonAddTask={true} />
        {renderContent()}
      </div>
    </div>
  );
};

export default Home;
