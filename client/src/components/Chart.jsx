import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Chart() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  const data = {
    labels: [
      "Client 1",
      "Client 2",
      "Client 3",
      "Client 4",
      "Client 5",
      "Client 6",
    ],
    datasets: [
      {
        label: "Completed Tasks",
        data: [20, 15, 30, 40, 25, 30],
        backgroundColor: "#1A56DB",
      },
      {
        label: "Uncompleted Tasks",
        data: [10, 25, 35, 30, 40, 25],
        backgroundColor: "#E5E7EB",
      },
    ],
  };
  return (
    <div class="overflow-x-auto relative">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          Task summary
          <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            Clients with outstanding tasks
          </p>
        </caption>
        <div class="p-20" style={{ width: "1200px", margin: "auto auto" }}>
          <Bar options={options} data={data} />
        </div>
      </table>
    </div>
  );
}

export default Chart;
