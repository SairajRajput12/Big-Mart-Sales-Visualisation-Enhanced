import React from "react"; // Import the necessary library such as React for now.

import Chart from "chart.js/auto"; // Import the Chart.js library.

import { Pie } from "react-chartjs-2"; // In the react-chartjs-2 library, import the Pie component.
import './Pie.css';
// Define an array of labels.
const labels = [
  "React Router",
  "Redux",
  "React Native",
  "Material UI",
  "Next.js",
  "Gatsby",
];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Best React charting libraries",
      backgroundColor: [
        "#00A6B4",
        "#2E4057",
        "#FFD662",
        "#DD1C1A",
        "#FF8600",
        "#0E2F44",
      ],
      borderColor: "#fff",
      borderWidth: 1,
      hoverBackgroundColor: [
        "#003e4f",
        "#4c5b5c",
        "#946c2f",
        "#6b0f12",
        "#b25800",
        "#041f2b",
      ],
      hoverBorderColor: "#000",
      data: [30, 25, 20, 15, 5, 5],
    },
  ],
};

const PieChart = () => {
  return (
    <div className="pie-chart">
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
