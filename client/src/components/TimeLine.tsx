import Task from "../types/Tasks";

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

type Props = {
  todo: Task[];
};

function TimeLine({ todo }: Props) {
  return (
    <div>
      <div className="flex p-4 rounded-md justify-between">
        <div className="text-sm text-center font-bold">My To Do's List</div>
        <div className="text-sm text-center text-gray-400">
          Today {formatDate(new Date())}
        </div>
      </div>
      {todo.map((i) => (
        <div>
          <div className="flex p-4 rounded-md">
            <div className="w-[30%]">
              <div className="text-sm text-center">
                {i.time.getHours() + ":" + i.time.getMinutes() + " AM"}
              </div>
              <hr />
              <div className="h-full flex items-center justify-center">
                {i.priority === "LOW" ? (
                  <div className="bg-emerald-300 px-2 py-1 rounded-md text-emerald-700 text-xs">
                    {i.projectName}
                  </div>
                ) : i.priority === "MEDIUM" ? (
                  <div className="bg-yellow-300 px-2 py-1 rounded-md text-yellow-700 text-xs">
                    {i.projectName}
                  </div>
                ) : i.priority === "HIGH" ? (
                  <div className="bg-rose-300 px-2 py-1 rounded-md text-rose-700 text-xs hover:bg-rose-700 hover:text-rose-300">
                    {i.projectName}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="w-[70%] bg-gray-100 rounded-md p-4 ml-4">
              <div className="font-bold text-base">{i.title}</div>
              <div className="text-gray-600 text-xs">{i.description}</div>
              {i.status === "STOPPED" ? (
                <button className="text-xs text-rose-700 bg-rose-200 px-2 py-1 rounded-md mt-5">
                  Stopped
                </button>
              ) : i.status === "INPROGRESS" ? (
                <button className="text-xs text-cyan-700 bg-cyan-200 px-2 py-1 rounded-md mt-5">
                  In Progress
                </button>
              ) : i.status === "COMPLETED" ? (
                <button className="text-xs text-green-700 bg-green-200 px-2 py-1 rounded-md mt-5">
                  Completed
                </button>
              ) : null}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <hr className="w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default TimeLine;
