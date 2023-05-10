import ReactECharts from 'echarts-for-react';


const UserReport = () => {
    const option = {
        title: {
            text: 'User Report',
            x: 'center',
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c}%',
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: [
                'Toddler',
                'Preschooler',
                'Grade Schooler',
                'Teen',
                'Young Adult',
                'Adult',
                'Senior',
            ],
        },
        series: [
            {
                name: 'User Report',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [
                    { value: 10, name: 'Toddler' },
                    { value: 20, name: 'Preschooler' },
                    { value: 30, name: 'Grade Schooler' },
                    { value: 40, name: 'Teen' },
                    { value: 50, name: 'Young Adult' },
                    { value: 60, name: 'Adult' },
                    { value: 70, name: 'Senior' },
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0,0,0,.5)',
                    },
                },
            },
        ],
    };

    return (
        <>
            <ReactECharts option={option} style={{ height: 400 }} />
        </>
    );
};

function weakestTopicStyle(name, percent) {
    return (
        <div className="my-4 flex justify-normal items-center">
            <div className="flex justify-center items-center">
                <div className="border-[1.5px] border-red-400 w-[40px] h-[40px] rounded-md flex items-center text-center justify-center font-bold text-xs text-red-500">{`${percent}%`}</div>
            </div>
            <div className="mx-3 w-full">
                <div className="text-xs font-bold text-gray-600">{name}</div>
                <div className="my-2">
                    <div className={`bg-red-300 h-[5px] rounded-md w-[${percent}%]`}></div>
                </div>
            </div>
        </div>
    )
}

function strongestTopicStyle(name, percent) {
    return (
        <div className="my-4 flex justify-normal items-center">
            <div className="flex justify-center items-center">
                <div className="border-[1.5px] border-green-400 w-[40px] h-[40px] rounded-md flex items-center text-center justify-center font-bold text-xs text-green-500">{`${percent}%`}</div>
            </div>
            <div className="mx-3 w-full">
                <div className="text-xs font-bold text-gray-600">{name}</div>
                <div className="my-2">
                    <div className={`bg-green-300 h-[5px] rounded-md w-[${percent}%]`}></div>
                </div>
            </div>
        </div>
    )
}


function WeakestTopic() {
    return (
        <div className="w-1/2 mr-2 rounded-md border-[1.5px] border-gray-200">
            <div className="p-4">
                <div className="text-base text-red-400 underline underline-offset-8">Weakest Topic</div>
                <div>
                    {weakestTopicStyle("Sleeping", 95)}
                </div>

                <div>
                    {weakestTopicStyle("Watching TV", 80)}
                </div>

                <div>
                    {weakestTopicStyle("Eating", 70)}
                </div>

                {/* <div>
                    {weakestTopicStyle("Studying", 60)}
                </div> */}
            </div>
        </div>
    )
}

function StrongestTopic() {
    return (
        <div className="w-1/2 ml-2 rounded-md border-[1.5px] border-gray-200">
            <div className="p-4">
                <div className="text-base text-green-500 underline underline-offset-8">Strongest Topic</div>
                {/* <hr className="my-3 border-2" /> */}
                <div>
                    {strongestTopicStyle("Japanese", 30)}
                </div>

                <div>
                    {strongestTopicStyle("Weaboo", 80)}
                </div>

                <div>
                    {strongestTopicStyle("Combatting", 20)}
                </div>

                <div>
                    {strongestTopicStyle("Studying", 10)}
                </div>
            </div>
        </div>
    )
}

const AdminReport = () => {
    return (
        <div className="m-3 rounded-md shadow-md h-screen">
            <div className="p-4">
                {/* <div className="font-bold text-xl text-gray-700">Reports</div> */}
                {/* <hr className="my-3 border-2" /> */}
                <div className="flex">
                    <WeakestTopic />
                    <StrongestTopic />
                </div>
                <div className='p-6'>
                    <UserReport />
                </div>
            </div>
        </div>
    )
}
export default AdminReport;