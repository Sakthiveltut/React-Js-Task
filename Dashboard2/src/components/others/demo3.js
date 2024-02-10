import React from 'react';
import { ProgressBar } from 'react-chartjs-2';

const data = {
  labels: ['Progress'],
  datasets: [{
    data: [50,34,23,687],
    backgroundColor: '#007BFF',
  }],
};

const ProgressBarChart = () => {
  return <ProgressBar data={data} />;
};

export default ProgressBarChart;
