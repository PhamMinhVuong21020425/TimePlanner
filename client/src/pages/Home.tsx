import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useModal from "../utils/useModal";

import ToDoList from "../components/ToDoList";
import Calendar from "../components/Calendar";
import Report from "../components/Report";
import AddTaskModal from "../components/AddTaskModal";
import SideBar from "../components/SideBar";
import Menu from "../components/Menu";
import Weather from "../components/Weather";

const Home = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isRerender, setIsRerender] = useState(false);
  const { isShowing, toggle } = useModal();
  const navigate = useNavigate();

  useEffect(() => {
    const isLogin = async () => {
      try {
        const response = await axios.get('https://time-planner-server-deploy.vercel.app/', { withCredentials: true });
        if (response.data.message === 'NotLogin') {
          navigate('/login');
        }
      } catch (error) {
        console.log(error);
      }
    };
    isLogin();
  }, [selectedOption])

  const handleOptionButton = (option: string) => {
    if (option === "AddTask") {
      toggle();
      setIsRerender(!isRerender);
    } else {
      setSelectedOption(option);
    }
  };

  const handleSave = () => {
    //do nothing
  }

  const renderContent = () => {
    // Add tasks, add projects
    switch (selectedOption) {
      case "ToDoList":
        return <ToDoList />;
      case "Calendar":
        return <Calendar />;
      case "Report":
        return <Report />;
      case "Weather":
        return <Weather />;
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
        <Menu handleOptionButton={handleOptionButton} showButtonAddTask={true} />
        {renderContent()}
        <AddTaskModal id={null} isShowing={isShowing} hide={toggle} />
      </div>
    </div>
  );
};

export default Home;
