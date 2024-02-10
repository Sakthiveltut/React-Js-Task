import React,{useState} from 'react';
import MainProgressBarChart from './MainProgressBarChart'; 
import MainDropdown from '../Dropdown/MainDropdown'

const options=['Corps', 'Yeild']

const ProgressBarChart = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const Corps = {
    labels: ['100%', '75%', '50%', '25%', '0'],
    datasets: [
      { label: 'Wheat', value: '70%' },
      { label: 'Sugarcane', value: '50%' },
      { label: 'Corn', value: '85%' },
      { label: 'Paddy', value: '32%' },
      { label: 'Banana', value: '54%' },
      { label: 'Pulses', value: '36%' },
      { label: 'Oilseeds', value: '98%' },
      { label: 'Coconut', value: '45%' },
      { label: 'Onion', value: '23%' }, 
      { label: 'Cotton', value: '86%' },
      { label: 'Millet', value: '99%' },
      { label: 'Others', value: '23%' },

    ],
  };
  const Yeild = {
    labels: ['100%', '75%', '50%', '25%', '0'],
    datasets: [
      { label: 'Wheat', value: '20%' },
      { label: 'Sugarcane', value: '50%' },
      { label: 'Corn', value: '12%' },
      { label: 'Paddy', value: '20%' },
      { label: 'Banana', value: '12%' },
      { label: 'Pulses', value: '90%' },
      { label: 'Oilseeds', value: '38%' },
      { label: 'Coconut', value: '67%' },
      { label: 'Onion', value: '12%' }, 
      { label: 'Cotton', value: '58%' },
      { label: 'Millet', value: '79%' },
      { label: 'Others', value: '36%' },

    ],
  };

  

  return (
    <div>
      <div className="m-1">
        <div className="d-flex justify-content-between ">
            <div  className="mt-1">
                <h5>Yield Distribution</h5>
            </div>
            <div>
                <MainDropdown options={options} onSelect={handleSelect} selectedOption={selectedOption} />
            </div>
        </div>
        <hr className="m-0" style={{backgroundColor:'#e5e7ea'}}/>
      </div>

      <MainProgressBarChart data={ selectedOption == 'Corps'? Corps : Yeild } />
    </div>
  );
};

export default ProgressBarChart;


