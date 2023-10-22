import { FiEdit } from "react-icons/fi";
import Task from "../types/Tasks";
import { useEffect, useState } from "react";
import EditTaskModal from "./EditTaskModal";
import { useDispatch, useSelector } from "react-redux";
import { getTasksTodayAction } from "../redux/actions/taskAction";
import { RootState } from "../redux/reducers/rootReducer";
import moment from "moment";

function padTo2Digits(num: number) {
  return num.toString().padStart(2, "0");
}
function formatDate(date: Date) {
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join("/");
}

function styleButton(i: Task) {
  switch (i.status) {
    case "STOPPED":
      // TODO
      return (

        <button className="text-xs font-bold text-rose-600 bg-rose-200 px-2 py-1 rounded-md">
          Stopped
        </button>

      )
      break;
    case "INPROGRESS":
      // TODO
      return (

        <button className="text-xs font-bold text-cyan-600 bg-cyan-200 px-2 py-1 rounded-md">
          In Progress
        </button>

      )
      break;
    case "COMPLETED":
      // TODO
      return (
        <button className="text-xs font-bold text-green-600 bg-green-200 px-2 py-1 rounded-md">
          Completed
        </button>
      )
      break;
  }
}

function styleTask(i: Task, handleClicked: (id: string) => void) {
  switch (i.priority) {
    case "LOW":
      // TODO
      return (
        <div className="bg-emerald-50 rounded-md p-4 ml-4">
          <div className="font-bold text-base text-gray-600 -translate-y-2 break-words">{i.taskName}</div>
          <div className="text-gray-600 text-xs break-words">{i.description}</div>
          <div className="flex mt-5 justify-between items-center">
            {styleButton(i)}
            <button className="px-2 py-1 text-emerald-500" onClick={() => handleClicked(i.task_id)}>
              <FiEdit />
            </button>
          </div>
        </div>
      )
      break;
    case "MEDIUM":
      // TODO
      return (
        <div className="bg-amber-50 rounded-md p-4 ml-4">
          <div className="font-bold text-base text-gray-600 -translate-y-2 break-words">{i.taskName}</div>
          <div className="text-gray-600 text-xs break-words">{i.description}</div>
          <div className="flex mt-5 justify-between items-center">
            {styleButton(i)}
            <button className="px-2 py-1 text-amber-500" onClick={() => handleClicked(i.task_id)} >
              <FiEdit />
            </button>
          </div>
        </div>
      )
      break;
    case "HIGH":
      // TODO
      return (
        <div className="bg-rose-50 rounded-md p-4 ml-4">
          <div className="font-bold text-base text-gray-600 -translate-y-2 break-words">{i.taskName}</div>
          <div className="text-gray-600 text-xs break-words">{i.description}</div>
          <div className="flex mt-5 justify-between items-center">
            {styleButton(i)}
            <button className="px-2 py-1 text-rose-500" onClick={() => handleClicked(i.task_id)} >
              <FiEdit />
            </button>
          </div>
        </div>
      )
      break;
  }
}

function TimeLine() {
  const [currentId, setCurrentId] = useState("0");
  const [showEditTask, setShowEditTask] = useState(false);
  const dispatch = useDispatch();
  const todo: Task[] = useSelector((state: RootState) => state.taskState.tasksToday);

  useEffect(() => {
    // request.get<Task[]>('task/today')
    //   .then(response => {
    //     setTodo(response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching data:', error);
    //   });

    dispatch(getTasksTodayAction());

  }, [dispatch]);

  

  function handleClicked(id: string) {
    setCurrentId(id);
    setShowEditTask(true);
    // console.log(currentId);
  }

  const handleCancel = () => {
    setShowEditTask(false);
  };

  return (
    <div>
      <div>
        <div className="flex p-4 rounded-md justify-between">
          <div className="text-sm text-center font-bold text-gray-600">To Do's List</div>
          <div className="text-xs text-center text-gray-400">
            Today {formatDate(new Date())}
          </div>
        </div>
        {todo?.map((i) => (
          <div>
            <div className="flex p-4 rounded-md">
              <div className="w-[30%]">
                <div className="text-sm text-center text-gray-600">
                  {padTo2Digits(new Date(moment(i.startTime).format('YYYY-MM-DD HH:mm:ss')).getHours()) + ":" + padTo2Digits(new Date(moment(i.startTime).format('YYYY-MM-DD HH:mm:ss')).getMinutes())}
                </div>
                <hr />
                {/* <div className="h-full flex items-center justify-center">
                {i.priority === "LOW" ? (
                  <div className="bg-emerald-300 px-2 py-1 rounded-md text-emerald-700 text-xs">
                    {i.task_name}
                  </div>
                ) : i.priority === "MEDIUM" ? (
                  <div className="bg-yellow-300 px-2 py-1 rounded-md text-yellow-700 text-xs">
                    {i.task_name}
                  </div>
                ) : i.priority === "HIGH" ? (
                  <div className="bg-rose-300 px-2 py-1 rounded-md text-rose-700 text-xs">
                    {i.task_name}
                  </div>
                ) : null}
              </div> */}
              </div>
              <div className="w-[70%]">
                {styleTask(i, handleClicked)}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <hr className="w-full" />
            </div>
          </div>
        ))}
      </div>
      <div>{showEditTask && <EditTaskModal id={currentId} showFunction={handleCancel} />}</div>
    </div>
  );
}

export default TimeLine;
