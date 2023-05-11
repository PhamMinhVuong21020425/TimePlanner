import { useEffect } from "react";
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
} from "chart.js";
import { Pie, Doughnut, Bar, Line } from "react-chartjs-2";
import { Colors } from "chart.js";
// import { ClassNames } from '@emotion/react';

ChartJS.register(ArcElement, Tooltip, Legend, Colors, CategoryScale, LinearScale, PointElement, BarElement, LineElement,); // Global Register


const mydata = {
  "lineChartData": {
    // ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"]
    "low": [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
    "medium": [2, 3, 20, 5, 1, 4, 2, 3, 20, 5, 1, 4],
    "high": [3, 10, 13, 15, 22, 30, 3, 10, 13, 15, 22, 30]
  },
  "barChartData": {
    // ["Jan", "Feb", "Mar"]
    "test": {
      "low": [12, 19, 3],
      "medium": [2, 3, 20],
      "high": [3, 10, 13]
    },
    "year": {
      "all": [17, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
    }
  },
  "pieChartData": {
    "low": [12, 19, 3],
    "medium": [2, 3, 20],
    "high": [3, 10, 13]
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
  labels: ["Jan", "Feb", "Mar"],
  datasets: [
    {
      label: "LOW",
      data: mydata.barChartData.test.low,
      backgroundColor: "rgba(80, 200, 120, 0.5)",
      borderColor: "rgba(80, 200, 120, 1)",
      borderWidth: 1,
    },
    {
      label: "MEDIUM",
      data: mydata.barChartData.test.medium,
      backgroundColor: "rgba(255, 206, 86, 0.5)",
      borderColor: "rgba(255, 206, 86, 1)",
      borderWidth: 1,
    },
    {
      label: "HIGH",
      data: mydata.barChartData.test.high,
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
  ]
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


const LowPieChartData = {
  labels: ["In Progress", "Completed", "Stopped"],
  datasets: [
    {
      label: "LOW",
      data: mydata.pieChartData.low,
      backgroundColor: [
        "rgba(0, 255, 255, 0.5)",
        "rgba(0, 255, 0, 0.5)",
        "rgba(255, 165, 0, 0.5)",
      ],
      borderColor: [
        "rgba(0, 255, 255, 1)",
        "rgba(0, 255, 0, 1)",
        "rgba(255, 165, 0, 1)",
      ],
      borderWidth: 1,
    },
  ]
};

const HighPieChartData = {
  labels: ["In Progress", "Completed", "Stopped"],
  datasets: [
    {
      label: "HIGH",
      data: mydata.pieChartData.high,
      backgroundColor: [
        "rgba(0, 255, 255, 0.5)",
        "rgba(0, 255, 0, 0.5)",
        "rgba(255, 165, 0, 0.5)",
      ],
      borderColor: [
        "rgba(0, 255, 255, 1)",
        "rgba(0, 255, 0, 1)",
        "rgba(255, 165, 0, 1)",
      ],
      borderWidth: 1,
    },
  ]
};

const MediumChartData = {
  labels: ["In Progress", "Completed", "Stopped"],
  datasets: [
    {
      label: "MEDIUM",
      data: mydata.pieChartData.medium,
      backgroundColor: [
        "rgba(0, 255, 255, 0.5)",
        "rgba(0, 255, 0, 0.5)",
        "rgba(255, 165, 0, 0.5)",
      ],
      borderColor: [
        "rgba(0, 255, 255, 1)",
        "rgba(0, 255, 0, 1)",
        "rgba(255, 165, 0, 1)",
      ],
      borderWidth: 1,
    },
  ]
};

const PieChartOptions = {


  scales: {
    y: {
      display: false,
    },
    x: {
      display: false,
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

  // scale 0.5
  layout: {
    padding: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
  },
};


const YearBarChartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      // make label disappear
      label: "2023",
      data: mydata.barChartData.year.all,
      backgroundColor: [
        "rgba(128, 0, 0, 0.5)",
        "rgba(128, 64, 0, 0.5)",
        "rgba(128, 0, 64, 0.5)",
        "rgba(128, 64, 64, 0.5)",
        "rgba(128, 0, 128, 0.5)",
        "rgba(128, 64, 128, 0.5)",
        "rgba(128, 128, 0, 0.5)",
        "rgba(128, 128, 64, 0.5)",
        "rgba(128, 128, 128, 0.5)",
        "rgba(0, 0, 0, 0.5)",
        "rgba(0, 0, 128, 0.5)",
        "rgba(0, 128, 0, 0.5)",
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
        "rgba(128, 128, 128, 1)",
        "rgba(0, 0, 0, 1)",
        "rgba(0, 0, 128, 1)",
        "rgba(0, 128, 0, 1)",
      ],
      borderWidth: 1,
    }
  ]
};




export default function Report() {
  return (
    <div className="flex items-center justify-center rounded-md m-3">
      <div className="w-1/2 h-1/2">
        <div className="mx-auto my-10">
          <Line data={LineChartData} options={LineChartOptions} />
        </div>
        <div className="mx-auto my-10">
          <Bar data={BarChartData} options={BarChartOptions} />
        </div>

        <div>
          <Bar data={YearBarChartData} options={BarChartOptions} />
        </div>

        <div className="w-1/2 mx-auto my-10">
          <div className="flex items-center justify-center">
            <Pie data={LowPieChartData} options={PieChartOptions} />
            <Pie data={MediumChartData} options={PieChartOptions} />
            <Pie data={HighPieChartData} options={PieChartOptions} />
          </div>
        </div>

      </div>
    </div>
  );
}
