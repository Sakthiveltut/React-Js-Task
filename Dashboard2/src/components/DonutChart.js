import React,{useState} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels'; 
import MainDropdown from './Dropdown/MainDropdown'

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(ChartDataLabels);

const DoughnutChart = () => {

  const options1=['Machinary', 'Animal Husbandry']

  const [selectedOption, setSelectedOption] = useState(options1[0]);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const chooseOption = ()=>{
    if(selectedOption == 'Machinary')
    {
      return [100, 208, 160, 400]
    }
    else if(selectedOption == 'Animal Husbandry'){
      return [123, 345, 123, 456]
    }
  } 


const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green'],
  datasets: [
    {
      data: chooseOption(),
      backgroundColor: ['#fe4460', '#008ffb', '#01e397', '#ffb119'],
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '65%',
  plugins: {
    legend: {
      display: true,
      onClick: (event) => {},
      position: 'right',
      labels: {
        usePointStyle: true,
        pointStyle: 'radio',
        boxWidth: 10,
        boxHeight: 10,
        boxBackgroundColor: 'white',
      },
    },
    datalabels: {
      color: 'white',
      display:true,
      font: {
        size: 12, 
      },
      align: 'center',
      padding: 10,
      formatter: (value, context) => {
        const dataset = context.chart.data.datasets[0];
        const total = dataset.data.reduce((acc, val) => acc + val, 0);
        const percentage = Math.round(((value / total) * 100))+ '%';
        return percentage;
      },
    },
  },
};
   

  return (
    <>
      <div className="m-1">
        <div className="d-flex justify-content-between ">
            <div  className="mt-1">
                <h5>Machineries Owened</h5>
            </div>
            <div>
              <MainDropdown options={options1} onSelect={handleSelect} selectedOption={selectedOption} />            
            </div>
        </div>
      </div>
      <div>
      <Doughnut data={data} options={options} height={200} />
      </div>
    </>
  );
};

export default DoughnutChart;
