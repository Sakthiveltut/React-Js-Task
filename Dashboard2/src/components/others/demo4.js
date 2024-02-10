import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4'],
  datasets: [{
    label: 'Dataset 1',
    data: [80, 60, 40, 20],
  }],
};

const CustomBarChart = () => {
  return (
    <Bar
      data={data}
      options={{
        barComponent: ({ data }) => {
          return (
            <div class="barcontainer h-100">
            <div class="bar" style="height:70%">
            </div>
        </div>
          );
        },
      }}
    />
  );
};

export default CustomBarChart;
