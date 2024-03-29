import { useEffect, useState, memo } from "react";
import { Chart as ChartJS } from "chart.js";
import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement
} from "chart.js";
// import { Pie, Doughnut, Bar, Line } from "react-chartjs-2";
import { Colors, ArcElement, Tooltip, Legend } from "chart.js";
//Echarts for react
import ReactECharts from 'echarts-for-react';
// import { useFormState } from "react-hook-form";
import request from "../utils/request";
// import { ClassNames } from '@emotion/react';
import { useQuery } from 'react-query';
import Loading from "./Loading";

interface CountType {
  type: string;
  count: number;
}

const fetchTypeTask = async (): Promise<CountType[]> => {
  const response = await request.get<CountType[]>('task/getTypeTask');
  return response.data;
};

type PriorityCount = {
  priority: string,
  month: number,
  count: number
}

const fetchPriorityTask = async (): Promise<PriorityCount[]> => {
  const response = await request.get<PriorityCount[]>('task/getPriorityTask');
  return response.data;
};

type StatusCount = {
  priority: "HIGH" | "MEDIUM" | "LOW",
  count: number
}

const fetchStatusTask = async (status: string): Promise<StatusCount[]> => {
  const response = await request.get<StatusCount[]>(`task/getStatusTask/${status}`);
  return response.data;
};

ChartJS.register(ArcElement, Tooltip, Legend, Colors, CategoryScale, LinearScale, PointElement, BarElement, LineElement);

const mydata = {
  "lineChartData": {
    // ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"]
    "low": [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
    "medium": [2, 3, 20, 5, 1, 4, 2, 3, 20, 5, 1, 4],
    "high": [3, 10, 13, 15, 22, 30, 3, 10, 13, 15, 22, 30]
  },
  "barChartData": {
    // [WORK_OR_STUDY, ENTERTAINMENT_OR_HOBBY, BASIC_NEED, HOUSEWORK, SPORT_OR_WORKOUT, SOCIAL_ACTIVITY, WASTED_TIME, OTHERS]
    "task": [25, 20, 15, 10, 5, 15, 5, 5],
  },
  "pieChartData": {
    // [LOW, MEDIUM, HIGH]
    "inprogress": [12, 19, 3],
    "stopped": [2, 3, 1],
    "completed": [3, 10, 13]
  },
}


const LineChartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"],
  datasets: [
    {
      label: "LOW",
      data: mydata.lineChartData.low,
      borderColor: "rgba(80, 200, 120, 1)",
      backgroundColor: "rgba(80, 200, 120, 0.5)",
    },
    {
      label: "MEDIUM",
      data: mydata.lineChartData.medium,
      borderColor: "rgba(255, 206, 86, 1)",
      backgroundColor: "rgba(255, 206, 86, 0.5)",
    },
    {
      label: "HIGH",
      data: mydata.lineChartData.high,
      borderColor: "rgba(255, 99, 132, 1)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const LineChartOptions = {
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        display: true,
        color: "gray",
        lineWidth: 0.3,
      },
      ticks: {
        display: true,
        weight: "bold",
        color: "black",
      },
    },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        display: true,
        weight: "bold",
        color: "black",
      },
    },
  },
  elements: {
    line: {
      borderWidth: 1.5,
    },
    point: {
      radius: 0,
    },
  },
  // change font size
  plugins: {
    legend: {
      labels: {
        font: {
          family: "Comic Sans MS",
          size: 10,
          weight: "bold",
        },
      },
    },
  },
};


const BarChartData = {
  labels: ["WORK_OR_STUDY", "ENTERTAINMENT_OR_HOBBY", "BASIC_NEED", "HOUSEWORK", "SPORT_OR_WORKOUT", "SOCIAL_ACTIVITY", "WASTED_TIME", "OTHERS"],
  datasets: [
    {
      data: mydata.barChartData.task,
      backgroundColor: [
        "rgba(128, 0, 0, 0.5)",
        "rgba(128, 64, 0, 0.5)",
        "rgba(128, 0, 64, 0.5)",
        "rgba(128, 64, 64, 0.5)",
        "rgba(128, 0, 128, 0.5)",
        "rgba(128, 64, 128, 0.5)",
        "rgba(128, 128, 0, 0.5)",
        "rgba(128, 128, 64, 0.5)",
      ],
      borderColor: [
        "rgba(128, 0, 0, 1)",
        "rgba(128, 64, 0, 1)",
        "rgba(128, 0, 64, 1)",
        "rgba(128, 64, 64, 1)",
        "rgba(128, 0, 128, 1)",
        "rgba(128, 64, 128, 1)",
        "rgba(128, 128, 0, 1)",
        "rgba(128, 128, 64, 1)",
      ],
    },
  ],
};

const BarChartOptions = {
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        display: false,
        color: "gray",
        lineWidth: 0.3,
      },
      ticks: {
        display: true,
        weight: "bold",
        color: "black",
      },
    },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        display: true,
        weight: "bold",
        color: "black",
      },
    },
  },
  elements: {
    bar: {
      borderWidth: 1.5,
    },
    point: {
      radius: 0,
    },
  },
  // change font size
  plugins: {
    legend: {
      labels: {
        font: {
          family: "Comic Sans MS",
          size: 10,
          weight: "bold",
        },
      },
    },
  },
};

// options for bar chart (echars-for-react)
interface BarChartOptions {
  title: {
    text: string,
  },
  tooltip: {
    trigger: string,
    axisPointer: {
      type: string,
    },
  },
  grid: {
    left: string,
    right: string,
    bottom: string,
    containLabel: boolean,
  },
  xAxis: {
    type: string,
    boundaryGap: number[],
  },
  yAxis: {
    type: string,
    data: string[],
  },
  visualMap: {
    orient: string,
    left: string,
    min: number,
    max: number,
    text: string[],
    dimension: number,
    inRange: {
      color: string[],
    },
  },

  series: {
    name: string,
    type: string,
    data: number[],
  }[],
}

const UserBarChart = () => {
  let myDict: { [key: string]: number } = {
    "WORK_OR_STUDY": 0,
    "ENTERTAINMENT_OR_HOBBY": 0,
    "BASIC_NEED": 0,
    "HOUSEWORK": 0,
    "SPORT_OR_WORKOUT": 0,
    "SOCIAL_ACTIVITY": 0,
    "WASTED_TIME": 0,
    "OTHERS": 0,
  };
  const [count, setCount] = useState<number[]>([]);
  const { data: responseData, isLoading } = useQuery<CountType[], Error>('type', fetchTypeTask);

  useEffect(() => {
    responseData?.forEach((i: CountType) => {
      myDict[i.type] = i.count;
      // console.log(myDict[i.type]);
    })

    let cnt: number[] = [];
    while (cnt.length < 8) {
      cnt.push(myDict["BASIC_NEED"]);
      cnt.push(myDict["ENTERTAINMENT_OR_HOBBY"]);
      cnt.push(myDict["HOUSEWORK"]);
      cnt.push(myDict["OTHERS"]);
      cnt.push(myDict["SOCIAL_ACTIVITY"]);
      cnt.push(myDict["SPORT_OR_WORKOUT"]);
      cnt.push(myDict["WASTED_TIME"]);
      cnt.push(myDict["WORK_OR_STUDY"]);
    }

    setCount(cnt);

  }, [responseData]);

  const option: BarChartOptions = {
    title: {
      text: '',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '10%',
      containLabel: true,
    },
    xAxis: {
      type: "value",
      boundaryGap: [0, 0.01],
    },
    yAxis: {
      type: "category",
      data: ["BASIC_NEED", "ENTERTAINMENT_OR_HOBBY", "HOUSEWORK", "OTHERS", "SOCIAL_ACTIVITY", "SPORT_OR_WORKOUT", "WASTED_TIME", "WORK_OR_STUDY"],
    },
    visualMap: {
      orient: 'horizontal',
      left: 'center',
      min: 0,
      max: 20,
      text: ['High', 'Low'],
      // Map the score column to color
      dimension: 0,
      inRange: {
        color: ['#65B581', '#FFCE34', '#FD665F']
      }
    },
    series: [
      {
        name: "Task",
        type: "bar",
        data: count,
      },
    ],
  };

  return (
      isLoading ? <Loading /> : <ReactECharts option={option} style={{ height: 400 }} />
  );

}



// const LowPieChartData = {
//   labels: ["In Progress", "Completed", "Stopped"],
//   datasets: [
//     {
//       label: "LOW",
//       data: mydata.pieChartData.low,
//       backgroundColor: [
//         "rgba(0, 255, 255, 0.5)",
//         "rgba(0, 255, 0, 0.5)",
//         "rgba(255, 165, 0, 0.5)",
//       ],
//       borderColor: [
//         "rgba(0, 255, 255, 1)",
//         "rgba(0, 255, 0, 1)",
//         "rgba(255, 165, 0, 1)",
//       ],
//       borderWidth: 1,
//     },
//   ]
// };

// const HighPieChartData = {
//   labels: ["In Progress", "Completed", "Stopped"],
//   datasets: [
//     {
//       label: "HIGH",
//       data: mydata.pieChartData.high,
//       backgroundColor: [
//         "rgba(0, 255, 255, 0.5)",
//         "rgba(0, 255, 0, 0.5)",
//         "rgba(255, 165, 0, 0.5)",
//       ],
//       borderColor: [
//         "rgba(0, 255, 255, 1)",
//         "rgba(0, 255, 0, 1)",
//         "rgba(255, 165, 0, 1)",
//       ],
//       borderWidth: 1,
//     },
//   ]
// };

// const MediumChartData = {
//   labels: ["In Progress", "Completed", "Stopped"],
//   datasets: [
//     {
//       label: "MEDIUM",
//       data: mydata.pieChartData.medium,
//       backgroundColor: [
//         "rgba(0, 255, 255, 0.5)",
//         "rgba(0, 255, 0, 0.5)",
//         "rgba(255, 165, 0, 0.5)",
//       ],
//       borderColor: [
//         "rgba(0, 255, 255, 1)",
//         "rgba(0, 255, 0, 1)",
//         "rgba(255, 165, 0, 1)",
//       ],
//       borderWidth: 1,
//     },
//   ]
// };

// const PieChartOptions = {


//   scales: {
//     y: {
//       display: false,
//     },
//     x: {
//       display: false,
//     },
//   },
//   elements: {
//     bar: {
//       borderWidth: 1.5,
//     },
//     point: {
//       radius: 0,
//     },
//   },
//   // change font size
//   plugins: {
//     legend: {
//       labels: {
//         font: {
//           family: "Comic Sans MS",
//           size: 10,
//           weight: "bold",
//         },
//       },
//     },
//   },

//   // scale 0.5
//   layout: {
//     padding: {
//       left: 0,
//       right: 0,
//       top: 0,
//       bottom: 0,
//     },
//   },
// };


// const YearBarChartData = {
//   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
//   datasets: [
//     {
//       // make label disappear
//       label: "2023",
//       data: mydata.barChartData.year.all,
//       backgroundColor: [
//         "rgba(128, 0, 0, 0.5)",
//         "rgba(128, 64, 0, 0.5)",
//         "rgba(128, 0, 64, 0.5)",
//         "rgba(128, 64, 64, 0.5)",
//         "rgba(128, 0, 128, 0.5)",
//         "rgba(128, 64, 128, 0.5)",
//         "rgba(128, 128, 0, 0.5)",
//         "rgba(128, 128, 64, 0.5)",
//         "rgba(128, 128, 128, 0.5)",
//         "rgba(0, 0, 0, 0.5)",
//         "rgba(0, 0, 128, 0.5)",
//         "rgba(0, 128, 0, 0.5)",
//       ],
//       borderColor: [
//         "rgba(128, 0, 0, 1)",
//         "rgba(128, 64, 0, 1)",
//         "rgba(128, 0, 64, 1)",
//         "rgba(128, 64, 64, 1)",
//         "rgba(128, 0, 128, 1)",
//         "rgba(128, 64, 128, 1)",
//         "rgba(128, 128, 0, 1)",
//         "rgba(128, 128, 64, 1)",
//         "rgba(128, 128, 128, 1)",
//         "rgba(0, 0, 0, 1)",
//         "rgba(0, 0, 128, 1)",
//         "rgba(0, 128, 0, 1)",
//       ],
//       borderWidth: 1,
//     }
//   ]
// };


interface PieChartOptions {
  title: {
    text: string;
    x: string;
  };
  tooltip: {
    trigger: string;
    formatter: string;
  };
  legend: {
    orient: string;
    left: string;
    data: string[];
  };
  color: string[];
  series: {
    name: string;
    type: string;
    radius: string;
    center: string[];
    data: { value: number; name: string }[];
    itemStyle: {
      emphasis: {
        shadowBlur: number;
        shadowOffsetX: number;
        shadowColor: string;
      };
    };
  }[];
}

const FirstUserPieChart = () => {
  // Fetch data
  const [data, setData] = useState<number[]>([]);
  const { data: responseData, isLoading } = useQuery<StatusCount[], Error>('statusInprogress', () => fetchStatusTask("INPROGRESS"));
  useEffect(() => {
        const inprogressCount = responseData?.map((i: StatusCount) => {
          return i.count;
        })
    if (inprogressCount) setData(inprogressCount);
  }, [responseData]);

  const option: PieChartOptions = {
    title: {
      text: 'IN PROGRESS',
      x: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} Task',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: [
        'LOW',
        'MEDIUM',
        'HIGH',
      ],
    },
    color: ['#34d399', 'orange', '#FF6666'],
    series: [
      {
        name: 'IN PROGRESS',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [
          { value: data[0], name: 'LOW' },
          { value: data[1], name: 'MEDIUM' },
          { value: data[2], name: 'HIGH' },
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
      isLoading ? <Loading /> : <ReactECharts option={option} />
  );
}

const SecondUserPieChart = () => {
  const [data, setData] = useState<number[]>([]);
  const { data: responseData, isLoading } = useQuery<StatusCount[], Error>('statusStopped', () => fetchStatusTask("STOPPED"));
  useEffect(() => {
    const stoppedCount = responseData?.map((i: StatusCount) => {
      return i.count;
    })
    if (stoppedCount) setData(stoppedCount);
  }, [responseData]);

  const option: PieChartOptions = {
    title: {
      text: 'STOPPED',
      x: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} Task',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: [
        'LOW',
        'MEDIUM',
        'HIGH',
      ],
    },
    color: ['#34d399', 'orange', '#FF6666'],
    series: [
      {
        name: 'STOPPED',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [
          { value: data[0], name: 'LOW' },
          { value: data[1], name: 'MEDIUM' },
          { value: data[2], name: 'HIGH' },
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
    isLoading ? <Loading /> : <ReactECharts option={option} />
  );
}

const ThirdUserPieChart = () => {
  const [data, setData] = useState<number[]>([]);
  const { data: responseData, isLoading } = useQuery<StatusCount[], Error>('statusCompleted', () => fetchStatusTask("COMPLETED"));
  useEffect(() => {
    const completedCount = responseData?.map((i: StatusCount) => {
      return i.count;
    })
    if (completedCount) setData(completedCount);
  }, [responseData]);

  const option: PieChartOptions = {
    title: {
      text: 'COMPLETED',
      x: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} Task',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: [
        'LOW',
        'MEDIUM',
        'HIGH',
      ],
    },
    color: ['#34d399', 'orange', '#FF6666'],
    series: [
      {
        name: 'COMPLETED',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [
          { value: data[0], name: 'LOW' },
          { value: data[1], name: 'MEDIUM' },
          { value: data[2], name: 'HIGH' },
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
      isLoading ? <Loading /> : <ReactECharts option={option} />
  );
}

interface LineChartOptions {
  title: {
    text: string;
  };
  tooltip: {
    trigger: string;
  };
  legend: {
    data: string[];
  };
  grid: {
    left: string;
    right: string;
    bottom: string;
    containLabel: boolean;
  };
  xAxis: {
    type: string;
    boundaryGap: boolean;
    data: string[];
  };
  yAxis: {
    type: string;
  };
  series: {
    name: string,
    type: string,
    stack: string,
    data: number[],
    smooth: boolean,
    color: string,
  }[];
}

type PriorityFormat = {
  low: number[],
  medium: number[],
  high: number[],
}

const UserLineChart = () => {
  // Fetch data low, medium, high task
  const [lineChartData, setLineChartData] = useState<PriorityFormat>({
    low: [],
    medium: [],
    high: [],
  });

  const { data: responseData, isLoading } = useQuery<PriorityCount[], Error>('priority', fetchPriorityTask);

  useEffect(() => {
    let formattedData: PriorityFormat = {
      low: Array(12).fill(0),
      medium: Array(12).fill(0),
      high: Array(12).fill(0),
    }

    responseData?.forEach((row: PriorityCount) => {
      const priority = row.priority;
      const monthIndex = row.month - 1;
      if (priority === "LOW") formattedData.low[monthIndex] = row.count;
      if (priority === "MEDIUM") formattedData.medium[monthIndex] = row.count;
      if (priority === "HIGH") formattedData.high[monthIndex] = row.count;
    });

    setLineChartData(formattedData);
  }, [responseData]);
  // console.log(lineChartData);

  const option: LineChartOptions = {
    title: {
      text: (new Date()).getFullYear().toString(),
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['LOW', 'MEDIUM', 'HIGH'],
    },
    grid: {
      left: '2%',
      right: '3%',
      bottom: '0%',
      containLabel: true,
    },

    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'LOW',
        type: 'line',
        stack: '',
        data: lineChartData.low,
        smooth: false,
        color: '#34d399',
      },
      {
        name: 'MEDIUM',
        type: 'line',
        stack: '',
        data: lineChartData.medium,
        smooth: false,
        color: '#fbbf24',
      },
      {
        name: 'HIGH',
        type: 'line',
        stack: '',
        data: lineChartData.high,
        smooth: false,
        color: '#fb7185',
      },
    ],
  };

  return (
      isLoading ? <Loading /> : <ReactECharts option={option} />
  );
}

function Report() {
  return (
    // <div className="flex items-center justify-center rounded-md m-3">
    //   <div className="w-1/2 h-1/2">
    //     <div>

    //       <div className="mx-auto my-10">
    //         <Line data={LineChartData} options={LineChartOptions} />
    //       </div>
    //     </div>
    //     <div className="mx-auto my-10">
    //       <Bar data={BarChartData} options={BarChartOptions} />
    //     </div>

    //     <div>
    //       <Bar data={YearBarChartData} options={BarChartOptions} />
    //     </div>

    //     <div className="w-1/2 mx-auto my-10">
    //       <div className="flex items-center justify-center">
    //         <Pie data={LowPieChartData} options={PieChartOptions} />
    //         <Pie data={MediumChartData} options={PieChartOptions} />
    //         <Pie data={HighPieChartData} options={PieChartOptions} />
    //       </div>
    //     </div>

    //   </div>
    // </div>
    <div>
      {/* First Chart */}
      <div className="text-gray-600 font-poppins p-4">
        <div className="font-bold">I. Monthly Progress of Low, Medium, and High Tasks</div>
        <div className="text-xs my-2">A line chart shows the progress of low, medium, and high tasks each month. The x-axis represents the months, while the y-axis represents the number of tasks completed. Each line corresponds to a different level of task difficulty, with the low task line representing the easiest tasks, the medium task line representing moderately difficult tasks, and the high task line representing the most challenging tasks. Viewers can quickly identify trends and patterns in the completion of tasks over time.</div>
        <div className="flex justify-center items-center my-4">
          <div className="w-1/2">
            {/* <Line data={LineChartData} options={LineChartOptions} /> */}
            <UserLineChart />
          </div>
        </div>
      </div>
      {/* Second Chart */}
      <div className="text-gray-600 font-poppins p-4">
        <div className="font-bold">II. Bar Chart of Task Distribution by Activity Category</div>
        <div className="text-xs my-2">This bar chart displays the number of tasks in common categories such as work or study, entertainment or hobby, basic needs, housework, sport or workout, social activity, wasted time, and others. Each bar represents an activity category, and the height corresponds to the number of tasks. This chart allows for easy comparison of task distribution across categories and can help identify patterns or trends over time or among different groups.</div>
        <div className="flex justify-center items-center my-4">
          <div className="w-1/2">
            {/* <Bar data={BarChartData} options={BarChartOptions} /> */}
            <UserBarChart />
          </div>
        </div>
      </div>
      {/* Third Chart */}
      <div className="text-gray-600 font-poppins p-4">
        <div className="font-bold">III. Task Status Breakdown: In Progress, Stopped, and Completed</div>
        <div className="text-xs my-2">This pie chart series shows the breakdown of tasks by priority level (low, medium, high) across three categories: in progress, stopped, and completed. Each pie chart represents one of the categories and is divided into three slices, one for each priority level. This visual representation helps identify areas that require additional attention and provides a clear understanding of the overall project progress.</div>
        <div className="flex justify-center items-center my-4">
          <div className="w-1/2">
            {/* <Bar data={BarChartData} options={BarChartOptions} /> */}
            <FirstUserPieChart />
            <SecondUserPieChart />
            <ThirdUserPieChart />
          </div>
        </div>
      </div>

    </div>
  );
}

export default memo(Report);