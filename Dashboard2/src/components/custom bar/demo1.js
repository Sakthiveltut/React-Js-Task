import React from "react";
import { Bar } from "react-chartjs-2";
import {CustomBar} from "./demo2";

const data = {
  labels: ["Label 1", "Label 2", "Label 3", "Label 4"],
  datasets: [{
    data: [80, 60, 40, 20],
  }],
};

const CustomBarChart = () => {
  return (
    <Bar
      data={data}
      options={{
        barComponent: CustomBar,
      }}
    />
  );
};

export default CustomBarChart;
