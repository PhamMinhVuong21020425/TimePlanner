interface Task {
    time: Date;
    projectName: string;
    title: string;
    description: string;
    priority: 'LOW' | 'MEDIUM' | 'HIGH';
    status: 'COMPLETED' | 'INPROGRESS' | 'STOPPED';
}

function taskStyle(i: Task) {
    switch (i.priority) {
        case 'LOW':
            return (
                <div className="border-2 border-emerald-300 rounded-md p-4">
                    <div className="text-xs text-center w-1/2 rounded-md">
                        <div className="bg-emerald-300 px-2 py-1 rounded-md text-emerald-700 text-xs -translate-y-6">
                            {i.projectName}
                        </div>
                    </div>
                    <div className="font-bold text-base">{i.title}</div>
                    <div className="text-gray-600 text-xs">{i.description}</div>
                    {buttonStyle(i)}
                </div>
            );
            break;
        case 'MEDIUM':
            return (
                <div className="border-2 border-amber-300 rounded-md p-4">
                    <div className="text-xs text-center w-1/2 rounded-md">
                        <div className="bg-amber-300 px-2 py-1 rounded-md text-amber-700 text-xs -translate-y-6">
                            {i.projectName}
                        </div>
                    </div>
                    <div className="font-bold text-base">{i.title}</div>
                    <div className="text-gray-600 text-xs">{i.description}</div>
                    {buttonStyle(i)}
                </div>
            );
            break;

        case 'HIGH':
            return (
                <div className="border-2 border-rose-300 rounded-md p-4">
                    <div className="text-xs text-center w-1/2 rounded-md">
                        <div className="bg-rose-300 px-2 py-1 rounded-md text-rose-700 text-xs -translate-y-6 hover:bg-rose-700 hover:text-rose-300">
                            {i.projectName}
                        </div>
                    </div>
                    <div className="font-bold text-base">{i.title}</div>
                    <div className="text-gray-600 text-xs">{i.description}</div>
                    {buttonStyle(i)}
                </div>
            );
            break;
        default:
            return null;
            break;
    }
}

function buttonStyle(i: Task) {
    return (
        <div>
            {i.status === 'STOPPED' ? (
                <button className="text-xs text-rose-700 bg-rose-200 px-2 py-1 rounded-md mt-5">
                    Stopped
                </button>
            ) : i.status === 'INPROGRESS' ? (
                <button className="text-xs text-cyan-700 bg-cyan-200 px-2 py-1 rounded-md mt-5">
                    In Progress
                </button>
            ) : i.status === 'COMPLETED' ? (
                <button className="text-xs text-green-700 bg-green-200 px-2 py-1 rounded-md mt-5">
                    Completed
                </button>
            ) : null}
        </div>
    );
}

function ToDoList() {
    const todo: Task[] = [
        {
            time: new Date('1995-12-17T03:20:00'),
            projectName: 'Project X',
            title: 'Brainstorming',
            description:
                'An existing Date object. This effectively makes a copy of the existing Date object with the same date and time.',
            priority: 'HIGH',
            status: 'INPROGRESS',
        },
        {
            time: new Date('1995-01-17T03:24:00'),
            projectName: 'Project Y',
            title: 'Brainstorming',
            description:
                'When no parameters are provided, the newly-created Date object represents the current date and time as of the time of instantiation.',
            priority: 'LOW',
            status: 'COMPLETED',
        },
        {
            time: new Date('1995-07-31T03:25:00'),
            projectName: 'Project Z',
            title: 'Brainstorming',
            description: 'Utilities for controlling the font size of an element.',
            priority: 'LOW',
            status: 'STOPPED',
        },
        {
            time: new Date('1995-07-31T03:25:00'),
            projectName: 'Project W',
            title: 'Brainstorming',
            description: 'Utilities for controlling the font size of an element.',
            priority: 'MEDIUM',
            status: 'INPROGRESS',
        },
        {
            time: new Date('1995-07-31T03:25:00'),
            projectName: 'Project W',
            title: 'Brainstorming',
            description: 'Utilities for controlling the font size of an element.',
            priority: 'LOW',
            status: 'INPROGRESS',
        },
        {
            time: new Date('1995-07-31T03:25:00'),
            projectName: 'Project W',
            title: 'Brainstorming',
            description: 'Utilities for controlling the font size of an element.',
            priority: 'MEDIUM',
            status: 'STOPPED',
        },
        {
            time: new Date('1995-07-31T03:25:00'),
            projectName: 'Project Z',
            title: 'Brainstorming',
            description: 'Utilities for controlling the font size of an element.',
            priority: 'MEDIUM',
            status: 'COMPLETED',
        },
    ];
    return (
        <div className="font-poppins">
            <div className="flex justify-between">
                <div className="w-1/3 rounded-md mx-2 p-2 shadow-md">
                    <div className="flex items-center px-4">
                        <div className="bg-cyan-500 w-[6px] h-[6px] rounded-md mr-4"></div>
                        <div className="font-bold text-sm">In Progress</div>
                    </div>
                    <hr className="border-2 border-cyan-400 rounded-md my-2 mx-4" />
                    <div>
                        {todo.map((i) => (
                            <div className="m-4">
                                {i.status === 'INPROGRESS' ? <div>{taskStyle(i)}</div> : null}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-1/3 rounded-md mx-2 p-2 shadow-md">
                    <div className="flex items-center px-4">
                        <div className="bg-rose-500 w-[6px] h-[6px] rounded-md mr-4"></div>
                        <div className="font-bold text-sm">Stopped</div>
                    </div>
                    <hr className="border-2 border-rose-400 rounded-md my-2 mx-4" />
                    <div>
                        {todo.map((i) => (
                            <div className="m-4">
                                {i.status === 'STOPPED' ? <div>{taskStyle(i)}</div> : null}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-1/3 rounded-md mx-2 p-2 shadow-md">
                    <div className="flex items-center px-4">
                        <div className="bg-green-500 w-[6px] h-[6px] rounded-md mr-4"></div>
                        <div className="font-bold text-sm">Completed</div>
                    </div>
                    <hr className="border-2 border-green-400 rounded-md my-2 mx-4" />
                    <div>
                        {todo.map((i) => (
                            <div className="m-4">
                                {i.status === 'COMPLETED' ? <div>{taskStyle(i)}</div> : null}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ToDoList;
