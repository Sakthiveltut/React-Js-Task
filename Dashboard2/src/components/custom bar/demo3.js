import React from "react";
import { Bar } from "react-chartjs-2";

// Define your custom bar component
const CustomBar = ({ dataset }) => {
  const { backgroundColor, data } = dataset[0];

  return (
    <div className="barcontainer h-100">
      <div className="bar" style={{ height: `${data}%`, backgroundColor }}></div>
    </div>
  );
};

const data = {
  labels: ["Label 1", "Label 2", "Label 3", "Label 4"],
  datasets: [
    {
      data: [80, 60, 40, 20],
      backgroundColor: ["#007BFF", "#FFC107", "#28A745", "#DC3545"], // Customize bar colors
    },
  ],
};

const CustomBarChart = () => {
  return (
    <Bar
      data={data}
      options={{
        barComponent: CustomBar, // Use the custom bar component
      }}
    />
  );
};

export default CustomBarChart;
