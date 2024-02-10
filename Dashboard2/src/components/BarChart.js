import React, { useState,useEffect } from 'react';
import {Chart,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend,} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import MainDropdown from './Dropdown/MainDropdown'

Chart.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend,);


const BarChart = () => {

  const options1=['Machinary', 'Animal Husbandry']

  const [selectedOption, setSelectedOption] = useState(options1[0]);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const [hoveredBar, setHoveredBar] = useState(null);

  const chooseOption = ()=>{
    if(selectedOption == 'Machinary')
    {
      return [1000, 2000, 3455, 5635, 3564, 3463, 1200, 3734]
    }
    else if(selectedOption == 'Animal Husbandry'){
      return [3000, 4365, 6786, 2345, 9866, 1341, 1434, 6476]
    }
  }

  const data = {
    labels: ['Tractor', 'Electric Pump', 'Diesel Pump', 'Well', 'Sprayer', 'Drill', 'Triller', 'None'],
    datasets: [
      {
        data: chooseOption(),
        backgroundColor: ['#f0e5fc','#f0e5fc','#f0e5fc','#f0e5fc','#f0e5fc','#f0e5fc','#f0e5fc','#f0e5fc'],
        borderColor: ['#f0e5fc','#f0e5fc','#f0e5fc','#f0e5fc','#f0e5fc','#f0e5fc','#f0e5fc','#f0e5fc'],
        borderWidth: 1,
        borderRadius: 10,
        datalabels: {
          display: false,
        },
      }
    ]
  };
  

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cubicInterpolationMode: 'monotone',
    plugins: { 
      legend: {
      display: false,
    }, 
    tooltip: {
      enabled: true,
      // callbacks: {
      //   label: (context) => {
      //     // const label = context.parsed.y;
      //     return 'sakthi'
      //   },
      // }, 
      // external: (context) => {
      //   if (context && context.dataset && context.dataset.data) {
      //     const index = context.dataIndex;
      //     const value = context.dataset.data[index];
      //     return `${value}k`; 
      //   }
      //   return ''; 
      // },
    // },
  },
  },
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: true,
          lineWidth: 1,
          color: 'rgba(0, 0, 0, 0.5)'
        },
        ticks: { display: true },
      },
      y: {
        grid: {
          color: 'rgba(0, 0, 0, 0.3)',
        },
        border: {
          dash: [5, 10],
          display: false,
        },
        ticks: {
          padding: 30,
          suggestedMin: 0,
          stepSize: 1000,
          callback: function (value) {
            if (value === 0) {
              return value;
            } else {
              const numberString = value.toString()
              value = value.toString().substring(0, numberString.length - 3);
              return value + 'k';
            }
          }
        },
      }
    },
    onHover: (event, chartElement) => {
      if (chartElement.length > 0) {
        setHoveredBar(chartElement[0].index);
      } else {
        setHoveredBar(null);
      }
    },
  };

  const getHoverBackgroundColor = () => {
    if (hoveredBar !== null) {
      const backgroundColors = [...data.datasets[0].backgroundColor];
      backgroundColors[hoveredBar] = '#962dff'; 
      return backgroundColors;
    }
    return data.datasets[0].backgroundColor;
  };

  data.datasets[0].backgroundColor = getHoverBackgroundColor();

  return (
    <>
    <div className="m-1">
      <div className="d-flex justify-content-between ">
        <div className="mt-1">
            <h5>Machineries Owened</h5>
        </div>
        <div>
            <MainDropdown options={options1} onSelect={handleSelect} selectedOption={selectedOption} />
        </div>
      </div>
    <hr className="m-0" style={{backgroundColor:'#e5e7ea'}}/>
    </div>
    <div className="chart-container">
      <Bar data={data} options={options} height={300}/>
    </div>
    </>
  );
};

export default BarChart;
