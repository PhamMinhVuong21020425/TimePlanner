import { useState, useEffect, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import request from "../utils/request";
import useModal from "../utils/useModal";
import Loading from "../components/Loading";
import Weather from "../components/Weather";
const ToDoList = lazy(() => import("../components/ToDoList"));
const SideBar = lazy(() => import("../components/SideBar"));
const Menu = lazy(() => import("../components/Menu"));
const AddTaskModal = lazy(() => import("../components/AddTaskModal"));
const Calendar = lazy(() => import("../components/Calendar"));
const Report = lazy(() => import('../components/Report'));

const Home = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isRerender, setIsRerender] = useState(false);
  const { isShowing, toggle } = useModal();
  const navigate = useNavigate();

  useEffect(() => {
    const isLogin = async () => {
      try {
        const response = await request.get('check-login');
        if (response.data.message === 'NotLogin') {
          navigate('/client/login');
        }
      } catch (error) {
        console.log(error);
      }
    };
    isLogin();
  }, [navigate, selectedOption])

  const handleOptionButton = (option: string) => {
    if (option === "AddTask") {
      toggle();
      setIsRerender(!isRerender);
    } else {
      setSelectedOption(option);
    }
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
      case "Weather":
        return <Weather />;
      default:
        return <ToDoList />;
    }
  };

  return (
    <Suspense fallback={<Loading />}>
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
    </Suspense>
  );
};

export default Home;
